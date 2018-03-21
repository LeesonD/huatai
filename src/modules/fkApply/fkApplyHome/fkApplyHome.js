import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button } from 'gsp-react';
import FkApplyHomeViewModel from "./fkApplyHome.viewmodel";

export default class HomePahe extends Component {
    constructor(props) {
        super(props, new FkApplyHomeViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="放款申请" onLeftArrowClick={this.viewModel.goback}></Header> 
                <Content>
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="sm"
                        text="放款申请" col={6} onClick={this.viewModel.fksq} />
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="sm"
                        text="放款跟踪" col={6} onClick={this.viewModel.fkgz} />
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="sm"
                        text="放款退回件" col={6} onClick={this.viewModel.fkthj} />
                    <Button bstyle={"new"}
                        newStyle={{ color: 'white', backgroundColor: '#318ccf', borderRadius: '50' }}
                        size="sm"
                        text="放款委托" col={6} onClick={this.viewModel.fkwt} />
                </Content>
            </Container>
        );
    }
}