import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large" style={{color:'#e65100'}}>Health System</h1>
                    <p className="lead">
                        <span style={{fontWeight:'bolder'}}>The</span> solution for Hospital <span style={{fontWeight:'bolder'}}>management.</span>
                    </p>
                    <div className="buttons">
                        <Link to='/register' className="btn btn-primary" style={{borderRadius:'20px'}}>Sign Up</Link>
                        <Link to='/login' className="btn btn-light" style={{borderRadius:'20px'}}>Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing
