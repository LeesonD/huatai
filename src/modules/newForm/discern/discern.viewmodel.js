import { ViewModel } from 'gsp-react-framework';

export default class DiscernViewModel extends ViewModel{
    goBack(){
        this.props.history.goBack();
    }
    onTextChange(e) {
        let info = this.state.info;
        info[0][e.target.name] = e.target.value;
        this.setState({
            info: info
        });
    }
    next(){
        console.log("next");
    }
}