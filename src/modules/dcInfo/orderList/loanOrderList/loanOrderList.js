import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button, Card } from 'gsp-react';
import LoanOrderListViewModel from "./loanOrderList.viewmodel";

export default class LoanOrderList extends Component {
    constructor(props) {
        super(props, new LoanOrderListViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="订单列表" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <Card
                        title={<h6>张三</h6>}
                        topRight={<div>17862923865</div>}
                        middleLeft={<div>370000199001011118</div>}
                        middleRight={<div >金额：12,000,000</div>}
                        text={<div className="dd1">请补充三种资料</div>}
                        bottomRight={<div>2018-03-22</div>}
                        onClick={this.viewModel.cardClick.bind(this)}
                    ></Card >
                     <Card
                        title={<h6>张三</h6>}
                        topRight={<div>17862923865</div>}
                        middleLeft={<div>370000199001011118</div>}
                        middleRight={<div >金额：12,000,000</div>}
                        text={<div className="dd1">请补充一种资料</div>}
                        bottomRight={<div>2018-03-22</div>}
                        onClick={this.viewModel.cardClick.bind(this)}
                    ></Card >
                     <Card
                        title={<h6>张三</h6>}
                        topRight={<div>17862923865</div>}
                        middleLeft={<div>370000199001011118</div>}
                        middleRight={<div >金额：12,000,000</div>}
                        text={<div className="dd1">请补充两种资料</div>}
                        bottomRight={<div>2018-03-22</div>}
                        onClick={this.viewModel.cardClick.bind(this)}
                    ></Card >
                </Content>
            </Container>
        );
    }
}