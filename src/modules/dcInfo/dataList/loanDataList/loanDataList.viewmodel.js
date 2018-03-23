import { ViewModel } from 'gsp-react-framework';

export default class LoanDataListViewModel extends ViewModel {
    goback() {
        this.props.history.push({
            pathname: "/loanOrderList"
        })
    }
    itemClick() {
        window.imp.iCamera.select(this.option, this.success, this.failed);
        console.log("itemClick")
    }
    option = {
        quality: 90, //图片质量
        encodingType: 0, //图片格式
        targetWidth: 512, //0 代表默认值
        targetHeight: 950 //0 代表默认值
    }
    success = function (info) {
        console.log("选照成功")
        var element = document.getElementById("photo_list_pic1");
        element.src = "data:image/jpg;base64," + info.thumbnailData + "";
        this.props.history.push({
            pathname: "/photoList"
        })
    }
    failed = function (info) {
        alert(info);
        console.log("选照失败")
    };
}