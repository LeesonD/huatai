import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button } from 'gsp-react';
import HomePageViewModel from "./homePage.viewmodel";

export default class HomePage extends Component {
    constructor(props) {
        super(props, new HomePageViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="首页" onLeftArrowClick={this.viewModel.info}></Header>
                <Content>
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="lg"
                        text="贷款申请" col={6} onClick={this.viewModel.loanApply} />
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="lg"
                        text="放款申请" col={6} onClick={this.viewModel.fkApply} />
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="lg"
                        text="待充资料" col={6} onClick={this.viewModel.dczl} />
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="lg"
                        text="贷后管理" col={6} onClick={this.viewModel.dhgl} />
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="sm"
                        text="查询" col={12} onClick={this.viewModel.query} />
                </Content>
            </Container>
        );
    }
}