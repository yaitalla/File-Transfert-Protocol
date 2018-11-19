import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import css from './Form.js';

const AuthForm = ({
	onSubmit,
	onChange,
	errors,
	user
}) => (
		<div style={css.signupSection}>
			<div style={css.info}>
	    <h2>Welcome to Whis</h2>
	    <i style={css.icon}  aria-hidden="true"></i>
	    <p>Digital consulting</p>
	  </div>
			<form style={css.signupForm} onSubmit={onSubmit}>
			<ul style={css.noBullet}>
				<li>
					<h4 >Authentication</h4>
				</li>
				<li>
					<div>
					<input
						style={css.inpuFields}
						label="Email"
						name="email"
						onChange={onChange}
						value={user.email}/>
					</div>
				</li>
				<li>
					<div>
					<input
						style={css.inpuFields}
						label="Password"
						type="password"
						name="password"
						onChange={onChange}
						value={user.password}/>
					</div>
				</li>
			</ul>
			<button style={css.joinbtn} type="submit"  primary="true">
				Submit
			</button>
			</form>
	</div>

);

AuthForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default AuthForm;
