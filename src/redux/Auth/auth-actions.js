import { types } from './auth-types'
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { auth, provider } from '../../firebase/firebase-config';
import { uiFinishLoading, uiStartLoading } from '../UiReducer/ui-actions';
import Swal from 'sweetalert2';

// const auth = getAuth();

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                );
                dispatch(uiFinishLoading());
                Swal.fire("Login success", "You will be redirect to home page in just a second", "success")
                setTimeout(() => {
                    window.location.href = "/"
                }, 3000)
            })
            .catch(error => {
                console.log(error)
                dispatch(uiFinishLoading())
                Swal.fire("Error", error.message, "error")
            })
    }
}

export const registerWithEmailPassword = (name, email, password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                // Establish userName with updateProfile from firebase
                await updateProfile(user, { displayName: name });
                dispatch(
                    login(user.uid, user.displayName)
                )
                Swal.fire("Register success", "You are now logged in and will be redirect to home page in just a second", "success")
                setTimeout(() => {
                    window.location.href = "/"
                }, 3000)
            })
            .catch(error => {
                console.log(error);
                Swal.fire("Error", error.message, "error")
            })
    }
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            // Destructuring user from result
            .then(({ user }) => {
                // console.log(user)
                dispatch(
                    loginGoogle(user.uid, user.displayName, user.photoURL)
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

export const loginGoogle = (uid, displayName, photoURL) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            photoURL,
        }
    }
};

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth)
            .then(() => {
                dispatch(logout())
            })
            .catch(error => console.log(error))
    }
};

export const logout = () => ({
    type: types.logout,
})