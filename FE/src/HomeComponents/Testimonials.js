function Testimonials(){

    let sectionStyle = {
        "background-color":"#00ADB5",
        "padding":"7.5% 0",
        "color":"#EEEEEE"
    }

    let testimonialsImg = {
        "background": "linear-gradient(90deg,rgba(0,0,0,0),rgba(126, 217, 87, 0)), url(/images/testimonial-img.png)",
        "background-repeat": "no-repeat",
        "background-position": "right", 
        "background-size":"cover",
        "border-radius": "0",
        "height":"450px",
        "margin":"2%"
    }

    let testimonialsContent ={
        "margin-top":"5%",
        "margin-bottom":"-5%"
    }

    return(
        <section style={sectionStyle}>

            <div className="col-lg-9 mx-auto row text-dark">

                <div className="col-lg-6 bg-light">
                    <div className="container-fluid mx-auto" style={testimonialsImg}>
                    </div>
                </div>

                <div className="col-lg-6 bg-light padding-top-5" style={testimonialsContent}>

                        <div className="text-center">
                            <h3 className="text-dark">Happy Customers!</h3>
                        </div>

                        <div className="col-lg-8 mx-auto text-center margin-top-3">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br /></p>
                            <h6 className="bold">- John Doe</h6>
                        </div>

                </div>
            </div>

        </section>
    )
}

export default Testimonials