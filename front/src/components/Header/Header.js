import './Header.scss';
import {connect} from "react-redux";
import {Component} from "react";
import {NavLink} from "react-router-dom";
import strings from "../../services/localization";
import {refresh_all} from "../../redux/actions/App";

class Header extends Component{

    state = {
        locale: strings.getLanguage(), // default language ("ua") was set in App.js
    };

    toggle_language(cur_lan){
        let change_language = cur_lan === 'ua' ? 'ru' : 'ua';
        strings.setLanguage(change_language);
        this.setState({locale: strings.getLanguage()});
        this.props.refresh_all(!this.props.refresh_item);
    }


    render() {
        return (
            <div className={`Header`}
            >
                <div className={`caption`}>
                    HELP UA
                    <span className={'language'}
                    onClick={() => {this.toggle_language(strings.getLanguage())}}
                    >{this.state.locale}</span>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to={"/"} >{strings.main}</NavLink></li>
                        <li><NavLink to={"/i_need_help"} >{strings.i_need_help}</NavLink>
                            <ul className={"dropdown_menu"}>
                                <li><NavLink to={"/i_need_help/food"} >{strings.i_need_help_food}</NavLink></li>
                                <li><NavLink to={"/i_need_help/medicine"} >{strings.i_need_help_medicine}</NavLink></li>
                                <li><NavLink to={"/i_need_help/other"} >{strings.i_need_help_other}</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to={"/i_can_help"} >{strings.i_can_help}</NavLink>
                            <ul className={"dropdown_menu"}>
                                <li><NavLink to={"/i_can_help/food"} >{strings.i_can_help_food}</NavLink></li>
                                <li><NavLink to={"/i_can_help/medicine"} >{strings.i_can_help_medicine}</NavLink></li>
                                <li><NavLink to={"/i_can_help/driver"} >{strings.i_can_help_driver}</NavLink></li>
                                <li><NavLink to={"/i_can_help/other"} >{strings.i_can_help_other}</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
        refresh_item: state.app.refresh_all,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        refresh_all: (payload) => {dispatch(refresh_all(payload))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
