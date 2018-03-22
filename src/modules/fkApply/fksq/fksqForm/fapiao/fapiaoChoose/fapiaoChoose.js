import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button } from 'gsp-react';
import FapiaoChooseViewModel from "./fapiaoChoose.viewmodel";

export default class HomePahe extends Component {
    constructor(props) {
        super(props, new FapiaoChooseViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="选择发票" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                <Button bstyle={"primary"} size="lg" text={"有发票"} col={12} onClick={this.viewModel.hasFapiao} />
                <Button bstyle={"primary"} size="lg" text={"无发票"} col={12} onClick={this.viewModel.noFapiao} />
                </Content>
            </Container>
        );
    }
}