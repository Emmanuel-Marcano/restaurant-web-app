

function About(){


    return (
     <section className="about-section">

        <div className="container">

        <div className="about-grid">
  
            <div className="about-text">
                <p className="about-title">Little Lemon</p>
                <p className="about-location">Chicago</p>
                <p className="about-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, aperiam voluptatibus eligendi unde nulla facilis accusamus, debitis sint minus eos excepturi labore magni provident corporis iste, aspernatur sequi doloribus ullam et eaque blanditiis! Molestias at enim et. Beatae repellat consectetur sequi dolore eum autem quidem fuga vero? Quo ratione temporibus odit neque sunt reiciendis, repellendus necessitatibus, quaerat obcaecati, sapiente quisquam saepe! Sint cupiditate architecto animi, est hic obcaecati reprehenderit pariatur alias quae. Quasi, dicta facilis quidem sint, voluptatum tenetur est accusantium veniam consectetur vitae ratione beatae consequuntur aperiam quae, earum temporibus facere. Voluptates adipisci exercitationem animi in! Laborum, consectetur dicta..</p>
            </div>

            <div className="about-images">
                        <div class="image-stack">
                <div class="image-stack__item image-stack__item--top">
                <img className="about-img" src={require("../assets/images/chef-1.jpg")} alt=""/>
                </div>
                <div class="image-stack__item image-stack__item--bottom">
                <img className="about-img" src={require("../assets/images/chef-2.jpg")} alt=""/>
                </div>
                 </div>

            </div>

            </div>
            </div>

            

     
    </section>
    )
}

export default About