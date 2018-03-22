import { ViewModel } from 'gsp-react-framework';

export default class FapiaoInfoViewModel extends ViewModel{
	goback(){
        this.props.history.push({
            pathname:"/fapiaoPhoto"
        })
    }
    onChange(event){
        console.log("onChange");
        //创建data后开放，实现内容改变
        // let target = event.target;
        // this.data[0][target.name] = target.value;
    }
    next(){
        this.props.history.push({
            pathname:"/mianqianVideo"
        })
    }
}