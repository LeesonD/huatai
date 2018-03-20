import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header } from 'gsp-react';
import SqsPhotoViewModel from "./sqsPhoto.viewmodel";

export default class SqsPhoto extends Component {
    constructor(props) {
        super(props, new SqsPhotoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="授权书" onLeftArrowClick={this.viewModel.goBack} />
                <Content >
                    <div className="card" style={{ margin: "20 20 20 20" }}  >
                        <div className="card-text" style={{ textalign: "center", margin: "20px 20px 20px 20px" }}>请拍摄授权书全图，保持光纤充足</div>
                        <img id="sqsPhoto" className="card-img-top" src={require("../../images/sqsPhoto1.png")} alt="手持授权书拍照" />
                        <button className="btn btn-primary" onClick={() => this.viewModel.takePhoto()}>拍摄</button>
                        <p/>
                        <button className="btn btn-secondary" onClick={() => this.viewModel.next()}>下一步</button>
                    </div>
                </Content>
            </Container>
        );
    }
}