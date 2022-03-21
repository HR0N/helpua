import './NeedForHelpMedicine.scss';
import {connect} from "react-redux";
import {Component} from "react";
import strings from "../../services/localization";

class NeedForHelpMedicine extends Component{

    render() {
        return (
            <div className={'NeedForHelpMedicine'}>
                <h2>{strings.i_need_help_h2_medicine}</h2>
                <form className={"form-group"}>
                    <label>
                        {strings.i_need_help_food_placeholder1}
                        <input className={"form-control "} type="number" />
                    </label>
                    <label>
                        {strings.i_need_help_food_placeholder2}
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
                        {strings.i_need_help_medicine_placeholder1}<br/>
                        {strings.main_yes}<input className={" checkbox"} name={"recipe"} type="radio" /><br/>
                        {strings.main_no}<input className={" checkbox"} name={"recipe"} type="radio" />
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
export default connect(mapStateToProps, mapDispatchToProps)(NeedForHelpMedicine);
