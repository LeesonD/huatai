import React from "react";
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Footer, Button } from 'gsp-react';
import TotalInfoViewModel from "./totalInfo.viewmodel";

export default class ToatlInfo extends Component {
    constructor(props) {
        super(props, new TotalInfoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="全量信息" onLeftArrowClick={this.viewModel.goBack} />
                <Content>
                    <Button bstyle={"default"} size="lg" text={"经销商信息"} col={12} onClick={() => this.viewModel.dealer()} />
                    <p />
                    <Button bstyle={"default"} size="lg" text={"贷款信息"} col={12} onClick={() => this.viewModel.loan()} />
                </Content>
                {/* <Footer buttonName={["提交"]} size="sm" callBackFooterButtonClick={[this.viewModel.submit]}>
                </Footer> */}
            </Container>
        );
    }
}