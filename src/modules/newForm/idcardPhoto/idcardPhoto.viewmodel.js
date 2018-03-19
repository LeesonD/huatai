import { ViewModel } from 'gsp-react-framework';
import $ from "jquery";
// import "../../../common/utils/imp";
// import "../../../common/utils/jquery-2.1.1.min"

export default class IDcardPhotoViewModel extends ViewModel {
    option = {
        quality: 90, //图片质量
        encodingType: 0, //图片格式
        targetWidth: 1024, //0 代表默认值
        targetHeight: 1900 //0 代表默认值
    }
    success = function (info) {
        alert(info.thumbnailUrl);
        alert(info.originalUrl);

        $("<br/><label>缩略图：</label><img  class=\"img thumb\" src=\"data:image/jpg;base64," + info.thumbnailData + "\"/>").appendTo($("#ui_content1"));
        $("<br/><label>原版图：</label><img  class=\"img\" src=\"data:image/jpg;base64," + info.originalData + "\"/>").appendTo($("#ui_content1"));
    };

    failed = function (info) {
        alert(info);
    };

    goBack() {
        this.props.history.goBack();
    }
    takePhoto() {
        console.log("拍照片");
        window.imp.iCamera.open(this.option, this.success, this.failed);
    }
    discern() {
        this.props.history.push({
            pathname: "/discern"
        });
    }
}
