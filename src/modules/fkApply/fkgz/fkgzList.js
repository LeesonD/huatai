import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button, Card } from 'gsp-react';
import FkgzListViewModel from "./fkgzList.viewmodel";
import "./fkgzList.css";

export default class FkgzList extends Component {
    constructor(props) {
        super(props, new FkgzListViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="放款跟踪列表" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <Card
                        title={<h6>张三</h6>}
                        topRight={<div>17862923865</div>}
                        middleLeft={<div>370000199001011118</div>}
                        middleRight={<div >金额：12,000,000</div>}
                        text={<div className="dd1">放款状态1</div>}
                        bottomRight={<div>2018-03-22</div>}
                        onClick={this.viewModel.cardClick.bind(this)}
                    ></Card >
                     <Card
                        title={<h6>张三</h6>}
                        topRight={<div>17862923865</div>}
                        middleLeft={<div>370000199001011118</div>}
                        middleRight={<div >金额：12,000,000</div>}
                        text={<div className="dd1">放款状态2</div>}
                        bottomRight={<div>2018-03-22</div>}
                        onClick={this.viewModel.cardClick.bind(this)}
                    ></Card >
                     <Card
                        title={<h6>张三</h6>}
                        topRight={<div>17862923865</div>}
                        middleLeft={<div>370000199001011118</div>}
                        middleRight={<div >金额：12,000,000</div>}
                        text={<div className="dd1">放款状态3</div>}
                        bottomRight={<div>2018-03-22</div>}
                        onClick={this.viewModel.cardClick.bind(this)}
                    ></Card >
                </Content>
            </Container>
        );
    }
}