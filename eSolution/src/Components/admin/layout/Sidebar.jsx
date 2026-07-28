import { Accordion } from "react-bootstrap"
import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <nav className='sidebar_entity'>
            <header className='border-bottom-dash logo-header'>
                <div className="image-text">
                    <span className='image'>
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src="/assets/img/epf/logo.png" alt="Logo" className="logo-img me-2" />
                        </Link>
                    </span>
                </div>
            </header>
            <div className="mt-2">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>User Management</Accordion.Header>
                        <Accordion.Body>
                            <ul className="admin-sidebar-ul">
                                <li>
                                    <Link className="admin-sidebar-li" to={'/master/user-list'}>User List</Link>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Api Management</Accordion.Header>
                        <Accordion.Body>
                            <ul className="admin-sidebar-ul">
                                <li>
                                    <Link className="admin-sidebar-li" to={'/master/category-list'}>Category List</Link>
                                </li>
                                <li>
                                    <Link className="admin-sidebar-li" to={'/master/sub-category-list'}>Subcategory List</Link>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </nav>
    )
}

export default Sidebar
