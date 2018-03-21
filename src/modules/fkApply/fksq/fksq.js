import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Tab, Card } from 'gsp-react';
import Icon from "antd/lib/icon"
import FksqViewModel from "./fksq.viewmodel";

export default class Fksq extends Component {
    constructor(props) {
        super(props, new FksqViewModel());
        this.viewModel.bindDataToStorage();
        this.state = {
            selected: 0
        };
    }
    render() {
        let state = this.viewModel.getState();
        let tabDiv;
        if (state.selected === 0) {
            tabDiv =
                <Content>
                    <Card
                        title={<h6>张三</h6>}
                        topRight={
                            <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }}
                                onClick={
                                    this.viewModel.showModal.bind(this)
                                } />
                        }
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                        onClick={this.viewModel.cardClick.bind(this)}
                    ></Card >
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.cardClick.bind(this)}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }}
                                onClick={
                                    this.viewModel.showModal.bind(this)
                                } />
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    ></Card >
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.cardClick.bind(this)}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }} 
                                onClick={
                                    this.viewModel.showModal.bind(this)
                                }/>
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    ></Card >
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.cardClick.bind(this)}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }}
                                onClick={
                                    this.viewModel.showModal.bind(this)
                                } />
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    ></Card >
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.cardClick.bind(this)}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }}
                                onClick={
                                    this.viewModel.showModal.bind(this)
                                } />
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    ></Card >
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.cardClick.bind(this)}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }}
                                onClick={
                                    this.viewModel.showModal.bind(this)
                                } />
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    ></Card >
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.cardClick.bind(this)}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }} 
                                onClick={
                                    this.viewModel.showModal.bind(this)
                                }/>
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    ></Card >
                </Content >
        } else if (state.selected === 1) {
            tabDiv =
                <Content>
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.goback}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }} />
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    >
                        <div><label style={{ fontSize: 15, color: 'grey' }}>被委派人：李四</label></div>
                    </Card >
                </Content>

        } else if (state.selected === 2) {
            tabDiv =
                <Content>
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.goback}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }} />
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    >
                        <div><label style={{ fontSize: 15, color: 'grey' }}>被委派人：李四</label></div>
                    </Card >
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.goback}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }} />
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    >
                        <div><label style={{ fontSize: 15, color: 'grey' }}>被委派人：李四</label></div>
                    </Card >
                    <Card
                        title={<h6>张三</h6>}
                        onClick={this.viewModel.goback}
                        topRight={
                            <div className="text-center pt-1" onClick={this.viewModel.goback}>
                                <Icon type="ellipsis" style={{ fontSize: 18, color: 'grey', transform: 'rotate(90deg)', fontWeight: 'bold' }} />
                            </div>}
                        middleLeft={<div>17862923865</div>}
                        middleRight={<div >370000199001011118</div>}
                        text={<div>金额：12,000,000</div>}
                        bottomRight={<div>2018-3-20</div>}
                    >
                        <div><label style={{ fontSize: 15, color: 'grey' }}>被委派人：李四</label></div>
                    </Card >
                </Content>

        }

        return (
            <Container>
                <Header name="放款申请列表" onLeftArrowClick={this.viewModel.goback}></Header>
                <Tab tabs={['待处理', '待提交', '已委派']} selected={state.selected} callBack={this.viewModel.changeTab.bind(this)} />
                {tabDiv}
            </Container>
        );
    }
}