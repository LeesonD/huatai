import { ViewModel } from 'gsp-react-framework';

export default class FacePhotoViewModel extends ViewModel{
    goBack() {
        this.props.history.push({
            pathname:"/discern"
        });
    }
    takePhoto(){
        this.props.history.push({
            pathname:"/sqsPhoto"
        });
    }
}