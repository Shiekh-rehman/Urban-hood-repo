import React from 'react'

function Header() {
    return (
        <>


            <div className="top-strip">
                <div className="inner-strip ">
                    <p><i className="bi bi-megaphone"></i> Free Shipping Over Rs 2,999!| Delivery Time: 5 to 7 days <a href="">Buy Now</a></p>
                </div>
            </div>
            {/* top-strip */}

            <div className="navbar-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">URBAN HOODS.</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Contact</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Header
