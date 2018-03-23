import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button } from 'gsp-react';
import OrderTypeViewModel from "./orderType.viewmodel";
import "./orderType.css";

export default class OrderType extends Component {
    constructor(props) {
        super(props, new OrderTypeViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="订单类型" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <br /><br />
                    <div className="ddv1">
                        <Button bstyle={"new"}
                            newStyle={{ display: 'float', color: 'white', backgroundColor: '#318ccf', borderRadius: '0', padding: '20px' }}
                            size="lg"
                            text="贷款订单" col={12} onClick={this.viewModel.dkdd} />
                        <br /><br />
                        <Button bstyle={"new"}
                            newStyle={{ display: 'float', color: 'white', backgroundColor: '#318ccf', borderRadius: '0', padding: '20px' }}
                            size="lg"
                            text="放款订单" col={12} onClick={this.viewModel.dkdd} />
                    </div>
                </Content>
            </Container>
        );
    }
}