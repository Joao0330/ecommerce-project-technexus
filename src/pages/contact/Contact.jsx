// import context
import { useStates } from '../../context/useStates';

// import hooks
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// import validation schema
import messageSchema from '../../components/contact/ValidationSchema';

// import components
import FormDataDisplay from '../../components/contact/FormDataDisplay';

// import icons
import { FaCheck, FaPhoneAlt, FaRegEnvelope, FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
	const { formData, setFormData, showFormToast, setShowFormToast } = useStates();

	// Form validation
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(messageSchema),
	});

	const submitForm = data => {
		setFormData(data);
		setShowFormToast(true);
		reset();
	};

	// Control the toast visibility
	const handleCloseToast = () => {
		setShowFormToast(false);
	};

	return (
		<section className='form'>
			<div className='container'>
				<div className='form__wrapper'>
					<div className='form__title'>
						<h2>Contact Us</h2>
						<p>Stay connected with us and leave your message bellow!</p>
					</div>

					<div className='form__content'>
						<div className='form__info'>
							<div className='form__info-contacts'>
								<div className='form__info-contacts-card'>
									<div>
										<FaLocationDot />
										<strong>Address</strong>
										<p>1234 Random Street, Random City</p>
									</div>
								</div>
								<div className='form__info-contacts-card'>
									<div>
										<FaPhoneAlt />
										<strong>Call Us</strong>
										<p>+1 234 567 890</p>
									</div>
								</div>
								<div className='form__info-contacts-card'>
									<div>
										<FaRegEnvelope />
										<strong>Email Us</strong>
										<p>contact@example.com</p>
									</div>
								</div>
								<div className='form__info-contacts-card'>
									<div>
										<FaRegClock />
										<strong>Open Hours</strong>
										<p>Monday - Friday</p>
										<p>9:00 AM - 6:30 PM</p>
									</div>
								</div>
							</div>
						</div>

						<form onSubmit={handleSubmit(submitForm)}>
							<label htmlFor='name'>Name:</label>
							<input id='name' type='text' name='name' placeholder='Enter Your Name...' {...register('name')} />
							<p>{errors && errors.name && errors.name.message}</p>

							<div className='form__content-group'>
								<div>
									<label htmlFor='email'>Email:</label>
									<input id='email' type='email' name='email' placeholder='Enter Your Email..' {...register('email')} />
									<p>{errors && errors.email && errors.email.message}</p>
								</div>

								<div>
									<label htmlFor='phone'>Phone Number:</label>
									<input id='phone' type='number' name='phone' placeholder='Enter Your Phone Number...' {...register('phone')} onWheel={e => e.target.blur()} />
									<p>{errors && errors.phone && errors.phone.message}</p>
								</div>
							</div>

							<label htmlFor='message'>Send Your Message:</label>
							<textarea id='message' name='message' placeholder='Enter Your Message...' {...register('textMessage')}></textarea>
							<p>{errors && errors.textMessage && errors.textMessage.message}</p>

							<button type='submit' className='btn-type2'>
								Send Message
							</button>
						</form>

						{formData && (
							<div className={`form__submittedData ${showFormToast ? 'show' : 'hide'}`}>
								<div>
									<span>
										<FaCheck className='form__submittedData-icon' />
									</span>

									<button onClick={handleCloseToast}>X</button>
								</div>

								<h2>Your message has been sent!</h2>
								<p>Thank you for contacting us!</p>

								<FormDataDisplay formData={formData} />
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
