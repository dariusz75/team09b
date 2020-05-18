import dispatcher from './dispatcher';
import ActionNames from './action-names';

const GetPage1Data = (props) => {
    dispatcher.dispatch({ type: ActionNames.page1, data: null });
}

const GetPage2Data = (props) => {
    dispatcher.dispatch({ type: ActionNames.page2, data: null });
}

const GetPage3Data = (props) => {
    dispatcher.dispatch({ type: ActionNames.page3, data: null });
}

export { GetPage1Data, GetPage2Data, GetPage3Data };