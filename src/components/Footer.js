


function Footer(){


    return (
        <footer className="footer-section" >
            <div className="container">

                <div className="footer-grid">

            <div >
                <img className='brand-img' src={require("../assets/images/footer-logo.png")} alt="" />
                <p></p>

            </div>

            <div>
                <p>Nav</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Log in</li>
                </ul>
            </div>
            <div>
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <p>Social Media Links</p>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Whatsapp</li>
                </ul>
            </div>

            </div>
            </div>


        </footer>
    )
}

export default Footer