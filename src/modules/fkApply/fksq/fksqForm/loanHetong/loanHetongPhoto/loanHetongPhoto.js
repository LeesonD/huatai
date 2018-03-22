import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button, Footer } from 'gsp-react';
import LoanHetongPhotoViewModel from "./loanHetongPhoto.viewmodel";

export default class LoanHetongPhoto extends Component {
    constructor(props) {
        super(props, new LoanHetongPhotoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="贷款合同" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <br />
                    <div><label >请对准贷款合同相关信息拍摄，保持光线充足</label></div>
                    <br />
                    <div>
                        <img className="lhtPhoto" id="loanHetongPhoto" src={require("../../../../../images/loanHetongPhoto.png")} alt="贷款合同" />
                    </div>
                </Content>
                <Footer size="lg"
                    style={[{ 'color': 'white', 'backgroundColor': '#318ccf' }]}
                    buttonName={["打开相机", "识别"]}
                    callBackFooterButtonClick={[
                        this.viewModel.takePhoto, this.viewModel.next]}>
                </Footer>
            </Container>
        );
    }
}