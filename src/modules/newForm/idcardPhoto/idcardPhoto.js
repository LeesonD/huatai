import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header } from 'gsp-react';
import IDcardPhotoViewmodel from "./idcardPhoto.viewmodel";

export default class IDcardPhoto extends Component {
    constructor(props) {
        super(props, new IDcardPhotoViewmodel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="身份证拍摄" onLeftArrowClick={this.viewModel.goBack} />
                <Content >
                    <div className="card"  >
                        <img id="idcardf" className="card-img-top" src={require("../../images/idcardf.png")} alt="身份证人面照" />
                        <button className="btn btn-primary" onClick={()=>this.viewModel.takePhoto()}>拍摄身份证人面照</button>
                    </div>
                    <p/>
                    <div className="card" >
                        <img id="idcardb" className="card-img-top" src={require("../../images/idcardb.png")} alt="身份国徽照"/>
                        <button className="btn btn-primary" onClick={()=>this.viewModel.takePhoto1()}>拍摄身份证国徽照</button>
                    </div>
                    <button className="btn btn-block btn-lg" onClick={()=>this.viewModel.discern()}>识别</button>
                </Content>
            </Container>
        );
    }
}