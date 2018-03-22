import { ViewModel } from 'gsp-react-framework';

export default class CarInfoEnteringViewModel extends ViewModel {
    goback() {
        this.props.history.push({
            pathname: "/fapiaoChoose"
        })
    }
    onClick(event) {
        console.log('onClick');
        //相应组件更新，添加data后启用
        // let target = event.target;
        // this.data[0][target.name] = target.value;
    }
    next() {
        this.props.history.push({
            pathname: "/mianqianVideo"
        })
    }
}