import { ViewModel } from 'gsp-react-framework';

export default class FapiaoChooseViewModel extends ViewModel {
    goback() {
        this.props.history.push({
            pathname: "/fksq"
        })
    }
    hasFapiao() {
        this.props.history.push({
            pathname: "/fapiaoPhoto"
        })
    }
    noFapiao() {
        this.props.history.push({
            pathname: "/carInfoEntering"
        })
    }
}