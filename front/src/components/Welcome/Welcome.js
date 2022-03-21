import './Welcome.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import strings from "../../services/localization";
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
