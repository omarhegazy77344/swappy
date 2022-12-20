function Footer(){
    return(
        <section className="col-lg-12 footer">

            <div className="col-lg-10 col-10 row mx-auto footer-main-section">

                <div className="col-lg-4 footer-section">
                    <img src="images/footer-logo.png" className="footer-logo" alt="footer logo"/>
                    <p className="margin-y-1 font-14">Sellstuff.com is the only online marketplace in the UAE that helps customers list or buy used products online and ship the products too. </p>
                </div>

                <div className="col-lg-4 footer-section">
                    <a href="/" className="footer-link font-16">About Us</a>
                    <a href="/" className="footer-link font-16">Home</a>
                    <a href="/" className="footer-link font-16">Buy</a>
                    <a href="/" className="footer-link font-16">Sell</a>
                    
                </div>

                <div className="col-lg footer-section footer-section-end">
                    <div className="row mb-3">
                        <i className="fa-solid fa-location-dot font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-16">Flat 1103, Churchill Tower, Dubai, UAE</p>
                    </div>
                    <div className="row mb-3">
                        <i className="fa-solid fa-phone font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-16">+971 50 604 5355</p>
                    </div>
                    <div className="row">
                        <i className="fa-solid fa-envelope font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-16">support@sellstuff.com</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Footer