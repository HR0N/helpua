import './Welcome.scss';
import {connect} from "react-redux";
import {Component} from "react";
/*import Weather from "../Weather/Weather";*/

class Welcome extends Component{

    state = {
        data: null,
    };

    componentDidMount() {

    }


    render() {
        return (
            <div className={'Welcome'}>
                {/*<Weather/>*/}
            </div>
        );
    }
}




function mapStateToProps() {
    return {
    };
}
function mapDispatchToProps() {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
