import { ViewModel } from 'gsp-react-framework';

export default class LoanOrderListViewModel extends ViewModel {
    goback() {
        this.props.history.push({
            pathname: "/orderType"
        })
    }
    cardClick() {
        this.props.history.push({
            pathname: "/loanDataList"
        })
    }
}