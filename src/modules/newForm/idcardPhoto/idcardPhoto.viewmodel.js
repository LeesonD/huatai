import { ViewModel } from 'gsp-react-framework';
// import $ from "jquery";
// import "../../../common/utils/imp";
// import "../../../common/utils/jquery-2.1.1.min"

export default class IDcardPhotoViewModel extends ViewModel {
    // imgsrc (info) {
    //     if (!this.success) {
    //         return "../../images/idcardf.png"
    //     }else{
    //         return "data:image/jpg;base64," + info.thumbnailData + ""
    //     }
    // }
    // imgsrc1 (info) {
    //     if (!this.success) {
    //         return "../../images/idcardb.png"
    //     }else{
    //         return "data:image/jpg;base64," + info.thumbnailData + ""
    //     }
    // }
    option = {
        quality: 90, //图片质量
        encodingType: 0, //图片格式
        targetWidth: 1024, //0 代表默认值
        targetHeight: 1900 //0 代表默认值
    }
    success = function (info) {
        alert(info.thumbnailUrl);
        var element = document.getElementById("idcardf");
        element.src = "data:image/jpg;base64," + info.thumbnailData + "";
        // $("<br/><label>原版图：</label><img  class=\"img\" src=\"data:image/jpg;base64," + info.originalData + "\"/>").appendTo($("#ui_content1"));
    };

    success1 = function (info) {
        alert(info.thumbnailUrl);
        var element = document.getElementById("idcardb");
        element.src = "data:image/jpg;base64," + info.thumbnailData + "";
    };
    failed = function (info) {
        alert(info);
    };

    goBack() {
        this.props.history.push({
            pathname:"/loanApply"
        })
    }
    takePhoto() {
        console.log("拍照片");
        window.imp.iCamera.open(this.option, this.success, this.failed);
    }
    takePhoto1() {
        console.log("拍照片");
        window.imp.iCamera.open(this.option, this.success1, this.failed);
    }
    discern() {
        this.props.history.push({
            pathname: "/discern"
        });
    }
}
