import React from 'react';
import './loanApply.css';
import { Container, Content, Header, Button } from 'gsp-react';

export default class loanApply extends React.Component {
    render() {
        return (
            <div className="loanCalc detail-page transition-item">
                {/* <h3 align="center">贷款申请</h3>
                <div>
                    <div className="l">
                        <Comp src={require("../images/shisuan.png")} alt="试算" text="贷款试算" />
                    </div>
                    <div className="r">
                        <Comp src={require("../images/shenqing.png")} alt="申请" text="贷款申请" />
                    </div>
                </div> */}
                <Container>
                    <Header name="贷款申请" onLeftArrowClick={this.goBack.bind(this)} />
                    <Content>
                        <Button bstyle={"primary"} size="lg" text={"贷款试算"} col={6} onClick={this.buttonClick.bind(this)} />
                        <Button bstyle={"primary"} size="lg" text={"贷款申请"} col={6} onClick={this.buttonClick.bind(this)} />
                    </Content>
                </Container>
            </div>
        );
    }

    buttonClick(){
        this.props.history.push({
            pathname:"/loanCalc",
            state:{}
        });
    }
    goBack() {
        this.props.history.push({
            pathname:"/",
            state:{}
        });
    }
}


// function Comp(props) {
//     return (
//         <Link to="/loanApply/loanCalc">
//             <img src={props.src} alt={props.alt} width="60" height="60" />
//             <div>{props.text}</div>
//         </Link>
//     );
// }