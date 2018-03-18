import { ViewModel } from 'gsp-react-framework';
import { showModal } from "gsp-react";

export default class LoanInfoViewModel extends ViewModel {
    goback() {
        this.props.history.push({
            pathname: "/totalInfo"
        });
    }
    back() {
        this.props.history.push({
            pathname: "/jxsInfo"
        });
    }
    next() {
        showModal("alert",
            "提交成功！",
            "请耐心等待终审结果",
            [
                { text: '确定', onPress: () => this.callback() },
            ]
        )
        // this.props.history.push({
        //     pathname: "/submitForm"
        // });
    }
    callback() {
        this.props.history.push({
            pathname: "/loanApply"
        })
    }
}