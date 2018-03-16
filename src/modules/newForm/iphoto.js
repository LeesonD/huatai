/// <reference path="E:\TFS\IMP\Dev\ImpServer\src\IMPWebservice\webapp\scripts\gsp.rtf.core.js" />
import "./impbase";
(function () {
    gsp = gsp || {};
    gsp.rtf = gsp.rtf || {};

    var iPhoto = {
        successCallback: null,
        errorCallback: null,
        chooseSuccessCallback: null,
        chooseErrorCallback: null
    };

    iPhoto.DestinationType = {
        DATA_URL: 0, //将选择的图片按base64-encoded编码方式返回
        FILE_URI: 1, //将选择的图片返回其在本地的地址,即本机url
        NATIVE_URI: 2//将选择的图片返回其在项目的asset文件夹中的路径
    };

    iPhoto.EncodingType = {
        JPEG: 0, //返回图片为jpeg格式
        PNG: 1//返回图片为png的格式 
    };

    /**
	 * 打开相机照相
	 * 
	 * @param options
	 *            拍照参数
	 * 
	 * @param successCallback   
	 *            拍照成功回调函数
	 * 
	 * @param errorCallback
	 *            拍照失败回调函数
	 * 
	 *
	 */
    iPhoto.takePhotoAndUpload = function (options, successCallback, errorCallback) {
        if (!mobile.isInEMM) {
            alert('takePhotoAndUpload is only support bu yun+');
            return;
        }
        if (!options.type) {
            alert('options must have parameters:"type" ');
            return;
        }
        if (typeof options != 'object') {
            alert('options must be a object!');
            return;
        }

        var op = options;
        op.quality = op.quality || 90;
        op.encodingType = op.encodingType || 0;

        iPhoto.successCallback = successCallback;
        iPhoto.errorCallback = errorCallback;
        var url = op.url || document.location.origin + '/cwbase/gsp/webservice/RESTFulWebService/RestFulServiceForIMP.ashx?resource=gspiot&method=PhotoHandler&type=' + options.type;
        // 封装参数
        var param = {
            success: "gsp.rtf.iPhoto.openSuccessCallback",
            fail: "gsp.rtf.iPhoto.openErrorCallback",
            options: op,
            uploadUrl: url
        };

        if (mobile.os.android) {
            imp.invoke("com.inspur.imp.plugin.photo.PhotoService",
                "takePhotoAndUpload", JSON.stringify(param));
        }
        else {
            var params = {
                className: "PhotoService",
                methodName: "takePhotoAndUpload",
                param: param
            };
            imp.invoke(params);
        }
    };


    /**
	 * 
	 * 成功回调
	 * 
	 * @param info
	 *       输出信息
	 */
    iPhoto.openSuccessCallback = function (info) {
        //回调
        if (typeof info != 'object') {
            info = eval("(" + info + ")");
        }

        iPhoto.successCallback && iPhoto.successCallback(info);
    };

    iPhoto.openErrorCallback = function (info) {
        //回调
        iPhoto.errorCallback && iPhoto.errorCallback(info);
    };

    /**
	 * 从相册获取图片
	 * 
	 * @param options
	 *            图片选择参数
	 * @param successCallback
	 *            图片选择成功回调函数 
	 * 
	 * @param errorCallback
	 *            图片选择失败回调函数
	 * 
	 */
    iPhoto.selectAndUpload = function (options, successCallback, errorCallback) {

        if (!mobile.isInEMM) {
            alert('takePhotoAndUpload is only support bu yun+');
            return;
        }
        if (!options.type) {
            alert('options must have parameters:"type" ');
            return;
        }
        if (typeof options != 'object') {
            alert('options must be a object!');
            return;
        }

        var op = options;
        op.quality = op.quality || 90;
        op.encodingType = op.encodingType || 0;
        op.picTotal = op.picTotal || 6;

        iPhoto.chooseSuccessCallback = successCallback;
        iPhoto.chooseErrorCallback = errorCallback;
        var url = op.url || document.location.origin + '/cwbase/gsp/webservice/RESTFulWebService/RestFulServiceForIMP.ashx?resource=gspiot&method=PhotoHandler&type=' + options.type;
        // 封装参数
        var param = {
            success: "gsp.rtf.iPhoto.selectSuccessCallback",
            fail: "gsp.rtf.iPhoto.selectErrorCallback",
            options: op,
            uploadUrl: url
        };

        if (mobile.os.android) {
            imp.invoke("com.inspur.imp.plugin.photo.PhotoService",
                "selectAndUpload", JSON.stringify(param));
        }
        else {
            var params = {
                className: "PhotoService",
                methodName: "selectAndUpload",
                param: param
            };
            imp.invoke(params);
        }

    };
    /**
	 * 
	 * 成功回调
	 * 
	 * @param info
	 *       输出信息
	 */
    iPhoto.selectSuccessCallback = function (info) {
        //回调
        if (typeof info != 'object') {
            info = eval("(" + info + ")");
        }
        iPhoto.chooseSuccessCallback && iPhoto.chooseSuccessCallback(info);
    };

    iPhoto.selectErrorCallback = function (info) {
        //回调
        iPhoto.chooseErrorCallback && iPhoto.chooseErrorCallback(info);
    };



    gsp.rtf.iPhoto = iPhoto;
})();
