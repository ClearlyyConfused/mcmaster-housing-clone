import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function CheckLogin() {
	return useAuthState(auth);
}

export default CheckLogin;
