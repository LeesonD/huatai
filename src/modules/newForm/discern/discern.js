import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Footer,Input } from 'gsp-react';
import DiscernViewModel from "./discern.viewmodel";

export default class Discern extends Component {
    constructor(props){
        super(props,new DiscernViewModel());
        this.viewModel.bindDataToStorage();
        this.state={
            info: [{
                "id": "736621198302031116", 
                "name": "霍金", 
                "sex": "男", 
                "nation": "汉", 
                "brith": "1983年02月03日", 
                "add": "济南*****",
                "a":"济南公安机关",
                "w":"2016.1.1-2026.1.1"
                }]
        }
    }
    render() {
        return (
            <Container>
                <Header name="身份证信息" onLeftArrowClick={this.viewModel.goBack}>
                </Header>
                <Content>
                    <Input label={"身份证号码"} name={"id"} text={this.state.info[0]["id"]} placeHolder={"请输入"} onChange={()=>this.viewModel.onTextChange} align={"left"} />
                    <Input label={"姓名"} name={"name"} text={this.state.info[0]["name"]} align={"left"}/>
                    <Input label={"性别"} name={"sex"} text={this.state.info[0]["sex"]} align={"left"}/>
                    <Input label={"民族"} name={"nation"} text={this.state.info[0]["nation"]} align={"left"}/>
                    <Input label={"生日"} name={"brith"} text={this.state.info[0]["brith"]} align={"left"}/>
                    <Input label={"住址"} name={"add"} text={this.state.info[0]["add"]} align={"left"}/>
                    <Input label={"签发机关"} name={"a"} text={this.state.info[0]["a"]} align={"left"}/>
                    <Input label={"有效期限"} name={"w"} text={this.state.info[0]["w"]} align={"left"}/>
                </Content>
                <Footer buttonName={["下一步"]} size="sm" callBackFooterButtonClick={[this.viewModel.next]}>
                </Footer>
            </Container>
        );
    }
}