import './CanHelpFood.scss';
import {connect} from "react-redux";
import {Component} from "react";

class CanHelpFood extends Component{

    render() {
        return (
            <div className={'CanHelpFood'}>

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
