function TopNav(){

    let sectionBG = {
        "background-color":"#222831",
        "font-family":"Nunito",
    }

    return(
        <div className="top-nav justify-content-center" style={sectionBG}>

            <div class="col-lg-10 row justify-content-center mx-auto">

                <div class="col-lg row">
                    <i className="col-lg-1 font-20 fa-solid fa-location-dot primary-icon m-auto"></i>
                    <p className="col-lg-11 text-light text-start my-auto font-12">Flat 1103, Churchill Tower, Dubai, UAE</p>
                </div>

                <div class="col-lg-3 row">
                    <i className="col-lg-2 font-20 fa-solid fa-envelope primary-icon m-auto"></i>
                    <p className="col-lg-10 text-light my-auto font-12">info@sellstuff.com</p>
                </div>

                <div class="col-lg-3 row">
                    <i className="col-lg-2 font-20 fa-solid fa-phone primary-icon m-auto"></i>
                    <p className="col-lg-10 text-light my-auto font-12">+97161234567</p>
                </div>


            </div>

        </div>
    )
}

export default TopNav