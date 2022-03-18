import './INeedHelp.scss';
import {connect} from "react-redux";
import {Component} from "react";

class INeedHelp extends Component{

    render() {
        return (
            <div className={'INeedHelp'}>
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
export default connect(mapStateToProps, mapDispatchToProps)(INeedHelp);
