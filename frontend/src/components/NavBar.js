import React from "react";

function NavBar(){

    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.google.com/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/addProduct"> Add Product </a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/updateProduct"> Update Product </a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/"> View All Products </a>
                        </li>

                        {/* <li className="nav-item">
                        <a className="nav-link" href="/"> All Product </a>
                        </li> */}
                    </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;