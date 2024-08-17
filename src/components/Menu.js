import { Link } from 'react-router-dom';
import "./CSS/Menu.css";
function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Home">Pizza Store</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="d-flex gap-2 justify-content-center ">
                            <li className="nav-item">
                                <Link className="btn btn-success" aria-current="page" to="/Home" exact activeClassName="active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-success" to="/displayallitems">Display All Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-success" to="/addnewitem">Add New Item</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-success" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-success" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex ms-auto">
                        <ul className="d-flex gap-2 justify-content-center ">
                            <li className="nav-item">
                                 <Link className="btn btn-success" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-success" to="/Signup">Signup</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;
