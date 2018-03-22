import { ViewModel } from 'gsp-react-framework';

export default class FkgzListViewModel extends ViewModel{
	goback(){
        this.props.history.push({
            pathname:"/fkApplyHome"
        })
    }
    cardClick(){
        this.props.history.push({
            pathname:"/fkgzddxq"
        })
    }
}