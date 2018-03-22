import { ViewModel } from 'gsp-react-framework';

export default class MianqianVideoViewModel extends ViewModel{
	goback(){
        this.props.history.push({
            pathname:"/fapiaoInfo"
        })
    }
    takePhoto() {
        console.log("拍照片");
        window.imp.iCamera.open(this.option, this.success, this.failed);
    }
    next() {
        this.props.history.push({
            pathname: "/loanHetongPhoto"
        })
    }
    option = {
        quality: 90, //图片质量
        encodingType: 0, //图片格式
        targetWidth: 0, //0 代表默认值
        targetHeight: 0 //0 代表默认值
    }
    success = function (info) {
        console.log(info.thumbnailUrl);
        var element = document.getElementById("mianqianVideo");
        element.src = "data:image/jpg;base64," + info.thumbnailData + "";
    };
    failed = function (info) {
        alert(info);
    };
}