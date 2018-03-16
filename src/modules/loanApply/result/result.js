import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Footer, Listview } from 'gsp-react';
import resultViewmodel from "./result.viewmodel";

export default class Result extends Component {
    constructor(props) {
        super(props, new resultViewmodel());
        this.viewModel.bindDataToStorage();
    }

    render() {
        return (
            <div className="loanCalc detail-page transition-item">
                <Container>
                    <Header name="还款计划结果" onLeftArrowClick={this.viewModel.goback}></Header>
                    <Content>
                        <Listview text={"期限(月)"}>
                            <input type="text" value={"24"} placeholder={"请输入时间"}
                                readOnly="true" style={{ width: '100%' }} />
                        </Listview>
                        <Listview text={"首付金额"}>
                            <input type="text" value={"1,000,000"}
                                readOnly="true" style={{ width: '100%' }} />
                        </Listview>
                        <Listview text={"贷款全额"}>
                            <input type="text" value={"1,000,000"}
                                readOnly="true" style={{ width: '100%' }} />
                        </Listview>
                        <Listview text={"最后一期金额"}>
                            <input type="text" value={"1,000,000"}
                                readOnly="true" style={{ width: '100%' }} />
                        </Listview>
                    </Content>
                    <Footer size="sm" buttonName={["一键申请"]}
                        callBackFooterButtonClick={[
                            this.viewModel.apply.bind(this.viewModel, this)
                        ]}>
                    </Footer>
                </Container>
            </div>
        );
    }

}