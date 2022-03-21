import './Main.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import Welcome from "../Welcome/Welcome";
// import INeedHelp from "../INeedHelp/INeedHelp";
// import ICanHelp from "../ICanHelp/ICanHelp";
import CanHelpFood from "../ICanHelp/CanHelpFood";
import NeedHelpFood from "../INeedHelp/NeedHelpFood";
import NeedForHelpMedicine from "../INeedHelp/NeedForHelpMedicine";
import NeedForHelpOther from "../INeedHelp/NeedForHelpOther";
import CanHelpMedicine from "../ICanHelp/CanHelpMedicine";
import CanHelpDriver from "../ICanHelp/CanHelpDriver";
import CanHelpOther from "../ICanHelp/CanHelpOther";
import strings from "../../services/localization";

class Main extends Component{

    render() {
        return (
            <div className={'Main'}>
                <Routes>
                    <Route exact path={'/'} element={<Welcome/>}/>
                    <Route exact path={'/i_need_help/food'} element={<NeedHelpFood/>}/>
                    <Route exact path={'/i_need_help/medicine'} element={<NeedForHelpMedicine/>}/>
                    <Route exact path={'/i_need_help/other'} element={<NeedForHelpOther/>}/>
                    <Route exact path={'/i_can_help/food'} element={<CanHelpFood/>}/>
                    <Route exact path={'/i_can_help/medicine'} element={<CanHelpMedicine/>}/>
                    <Route exact path={'/i_can_help/driver'} element={<CanHelpDriver/>}/>
                    <Route exact path={'/i_can_help/other'} element={<CanHelpOther/>}/>
                    {/*<Route exact path={'/i_need_help'} element={<INeedHelp/>}/>
                    <Route exact path={'/i_can_help'} element={<ICanHelp/>}/>*/}
                </Routes>
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);
