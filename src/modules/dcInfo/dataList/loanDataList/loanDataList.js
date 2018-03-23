import React from 'react';
import { Component } from 'gsp-react-framework';
import Icon from 'antd/lib/icon';
import { Container, Content, Header, Button, Listview } from 'gsp-react';
import LoanDataListViewModel from "./loanDataList.viewmodel";

export default class LoanDataList extends Component {
    constructor(props) {
        super(props, new LoanDataListViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="资料列表" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <Listview text={"身份证正面照 (1)"}>
                        <div style={{ width: '100%' }} />
                        <div className="ml-2" onClick={this.viewModel.itemClick}><Icon type="right" size={'lg'} /></div>
                    </Listview>
                    <Listview text={"身份证反面照 (1)"}>
                        <div style={{ width: '100%' }} />
                        <div className="ml-2" onClick={this.viewModel.itemClick}><Icon type="right" size={'lg'} /></div>
                    </Listview>
                    <Listview text={"银行卡照片 (1)"}>
                        <div style={{ width: '100%' }} />
                        <div className="ml-2" onClick={this.viewModel.itemClick}><Icon type="right" size={'lg'} /></div>
                    </Listview>
                    <Listview text={"一寸照 (1)"}>
                        <div style={{ width: '100%' }} />
                        <div className="ml-2" onClick={this.viewModel.itemClick}><Icon type="right" size={'lg'} /></div>
                    </Listview>
                    <Listview text={"贷款申请单 (1)"}>
                        <div style={{ width: '100%' }} />
                        <div className="ml-2" onClick={this.viewModel.itemClick}><Icon type="right" size={'lg'} /></div>
                    </Listview>
                    <Listview text={"驾驶照 (1)"}>
                        <div style={{ width: '100%' }} />
                        <div className="ml-2" onClick={this.viewModel.itemClick}><Icon type="right" size={'lg'} /></div>
                    </Listview>
                </Content>
            </Container>
        );
    }
}