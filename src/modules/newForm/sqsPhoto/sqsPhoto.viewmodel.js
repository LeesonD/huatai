import { ViewModel } from 'gsp-react-framework';

export default class SqsPhotoViewModel extends ViewModel{
    goBack() {
        this.props.history.push({
            pathname:"/facePhoto"
        });
    }

    takePhoto(){
        this.props.history.push({
            pathname:"/sqsPhone"
        });
    }
    next(){
        this.props.history.push({
            pathname:"/totalInfo"
        });
    }
}