import * as yup from 'yup';

const messageSchema = yup.object().shape({
	name: yup.string().required('Please enter your name!'),
	email: yup.string().email('Please enter a valid email!').required('Please enter your email!'),
	phone: yup
		.number()
		.typeError('Please enter a valid number!')
		.positive('Phone number cannot be negative!')
		.integer('Phone number must be an integer!')
		.max(999999999, 'Phone number must have exactly 9 digits!')
		.min(100000000, 'Phone number must have exactly 9 digits!')
		.required('Please enter your phone number!'),
	textMessage: yup.string().required('Please enter your message!'),
});

export default messageSchema;
