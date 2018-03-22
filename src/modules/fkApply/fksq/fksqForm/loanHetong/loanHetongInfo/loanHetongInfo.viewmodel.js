import { ViewModel } from 'gsp-react-framework';

export default class LoanHetongInfoViewModel extends ViewModel {
    goback() {
        this.props.history.push({
            pathname: "/loanHetongPhoto"
        })
    }
    next() {
        this.props.history.push({
            pathname: "/fkTotalInfo"
        })
    }
}