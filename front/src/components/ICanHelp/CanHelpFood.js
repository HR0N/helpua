import './CanHelpFood.scss';
import {connect} from "react-redux";
import {Component} from "react";
import strings from "../../services/localization";

class CanHelpFood extends Component{

    render() {
        return (
            <div className={'CanHelpFood'}>
                <h2>{strings.i_can_help_h2_food}</h2>
                <form className={"form-group"}>
                    <label>
                        {strings.i_need_help_food_placeholder5}
                        <input className={"form-control"} type="text" />
                    </label>
                    <label>
                        {strings.i_need_help_food_placeholder3}
                        <input className={"form-control "} type="tel" />
                    </label>
                    <label>
                        {strings.i_can_help_food_placeholder1}
                        <textarea className={"form-control"} rows={4}/>
                    </label>
                    <label>
                        {strings.i_can_help_food_placeholder2}
                        <input className={"form-control "} type="text" />
                    </label>
                    <label>
                        {strings.i_can_help_food_placeholder3}<br/>
                        {strings.main_yes}<input className={" checkbox"} type="checkbox" /><br/>
                    </label>
                    <div className="buttons">
                        <div className="btn btn-outline-warning">{strings.i_need_help_submit}</div>
                    </div>
                </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(CanHelpFood);
