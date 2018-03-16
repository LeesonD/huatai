import { ViewModel } from 'gsp-react-framework';

export default class ResultViewModel extends ViewModel{
    apply(){
        this.props.history.push({
            pathname:"/idcardPhoto"
        })
    }
    goback(){
        this.props.history.goBack();
    }
}