import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button ,Footer} from 'gsp-react';
import FapiaoPhotoViewModel from "./fapiaoPhoto.viewmodel";
import "./fapiaoPhoto.css";

export default class HomePahe extends Component {
    constructor(props) {
        super(props, new FapiaoPhotoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="发票拍摄" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <div ><label id="d1">请对准发票拍摄，保持光线充足</label></div>
                    <br />
                    <div >
                        <img id="fapiaoPhoto" src={require("../../../../../images/fapiao.png")} alt="发票照片" />
                    </div>
                    {/* <Button bstyle={"primary"} size="sm" text={"打开相机"} col={12} onClick={this.viewModel.takePhoto} />
                    <Button bstyle={"primary"} size="sm" text={"识别"} col={12} onClick={this.viewModel.discern} /> */}
                </Content>
                <Footer size="lg"
                    style={[{ 'color': 'white', 'backgroundColor': '#318ccf' }]}
                    buttonName={["打开相机", "识别"]}
                    callBackFooterButtonClick={[
                        this.viewModel.takePhoto, this.viewModel.discern]}>
                </Footer>

            </Container>
        );
    }
}