import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button ,Footer} from 'gsp-react';
import MianqianVideoViewModel from "./mianqianVideo.viewmodel";
import "./mianqianVideo.css";

export default class HomePahe extends Component {
    constructor(props) {
        super(props, new MianqianVideoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
				<Header name="面签视频" onLeftArrowClick={this.viewModel.goback}></Header> 
				<Content>
                    <div><label className="l1">1.请采集贷款人面部</label></div><br/>
                    <div><label className="l1">1.请采集贷款人签字</label></div><br/>
                    <div><label className="l1">1.请采集贷款人手持合同</label></div>
                    <br />
                    <br/>
                    <div >
                        <img className="video" id="mianqianVideo" height="100" style={{display:"block"}} src={require("../../../../images/mianqianVideo.png")} alt="面签视频" />
                    </div>
                </Content>
                <Footer size="lg"
                    style={[{ 'color': 'white', 'backgroundColor': '#318ccf' }]}
                    buttonName={["打开相机", "下一步"]}
                    callBackFooterButtonClick={[
                        this.viewModel.takePhoto, this.viewModel.next]}>
                </Footer>
            </Container>
        );
    }
}