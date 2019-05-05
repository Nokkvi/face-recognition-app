import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class ProfileIcon extends React.Component {
  constructor(props) {
    super();

    this.state = {
      dropdownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onSignout = () => {
    fetch(`${process.env.REACT_APP_API_URL}/signout`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      }
    })
    .then(response => {
      window.sessionStorage.removeItem('token')
      this.props.onRouteChange('signout')
    }).catch(e => console.log(e))
  }

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
                  src="http://tachyons.io/img/logo.jpg"
                  className="br-100 ba h3 w3 dib" alt="avatar" />
          </DropdownToggle>
          <DropdownMenu
            right
            className="b--transparent shadow-5"
            style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
            <DropdownItem onClick={() => this.props.toggleModal()}>View Profile</DropdownItem>
            <DropdownItem onClick={() => this.onSignout()}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;