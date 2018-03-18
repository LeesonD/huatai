import React from "react";
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Footer, Input } from 'gsp-react';
import SubmitFormViewModel from "./submitForm.viewmodel";

export default class SubmitForm extends Component {
    constructor(props) {
        super(props, new SubmitFormViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="提交结果" onLeftArrowClick={this.viewModel.close} />
                
            </Container>
        );
    }
}