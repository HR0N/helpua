import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './mediaqueries.scss'
import './variables.scss'
import './fonts.scss'
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/rootReducer';
import './services/localization';
import Loader from "./ui/Loader/Loader";
import 'h-bootstrap/h-boobstrap.css';


const store = createStore(rootReducer, applyMiddleware(thunk));
document.title = 'HELP UA';
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<Loader/>}> {/*for i18next (localization)*/}
                <App/>
            </Suspense>
        </BrowserRouter>
    </Provider>
);
export {store};


ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
