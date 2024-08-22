import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

function handleSuccess() {
    return { success: true }
}

function handleError(message, error) {
    console.log(`${message}`, error);
    return { success: false, error};
}

const authService = {
    signIn: async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return handleSuccess()
        } catch (error) {
            return handleError('Erro ao fazer Login:', error);
        }
    },
    signOut: async () => {
        try {
            await signOut(auth);
            return handleSuccess();
        } catch (error) {
            return handleError('Erro ao fazer logout:', error);
        }
    },
    signUp: async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            return handleSuccess();
        } catch (error) {
            return handleError(error);
        }
    }
}

export default authService;