import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button, Listview ,Footer} from 'gsp-react';
import FapiaoInfoViewModel from "./fapiaoInfo.viewmodel";

export default class HomePahe extends Component {
    constructor(props) {
        super(props, new FapiaoInfoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="发票信息" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <Listview text={"开票人"}>
                        <input type="text" value={"123456789"} placeholder={"请输入开票人"}
                            onChange={this.viewModel.onChange.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"开票人证件号"}>
                        <input type="text" value={"123456789"} placeholder={"请输入开票人证件号"}
                            onChange={this.viewModel.onChange.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"车辆价格"}>
                        <input type="text" value={"600,000"} placeholder={"请输入车辆价格"}
                            onChange={this.viewModel.onChange.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"开票时间"}>
                        <input type="text" value={""} placeholder={"请输入开票时间"}
                            onChange={this.viewModel.onChange.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"开票号码"}>
                        <input type="text" value={""} placeholder={"请输入开票号码"}
                            onChange={this.viewModel.onChange.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"开票单位"}>
                        <input type="text" value={""} placeholder={"请输入开票单位"}
                            onChange={this.viewModel.onChange.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"发动机号"}>
                        <input type="text" value={""} placeholder={"请输入发动机号"}
                            onChange={this.viewModel.onChange.bind(this)} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"车架号"}>
                        <input type="text" value={""} placeholder={"请输入车架号"}
                            onChange={this.viewModel.onChange.bind(this)} style={{ width: '100%' }} />
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