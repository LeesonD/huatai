import { ViewModel } from 'gsp-react-framework';
import { showModal } from "gsp-react";

export default class FkTotalInfoViewModel extends ViewModel {
    goback() {
        this.props.history.push({
            pathname: "/loanHetongInfo"
        })
    }
    submit() {
        showModal("alert",
            "提交成功！",
            "请到放款跟踪中查询结果",
            [
                { text: '确定', onPress: () => this.callback() },
            ]
        )
    }
    callback() {
        this.props.history.push({
            pathname: "/fkApplyHome"
        })
    }
}