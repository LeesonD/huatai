import { ViewModel } from 'gsp-react-framework';

export default class SqsPhotoViewModel extends ViewModel {
    goBack() {
        this.props.history.push({
            pathname: "/facePhoto"
        });
    }

    takePhoto() {
        console.log("拍照片");
        window.imp.iCamera.open(this.option, this.success, this.failed);
    }
    next() {
        this.props.history.push({
            pathname: "/totalInfo"
        });
    }
    option = {
        quality: 90, //图片质量
        encodingType: 0, //图片格式
        targetWidth: 1024, //0 代表默认值
        targetHeight: 1900 //0 代表默认值
    }
    success = function (info) {
        alert(info.thumbnailUrl);
        var element = document.getElementById("sqsPhoto");
        element.src = "data:image/jpg;base64," + info.thumbnailData + "";

    };

    failed = function (info) {
        alert(info);
    };
}