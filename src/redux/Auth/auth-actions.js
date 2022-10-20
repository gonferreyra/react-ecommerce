import { types } from './auth-types'
import { getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { provider } from '../../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Gon'))
        }, 3500);
    }
}

const auth = getAuth();

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            // Destructuring user from result
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
};

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        }
    }
};