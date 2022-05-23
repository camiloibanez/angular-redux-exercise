import { tassign } from "tassign";
import { Reducer } from 'redux';
import { INCREMENT, DECREMENT} from "./messaging-actions";

export interface IMessagingState {
    newMessages: number;
}

export const MESSAGING_INITIAL_STATE: IMessagingState = {
    newMessages: 0
}

function increment(state: any, action: any) {
    return tassign(state, { newMessages: state.newMessages + 1 });
}
  
  function decrement(state: any, action: any) {
    let newMessages = state.newMessages > 0 ? state.newMessages - 1 : 0;
    return tassign(state, { newMessages: newMessages });
}
  
export const messagingReducer: Reducer<IMessagingState> = (state: any = MESSAGING_INITIAL_STATE, action: any): IMessagingState => {
    switch(action.type) {
        case INCREMENT: return increment(state, action);
        case DECREMENT: return decrement(state, action);
    }
    
    return state;
}