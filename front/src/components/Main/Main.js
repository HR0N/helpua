import './Main.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import Welcome from "../Welcome/Welcome";
import INeedHelp from "../INeedHelp/INeedHelp";
import ICanHelp from "../ICanHelp/ICanHelp";

class Main extends Component{

    render() {
        return (
            <div className={'Main'}>
                <Routes>
                    <Route exact path={'/'} element={<Welcome/>}/>
                    <Route exact path={'/i_need_help'} element={<INeedHelp/>}/>
                    <Route exact path={'/i_can_help'} element={<ICanHelp/>}/>
                </Routes>
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);
