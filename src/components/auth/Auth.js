import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';


const Auth = ({ history }) =>
<div>
	<AuthPage history={history} />
</div>


class AuthPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			user : {
				email: '',
				password: '',
			}
		};
	}

	processForm(event) {
		event.preventDefault();
		console.log('email:', this.state.user.email);
		console.log('password:', this.state.user.password);
	}

	updateUser(event) {
		const field = event.target.name;
		const user = this.state.user;
		user[field] = event.target.value;
		this.setState({ user });
	}

	render() {
		return (
			<AuthForm
				onSubmit={this.processForm}
				onChange={this.updateUser}
				errors={this.state.errors}
				user={this.state.user}/>
		);
	}
}

export default withRouter(Auth);
