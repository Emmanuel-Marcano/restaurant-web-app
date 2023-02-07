

function Specials(){


    return (
        <section className="specials-section">
            <div className="container">
            <div className="specials-header">
                <p>SPECIALS</p>
                <button className="specials-btn" >Order Online</button>
            </div>

            <div className="specials-grid-container">
                <div>
                    <img className="dishes" src={require("../assets/images/dish-1.jpg")} alt="" />
                    <div className="dishes-text">
                    <div className="dish-and-price">
                        <p>Starter</p>
                        <span>50$</span>
                    </div>
               
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempora nihil in amet. 
                        Veritatis qui dignissimos beatae tempore</p>
                    <button className="dishes-btn" >Order delivery</button>
                    </div>
                </div>
                <div>
                    <img className="dishes" src={require("../assets/images/dish-2.jpg")} alt="" />
                    <div className="dishes-text">
                    <div className="dish-and-price">
                        <p>Main</p>
                        <span>60$</span>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempora nihil in amet. 
                        Veritatis qui dignissimos beatae tempore</p>
                    <button className="dishes-btn" >Order delivery</button>
                    </div>
                </div>
                <div>
                    <img className="dishes" src={require("../assets/images/dish-3.jpg")} alt="" />
                    <div className="dishes-text">
                    <div className="dish-and-price" >
                        <p>Dessert</p>
                        <span>20$</span>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempora nihil in amet. 
                        Veritatis qui dignissimos beatae tempore.</p>
                    <button className="dishes-btn">Order delivery</button>
                    </div>
                </div>
            </div>
            </div>
        </section>

    )
}

export default Specials