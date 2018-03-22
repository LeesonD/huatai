import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Listview, Footer } from 'gsp-react';
import LoanHetongInfoViewModel from "./loanHetongInfo.viewmodel";

export default class LoanHetongInfo extends Component {
    constructor(props) {
        super(props, new LoanHetongInfoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="贷款合同信息" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <Listview text={"合同编号"}>
                        <input type="text" value={""} placeholder={"不可修改OCR"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"车架号"}>
                        <input type="text" value={""} placeholder={"不可修改OCR"} style={{ width: '100%' }} />
                    </Listview>
                </Content>
                <Footer size="lg"
                    style={[{ 'color': 'white', 'backgroundColor': '#318ccf' }]}
                    buttonName={["下一步"]}
                    callBackFooterButtonClick={[this.viewModel.next]}>
                </Footer>
            </Container>
        );
    }
}