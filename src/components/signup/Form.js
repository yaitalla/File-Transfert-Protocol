import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { container, nobullet, info, inputFields, btnStyle, signupForm } from './style';

const Form = ({
	onSubmit,
	onChange,
	errors,
	user
}) => (
		<div style={container}>

      <div style={info}>
	     <h2>Whis</h2>
	     <i   aria-hidden="true"></i>
	     <p>Digital consulting</p>
	    </div>

      <form style={signupForm} onSubmit={onSubmit}>
			   <ul style={nobullet}>
				    <li>
					    <h4 >Authentication</h4>
				     </li>
				     <li>
					<div>
  					<input
  						style={inputFields}
  						label="Email"
  						name="email"
  						onChange={onChange}
  						value={user.email}/>
  					</div>
				   </li>
    				<li>
    					<div>
      					<input
      						style={inputFields}
      						label="Password"
      						type="password"
      						name="password"
      						onChange={onChange}
      						value={user.password}/>
    					</div>
    				</li>
            <li>
              <button style={btnStyle} type="submit" >
               Submit
             </button>
            </li>
			     </ul>


			   </form>
	      </div>

);

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default Form;
