function Testimonials(){

    let sectionStyle = {
        "background-color":"#00ADB5",
        "padding":"7.5% 0",
        "color":"#EEEEEE"
    }

    let borderStyle = {
        "border-top-color":"#393E46"
    }

    return(
        <section style={sectionStyle}>
            <h2 className="text-center">Happy Customers</h2>
            <div className="heading-border" style={borderStyle}></div>
        </section>
    )
}

export default Testimonials