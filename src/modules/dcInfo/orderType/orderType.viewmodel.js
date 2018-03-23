import { ViewModel } from 'gsp-react-framework';

export default class OrderTypeViewModel extends ViewModel{
	goback(){
        this.props.history.push({
            pathname:"/homePage"
        })
    }
    dkdd(){
        
    }
}