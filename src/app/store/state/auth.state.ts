import { RequestToken } from './../actions/auth.actions';
import { RequestTokenInterface } from "./../../models/request-token.interface";
import { State, Action, StateContext } from "@ngxs/store";

export interface AuthStateModel {
  auth: RequestTokenInterface;
  loading: boolean;
}

@State<AuthStateModel>({
  name: "auth",
  defaults: {
    auth: {
      expires_at: '',
      request_token: '',
      success: false,
    },
    loading: true
  }
})
export class AuthState {

    @Action(RequestToken)
    requestToken({ getState, setState }: StateContext<AuthStateModel>, action: any) {
        const state = getState();
        let token: RequestTokenInterface = action.payload;
        debugger
        setState({
            ...state,
            auth: token,
            loading: false
        })

    }

}
