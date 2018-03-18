import React from "react";
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Input, Footer } from 'gsp-react';
import JxsInfoViewModel from "./jxsInfo.viewmodel";

export default class JxsInfo extends Component {
    constructor(props) {
        super(props, new JxsInfoViewModel());
        this.viewModel.bindDataToStorage();
        this.state = {
            info: [{
                "seller": "",

            }]
        }
    }
    render() {
        return (
            <Container>
                <Header name="经销商信息" onLeftArrowClick={this.viewModel.goBack} />
                <Content>
                    <Input label={"销售人员"} name={"seller"} text={this.state.info[0]["seller"]}placeholder={"账户提取，可以修改"} align={"left"} />
                    <Input label={"销售人员电话"} name={"name"} text={this.state.info[0]["name"]}placeholder={"账户提取，可以修改"} align={"left"} />
                    <Input label={"金融人员"} name={"name"} text={this.state.info[0]["name"]} placeholder={"账户提取，可以修改"}align={"left"} />
                    <Input label={"金融人员电话"} name={"name"} text={this.state.info[0]["name"]}placeholder={"账户提取，可以修改"} align={"left"} />
                </Content>
                <Footer buttonName={["下一步"]} size="sm" callBackFooterButtonClick={[this.viewModel.next]}>
                </Footer>
            </Container>
        );
    }
}