import { ViewModel } from 'gsp-react-framework';

export default class TotalInfoViewModel extends ViewModel{
    goBack() {
        this.props.history.push({
            pathname:"/sqsPhoto"
        });
    }
    dealer(){
        this.props.history.push({
          pathname:"/jxsInfo"  
        });
    }
    loan(){
        this.props.history.push({
            pathname:"/loanInfo"  
          });
    }
    submit(){
        this.props.history.push({
            pathname:"/"
        })
    }
}