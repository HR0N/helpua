import './NeedHelpFood.scss';
import {connect} from "react-redux";
import {Component} from "react";
import strings from "../../services/localization";

class NeedHelpFood extends Component{

    render() {
        return (
            <div className={'NeedHelpFood'}>
                <h2>{strings.i_need_help_h2_food}</h2>
                <form className={"form-group"}>
                    <label>
                        {strings.i_need_help_food_placeholder1}
                        <input className={"form-control "} type="number" />
                    </label>
                    <label>
                        {strings.i_need_help_food_placeholder2} <br/> <em>{strings.if_cant_type_address}</em>
                        <input className={"form-control "} type="text" />
                    </label>
                    <label>
                        {strings.i_need_help_food_placeholder5}
                        <input className={"form-control"} type="text" />
                    </label>
                    <label>
                        {strings.i_need_help_food_placeholder3}
                        <input className={"form-control "} type="tel" />
                    </label>
                    <label>
                        {strings.i_need_help_food_placeholder4} -
                        <input className={" checkbox"} type="checkbox" />
                    </label>
                    <label>
                        {strings.i_need_help_food_placeholder6}
                        <textarea className={"form-control"} rows={4}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(NeedHelpFood);
