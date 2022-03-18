import './App.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import strings from "../../services/localization";


class App extends Component{
    state = {};

    render() {

        strings.setLanguage('ua');
        return (
            <div className={'App'}>
                <Header/>
                <Main/>
                <Footer/>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
