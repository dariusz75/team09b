import EventEmitter from 'events';
import ActionNames from '../actions/action-names';
import dispatcher from '../actions/dispatcher';
import { page1Data, page2Data, page3Data } from './dummyData';

class TheStore extends EventEmitter{
    notifications = {
        page1Received: "page1Received",
        page2Received: "page2Received",
        page3Received: "page3Received"
    }

    page1Data = page1Data;
    page2Data = page2Data;
    page3Data = page3Data;

    handleActions(action){
        switch(action.type){
            case(ActionNames.page1):{
                this.emit(this.notifications.testNotification);
                break;                
            }
            case(ActionNames.page2):{
                this.emit(this.notifications.page2Received);
                break;
            }
            case(ActionNames.page3):{
                this.emit(this.notifications.page3Received);
                break;
            }
            default: return;
        }
    }
}

let theStore = new TheStore();
dispatcher.register(theStore.handleActions.bind(theStore));
export default theStore;

