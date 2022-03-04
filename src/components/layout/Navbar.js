import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {RiMentalHealthLine} from 'react-icons/ri'
import PropTypes from 'prop-types';
import { AiOutlineHome, AiOutlineFolderAdd } from 'react-icons/ai';
import { FaRegHospital } from 'react-icons/fa';
import { GiHospital } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineEmojiPeople } from 'react-icons/md';

import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
    const authLinks = (
        <ul>
          <li>
              <Link to='/home'><AiOutlineHome/> Home</Link>
          </li>
          <li>
              <Link to='/patients/me'><MdOutlineEmojiPeople/> My Patients</Link>
          </li>
          <li>
              <Link to='/add-patient'><AiOutlineFolderAdd/> Add Patient</Link>
          </li>

        {user && user.role === "Admin" && (
          <>
                <li>
                    <Link to='/add-hospital'><FaRegHospital/> Add Hospital</Link>
                </li>             
                <li>
                    <Link to='/hospitals'><GiHospital/> Hospitals</Link>
                </li>
                <li>
                    <Link to='/users'><FaUsers/> Users</Link>
                </li>
             </>
          )}
          <li>
            <a onClick={logout} href='#!'>
              <i className='fas fa-sign-out-alt' />{' '}
              <span className='hide-sm'>Logout</span>
            </a>
          </li>
        </ul>
      );

      const guestLinks = (
        <ul>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/'><RiMentalHealthLine size={40}/> Health System</Link>
            </h1>
            {!loading && (
                <>{isAuthenticated ? authLinks : guestLinks}</>
            )}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Navbar);
