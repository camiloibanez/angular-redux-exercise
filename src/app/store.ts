import { tassign } from "tassign";
import { Reducer, combineReducers } from 'redux';
import { ITaskingState, taskingReducer, TASKING_INITIAL_STATE } from "./tasking/tasking-store";
import { IMessagingState, messagingReducer, MESSAGING_INITIAL_STATE } from "./messaging/messaging-store";

export interface IAppState {
    tasking: ITaskingState;
    messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
    tasking: TASKING_INITIAL_STATE,
    messaging: MESSAGING_INITIAL_STATE
}
  
export const rootReducer: Reducer<IAppState> = combineReducers({
    tasking: taskingReducer,
    messaging: messagingReducer
});