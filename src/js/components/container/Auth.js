import React from 'react';
import { PropTypes } from 'prop-types';
import AuthForm from '../presentational/AuthForm';

class Auth extends React.Component {
	constructor(/*props*/) {
		super(/*props*/);

		this.state = {
			errors: {},
			user : {
				email: '',
				name: '',
				password: '',
			}
		};
		this.processForm = this.processForm.bind(this);
		this.updateUser = this.updateUser.bind(this);
	}

	processForm(event) {
	//	event.preventDefault();
		/*
		console.log('name:', this.state.user.name);
		console.log('email:', this.state.user.email);
		console.log('password:', this.state.user.password);
		*/
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

export default Auth;
