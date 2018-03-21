import { ViewModel } from 'gsp-react-framework';
import {  showModal } from 'gsp-react';

export default class FksqViewModel extends ViewModel {
    constructor(props) {
        super();
        this.setState({
            selected: 0
        })
    }
    goback() {
        this.props.history.push({
            pathname: "/fkApplyHome"
        })
    }

    changeTab(index) {
        this.setState({
            selected: index
        });
        let state = this.getState();
        console.log("Tab clicked..." + state.selected + " " + index);
    }
    cardClick(){
        console.log("CardClick");
    }
    showModal(index) {
        index.stopPropagation(); //重要！
        showModal("alert",
        "张三", 
        "", 
            [
                { text: '发起委派', onPress: () => this.fqwp() },
                { text: '查看核准通知书', onPress: () =>this.ckhztzs() },
                { text: '放弃贷款', onPress: () =>this.fqdk() },
                { text: '取消', onPress: () =>this.cancel() }
            ]
        )
    }
    fqwp(){
        console.log("fqwp");
    }
    
    ckhztzs(){
        console.log("ckhztzs");
    }
    
    fqdk(){
        console.log("fqdk");
    }
    cancel(){}
}