import React from 'react';
//import Form from './Form';
//import auth from '../../../config/database/auth';
import AuthForm from '../auth/AuthForm';

const SignUpPage = ({ history }) =>
  <div>
    <h2>Register to get access</h2>
    <SignupForm history={history}/>
    <hr/>
    <br/>
  </div>

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        email: '',
        password: ''
      },
      error: {},
    };
  }
  handleSubmit(event) {
    const {
      email,
      passOne
    } = this.state;
    const { history } = this.props;
  //  auth.testDB(this.state.email);
  console.log(this.state.email)
    event.preventDefault();
  };

  updateStateOnChange(){
    const propertyName = event.target.name;
		const userData = this.state.user;
		userData[propertyName] = event.target.value;
		this.setState({ userData });
  }
  render() {
		return (
			<AuthForm
				onSubmit={this.handleSubmit}
				onChange={this.updateStateOnChange}
				errors={this.state.error}
				user={this.state.userData}/>
		);
	}
}

export default SignUpPage;
