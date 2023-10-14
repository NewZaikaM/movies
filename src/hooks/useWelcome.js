import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSignIn from './useSignIn';
import useSignUp from './useSignUp';

export const NAME_FORM = {
	SIGN_IN: 'sign-in',
	SIGN_UP: 'sign-up',
};

const useWelcome = (nameForm) => {
	const { users } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [valuesForm, setValuesForm, handleLogicForm] =
		nameForm === NAME_FORM.SIGN_IN ? useSignIn() : useSignUp();

	const changeField = (event) => {
		const nameField = event.target.name;
		const valueField = event.target.value;
		setValuesForm({
			...valuesForm,
			[nameField]: valueField,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const { valid, session_id } = handleLogicForm(users, dispatch);

		if (valid && nameForm === NAME_FORM.SIGN_IN) {
			navigate(`/user/${session_id}/home`);
		}
		if (valid && nameForm === NAME_FORM.SIGN_UP) {
			navigate('/sign-up/step-3');
		}
	};

	return [valuesForm, changeField, handleSubmit];
};

export default useWelcome;
