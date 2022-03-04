import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import {CgList} from 'react-icons/cg';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import PropTypes from 'prop-types';
import './home.css';

const Home = ({auth: { isAuthenticated, loading, user }}) => {
    return (
        <div className="home-flex" >
            
            <Link to='/add-patient' className="home-btn home-light">
                <div>
                <BsFillPersonPlusFill size={50}/>
                </div>Patient Registration</Link>
            <Link to='/patients/me' className="home-btn home-light">
            <div>
                <MdOutlineFeaturedPlayList size={50} /></div>Patient List
            </Link>
            {!loading && isAuthenticated && user && user.role === "Admin" && (
                <Link to='/patients' className="home-btn home-light">
                  <div><CgList size={50} /></div>All Patient List</Link>
            )}
           
        </div>
    )
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(Home);
