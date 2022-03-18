import './ICanHelp.scss';
import {connect} from "react-redux";
import {Component} from "react";

class ICanHelp extends Component{

    render() {
        return (
            <div className={'ICanHelp'}>
                i can help
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
export default connect(mapStateToProps, mapDispatchToProps)(ICanHelp);
