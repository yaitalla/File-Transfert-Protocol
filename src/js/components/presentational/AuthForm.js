import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const AuthForm = ({
	onSubmit,
	onChange,
	errors,
	user
}) => (
	<div className="container">
		<form action="/" onSubmit={onSubmit}>
		<ul className="flex-outer">
			<li>
				<h2 className="card-heading">AuthForm</h2>
				{errors.summary && <p classname="error-message">{errors.summary}</p>}
			</li>
			<li>
				<div>
				<input
					label="Email"
					name="email"
					onChange={onChange}
					value={user.email}/>
				</div>
			</li>
			<li>
				<div>
				<input
					label="Password"
					type="password"
					name="password"
					onChange={onChange}
					value={user.password}/>
				</div>
			</li>
			<li>
				<div>
					<button type="submit" label="Log in" primary="true"/>
				</div>
			</li>
		</ul>




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
