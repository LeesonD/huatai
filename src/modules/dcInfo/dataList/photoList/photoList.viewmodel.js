import { ViewModel } from 'gsp-react-framework';

export default class PhotoListViewModel extends ViewModel{
	goback(){
        this.props.history.push({
            pathname:"/loanDataList"
        })
    }
    submit(){
        alert("提交成功");
        this.props.history.push({
            pathname:"/loanDataList"
        })
        
    }
}