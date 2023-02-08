
import {Link} from "react-router-dom"

function Showcase(){


    return (
        <div className="showcase-container">
            <div className='showcase-image'>    
                <img className='landing-img' src={require("../assets/images/landing-img.jpg")} alt="" />
            </div>
            <div className='showcase-text'>
                <div className='showcase-brandname'>
                <img className='brand-img' src={require("../assets/images/footer-logo.png")} alt="" />
                <p >LITTLE LEMON</p>
                </div>
                <p className='showcase-location'>Chicago</p>
                <p className='showcase-description'>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Libero ab maiores porro tenetur! Modi, ea eum. 
                Deleniti, sapiente laudantium mollitia quibusdam, obcaecati velit, 
                culpa dolor vitae quisquam quod tempore quam.
                Deleniti, sapiente laudantium.
                </p>
                <Link to="/booking-form" className='showcase-btn'>Reserve a Table</Link>
            </div>
        </div>
    )
}

export default Showcase