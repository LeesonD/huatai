import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button, Footer } from 'gsp-react';
import PhotoListViewModel from "./photoList.viewmodel";

export default class PhotoList extends Component {
    constructor(props) {
        super(props, new PhotoListViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <img id="photo_list_pic1" src={require("../../../images/idcardf.png")} alt="请选择照片" />
                </Content>
                <Footer size="sm"
                    style={[{ 'color': 'white', 'backgroundColor': '#318ccf' }]}
                    buttonName={["提交"]}
                    callBackFooterButtonClick={[this.viewModel.submit]}>
                </Footer>
            </Container>
        );
    }
}