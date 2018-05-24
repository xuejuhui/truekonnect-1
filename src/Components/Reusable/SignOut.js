import React from 'react';
import { connect } from "react-redux"
import { logout } from "../../Redux/actions/auth"

class SignOut extends React.Component {

	logout(e){
		e.preventDefault();
		this.props.logout();
	}
	render() {
		return (
			<div>
				  <button
    type="button"
    onClick={this.logout.bind(this)}
  >
    Sign Out
  </button>
			</div>
		);
	}
}



export default connect(null, { logout })(SignOut);