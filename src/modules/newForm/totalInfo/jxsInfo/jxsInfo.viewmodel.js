import { ViewModel } from 'gsp-react-framework';

export default class JxsInfoViewModel extends ViewModel{
    goBack(){
        this.props.history.push({
            pathname:"/totalInfo"
        });
    }
    next(){
        this.props.history.push({
            pathname:"/loanInfo"
        })
    }
}