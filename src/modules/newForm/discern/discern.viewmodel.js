import { ViewModel } from 'gsp-react-framework';

export default class DiscernViewModel extends ViewModel{
    goBack(){
        console.log("ggg");
        this.props.history.push({
            pathname:"/idcardPhoto"
        });
        
    }
    onTextChange(e) {
        let info = this.state.info;
        info[0][e.target.name] = e.target.value;
        this.setState({
            info: info
        });
    }
    next(){
        this.props.history.push({
            pathname:"/facePhoto"
        })
    }
}