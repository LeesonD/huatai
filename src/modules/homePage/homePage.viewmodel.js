import { ViewModel } from 'gsp-react-framework';

export default class HomePageViewModel extends ViewModel{

    loanApply(){
        this.props.history.push({
            pathname:"/loanApply"
        });
    }
    fkApply(){
        this.props.history.push({
            pathname:"/fkApplyHome"
        });
    }
    dczl(){
        console.log("代充资料");
    }
    dhgl(){
        console.log("贷后管理");
    }
    query(){
        console.log("查询");
    }
}