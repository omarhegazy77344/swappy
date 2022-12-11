function Hero(){

    let heroStyle = {
        "padding":"12% 0",
        "width":"97%",
        "background": "linear-gradient(90deg,rgba(0,0,0,1),rgba(126, 217, 87, 0)), url(/images/img3.png)",
        "background-size":"cover",
        "background-repeat": "no-repeat", 
        "background-position": "right",
        "border-radius": "12px",
    }

    let contentStyle = {
        "border-left":"4px solid #00ADB5",
        "padding-left":"3%"
    }

    let btnStyle = {
        "width":"15%"
    }

    return(
        <section className="slideshow mx-auto my-3" style={heroStyle}>
            <div class="col-10 mx-auto">
                <div class="margin-bottom-2" style={contentStyle}>
                    <h2 class="text-light"><strong>Buy & Sell Used Furniture</strong></h2>
                    <p class="text-light">The only online marketplace where you can buy, sell and deliver your furniture hassle-free.</p>
                </div>
                <button class="btn btn-primary" style={btnStyle}>Buy Furniture</button>
                <button class="btn btn-primary-outline ms-2" style={btnStyle}>Sell Furniture</button>
            </div>
        </section>
    )
}

export default Hero