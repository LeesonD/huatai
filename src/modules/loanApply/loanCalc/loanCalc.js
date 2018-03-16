import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Footer, Input } from 'gsp-react';
import LoanCalcViewModel from "./loanCalc.viewmodel";
import "./loanCalc.css";

export default class LoanCalc extends Component {
    constructor(props){
        super(props,new LoanCalcViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <div className="loanCalc detail-page transition-item">
                <Container>
                    <Header name="贷款试算" onLeftArrowClick={this.viewModel.goBack}></Header>
                    <Content bgColor={'#ebf1f3'}>
                        <Input label={"品牌"}  placeHolder={"请选择"} align={"left"} clear={true}/>
                        <Input label={"车型"}  placeHolder={"请选择"} align={"left"} clear={true}/>
                        <Input label={"申请类别"}  placeHolder={"请选择"} align={"left"} clear={true}/>
                        <Input label={"金融产品"}  placeHolder={""} align={"left"} clear={true}/>
                        <Input label={"期限"}  placeHolder={""} align={"left"} clear={true}/>
                        <Input label={"车辆全额"}  placeHolder={"请输入"} align={"left"} clear={true}/>
                        <Input label={"贷款全额"}  placeHolder={"请输入"} align={"left"} clear={true}/>
                        <Input label={"首付比例"}  placeHolder={"自动计算"} align={"left"} clear={true}/>
                        <Input label={"尾款全额"}  placeHolder={"请输入"} align={"left"} clear={true}/>
                        <Input label={"经销商贴息"}  placeHolder={"请输入"} align={"left"} clear={true}/>
                    </Content>
                    <Footer size="sm" buttonName={["计算"]}
                        callBackFooterButtonClick={[
                            this.viewModel.calc.bind(this)
                        ]}
                        >
                    </Footer>
                </Container>
            </div>
        );
    }
} 