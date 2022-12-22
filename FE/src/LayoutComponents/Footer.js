function Footer(){
    return(
        <section className="col-lg-12 footer">

            <div className="col-lg-10 col-11 row mx-auto footer-main-section">

                <div className="col-lg-4 footer-section">
                    <img src="images/footer-logo.png" className="footer-logo" alt="footer logo"/>
                    <p className="margin-y-2 font-14">Sellstuff.com is the only online marketplace in the UAE that helps customers list or buy used products online and ship the products too. </p>
                    <div className="col-lg-7 col-6 row">
                        <i className="fa-brands fa-facebook primary-icon font-20 col"></i>
                        <i className="fa-brands fa-instagram primary-icon font-20 col"></i>
                        <i className="fa-brands fa-tiktok primary-icon font-20 col"></i>
                        <i className="fa-brands fa-linkedin primary-icon font-20 col"></i>
                    </div>
                </div>

                <div className="col-lg-2 footer-section">
                    <h5 className="margin-bottom-2">Categories</h5>
                    <a href="/" className="footer-link font-14">Shop by Room Type</a>
                    <a href="/" className="footer-link font-14">Shop by Furniture Type</a>
                    <a href="/" className="footer-link font-14">Summer Sale</a>
                    <a href="/" className="footer-link font-14">Gift Cards</a>
                    <a href="/" className="footer-link font-14">Holidays Sale</a>
                </div>

                <div className="col-lg-2 footer-section">
                    <h5 className="margin-bottom-2">Customer Service</h5>
                    <a href="/about" className="footer-link font-14">About Us</a>
                    <a href="/contact" className="footer-link font-14">Contact</a>
                    <a href="/" className="footer-link font-14">Request A Return</a>
                    <a href="/" className="footer-link font-14">Terms & Conditions</a>
                    <a href="/" className="footer-link font-14">Return Policy</a>
                </div>

                <div className="col-lg footer-section footer-section-end">
                    <h5 className="margin-bottom-2">Contact Us</h5>
                    <div className="row mb-3">
                        <i className="fa-solid fa-location-dot font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-14">Flat 1103, Churchill Tower, Dubai, UAE</p>
                    </div>
                    <div className="row mb-3">
                        <i className="fa-solid fa-phone font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-14">+971 50 604 5355</p>
                    </div>
                    <div className="row">
                        <i className="fa-solid fa-envelope font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-14">support@sellstuff.com</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Footer