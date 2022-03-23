import './Welcome.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import strings from "../../services/localization";
import axios from "axios";
/*import Weather from "../Weather/Weather";*/

class Welcome extends Component{

    state = {
        data: null,
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/aa')
            .then(res => {console.log(res);})
    }


    render() {
        return (
            <div className={'Welcome'}>
                <h2>{strings.what_u_need}<br/>{strings.what_u_need2}</h2>
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
