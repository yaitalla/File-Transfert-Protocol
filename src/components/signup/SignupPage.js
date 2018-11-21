import React from 'react';
//import Form from './Form';
//import auth from '../../../config/database/auth';
import Form from './Form';

const SignUpPage = ({ history }) =>
  <div>
    <SignupForm history={history}/>
  </div>

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: {},
    };
    this.updateStateOnChange = this.updateStateOnChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

  updateStateOnChange(event){
    const propertyName = event.target.name;
		const user = this.state.user;
		user[propertyName] = event.target.value;
		this.setState({ user });
  }
  render() {
		return (
			<Form
				onSubmit={this.handleSubmit}
				onChange={this.updateStateOnChange}
				errors={this.state.error}
				user={this.state.user}/>
		);
	}
}

export default SignUpPage;
