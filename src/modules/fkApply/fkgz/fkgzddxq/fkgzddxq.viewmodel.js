import { ViewModel } from 'gsp-react-framework';

export default class FkgzddxqViewModel extends ViewModel {
    constructor(props) {
        super();
        this.setState({
            selected: 0
        })
    }
    goback() {
        this.props.history.push({
            pathname: "/fkgzList"
        })
    }
    changeTab(index) {
        this.setState({
            selected: index
        });
        let state = this.getState();
    }
    bczl() {
        this.props.history.push({
            pathname: "/loanDataList"
        });
    }
}