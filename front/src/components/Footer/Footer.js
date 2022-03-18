import './Footer.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import strings from "../../services/localization";

class Footer extends Component{

    render() {
        return (
            <div className={'Footer'}>
                <nav>
                    <ul>
                        <li><NavLink to={"/1"}>{strings.about}</NavLink></li>
                        <li><NavLink to={"/2"}>{strings.contacts}</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
        refresh: state.app.refresh_all,
    };
}
function mapDispatchToProps() {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
