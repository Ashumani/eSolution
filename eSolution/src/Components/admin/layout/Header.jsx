import React, { useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Sidebar = React.lazy(() => import('./Sidebar'))
function Header() {

    useEffect(() => {
        const sidebar = document.querySelector('.sidebar_entity')
        const toggle = document.querySelector('.toggle')
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle("close")
        })
    }, [])
    return (
        <div>
            <div className='adminHeader'>
                <nav className="navbar navbar-expand-lg px-4">
                    <div className="container-fluid bg-white">
                        <button className="btn btn-primary toggle" type="button">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        {/* Toggle Button for mobile */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCenterContent" aria-controls="navbarCenterContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Collapsible Content */}
                        <div className="collapse navbar-collapse justify-content-end" id="navbarCenterContent">
                            {/* Center: Links */}
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/api">Explore API</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link" to="/faq">FAQ</Link>
                                </li>
                                <li className="nav-item">
                                    <Dropdown>
                                        <Dropdown.Toggle className="span-btn pb-0 pt-2" id="dropdown-basic" style={{ color: "rgba(0,0,0, 0.8)" }}>
                                            Admin <i className="fa fa-user"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >Profile</Dropdown.Item>
                                            <Dropdown.Item >Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
