import { ViewModel } from 'gsp-react-framework';
import { schema } from "./loanCalc.schema";

export default class LoanCalcViewModel extends ViewModel {
    constructor(){
        super(schema);

    }
    calc(){
        this.props.history.push({
            pathname:"/result"
        })
    }
    goBack() {
        this.props.history.push({
            pathname:"/loanApply"
        });
    }

}