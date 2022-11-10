import { types } from './auth-types'
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { auth, provider } from '../../firebase/firebase-config';
import { uiFinishLoading, uiSetError, uiStartLoading } from '../UiReducer/ui-actions';
import Swal from 'sweetalert2';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await dispatch(
                    login(user.uid, user.displayName)
                );
                Swal.fire({
                    title: 'Login successfull',
                    icon: 'success',
                    timer: 2000,
                })
                dispatch(uiFinishLoading());

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
                Swal.fire({
                    title: 'Register successfull.',
                    // text: 'You are now logged in.',
                    icon: 'success',
                    timer: 2000
                })
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
            .then(async ({ user }) => {
                // console.log(user)
                await dispatch(
                    loginGoogle(user.uid, user.displayName, user.photoURL)
                )
                Swal.fire({
                    title: 'Login successfull',
                    icon: 'success',
                    timer: 2000
                })
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