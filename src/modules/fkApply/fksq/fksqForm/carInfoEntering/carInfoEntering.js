import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button, Listview, Footer } from 'gsp-react';
import CarInfoEnteringViewModel from "./carInfoEntering.viewmodel";

export default class CarInfoEntering extends Component {
    constructor(props) {
        super(props, new CarInfoEnteringViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="车辆信息录入" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <Listview text={"车辆价格"}>
                        <input type="text" value={""} placeholder={"请输入车辆价格"}
                            onClick={this.viewModel.onClick.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"发动机号"}>
                        <input type="text" value={""} placeholder={"请输入发动机号"}
                            onClick={this.viewModel.onClick.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"车架号"}>
                        <input type="text" value={""} placeholder={"请输入车架号"}
                            onClick={this.viewModel.onClick.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"颜色"}>
                        <input type="text" value={""} placeholder={"请输入颜色"}
                            onClick={this.viewModel.onClick.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                </Content>
                <Footer size="lg"
                    style={[{ 'color': 'white', 'backgroundColor': '#318ccf' }]}
                    buttonName={["下一步"]}
                    callBackFooterButtonClick={[
                        this.viewModel.next]}>
                </Footer>
            </Container>
        );
    }
}