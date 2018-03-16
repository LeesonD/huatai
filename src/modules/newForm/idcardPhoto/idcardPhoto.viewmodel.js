import { ViewModel } from 'gsp-react-framework';
// import "./iphoto";

export default class IDcardPhotoViewModel extends ViewModel {
    goBack() {
        this.props.history.push({
            pathname: "/result"
        })
    }
    takePhoto() {
        console.log("拍照片");
    }
    discern(){
        this.props.history.push({
            pathname:"/discern"
        });
    }
}
