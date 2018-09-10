import { RequestToken } from './../actions/auth.actions';
import { RequestTokenInterface } from "./../../models/request-token.interface";
import { State, Action, StateContext, Selector } from "@ngxs/store";

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

    @Selector()
    public static loading(state: AuthStateModel) {
        return state.loading;
    }

    @Selector()
    public static auth(state: AuthStateModel) {
        return state.auth;
    }

    @Action(RequestToken)
    requestToken({ getState, setState }: StateContext<AuthStateModel>, action: any) {
        const state = getState();
        let token: RequestTokenInterface = action.payload;
        setState({
            ...state,
            auth: token,
            loading: false
        })

    }

}
