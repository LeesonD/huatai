import { ViewModel } from 'gsp-react-framework';

export default class FkApplyHomeViewModel extends ViewModel {
    goback() {
        this.props.history.push({
            pathname: "/homePage"
        })
    }
    fksq() {
        this.props.history.push({
            pathname: "/fksq"
        })
    }
    fkgz() {
        alert("放款跟踪");
        console.log("放款跟踪");
    }
    fkthj() {
        alert("放款退回件");
        console.log("放款退回件");
    }
    fkwt() {
        alert("放款委托");
        console.log("放款委托");
    }
}