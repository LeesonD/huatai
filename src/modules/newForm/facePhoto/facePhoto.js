import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header } from 'gsp-react';
import FacePhotoViewModel from "./facePhoto.viewmodel";

export default class FacePhoto extends Component {
    constructor(props) {
        super(props, new FacePhotoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container >
                <Header name="授权书拍摄" onLeftArrowClick={this.viewModel.goBack} />
                <Content >
                    <div className="card" style={{ margin: "20 20 20 20" }}  >
                        <div className="card-text" style={{ textalign: "center", margin: "20px 20px 20px 20px" }}>请客户手持授权书，进行拍摄</div>
                        <img id="facePhoto" className="card-img-top" src={require("../../images/sqsPhoto1.png")} alt="手持授权书拍照" />
                        <button className="btn btn-primary" onClick={() => this.viewModel.takePhoto()}>拍摄识别</button>
                        <button className="btn btn-block btn-lg" onClick={()=>this.viewModel.next()}>下一步</button>
                    </div>
                </Content >
            </Container>
        );
    }
}