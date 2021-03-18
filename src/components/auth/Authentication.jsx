import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

export default function Authentication() {
    const [displayed, setDisplayed] = useState('login')

    const displayedDiv = (displayed === 'login')? <Login /> : <Registration />;
    
    return (  
        <div className="full-page">
            <div className="center-everything"> 
                <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <span className={`nav-link ${(displayed === 'login')? 'active' : ''}`} onClick={e => setDisplayed('login')}>Login</span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link ${(displayed !== 'login')? 'active' : ''}`} onClick={e => setDisplayed('registration')}>Register</span>
                            </li>
                        </ul>
                        <div style={{marginTop:'20px'}}>
                            { displayedDiv }
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>      
    )
}
