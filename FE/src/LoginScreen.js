function LoginScreen(){

    let loginStyle = {
        "box-shadow": "0px 0px 17px 12px lightgray",
    }

    let btnStyle = {
        "width":"100%"
    }

    return(
        <div>

            <section className="col-lg-10 mx-auto margin-y-3">

                <form method="get" className="col-lg-5 mx-auto px-5 padding-y-5" style={loginStyle}>

                        <h1 className="text-center margin-bottom-3">Login</h1>

                        <div className="margin-bottom-2">
                            <label for="email">Email Address</label>
                            <input className="input-underline" type="email" name="email" id="email" />
                        </div>

                        <div className="margin-bottom-2">
                            <label for="password">Password</label>
                            <input className="input-underline" type="password" name="password" id="password" />
                        </div>

                        <div className="margin-bottom-2">
                            <p className="font-12">By logging in, you agree to our Terms & Conditions.</p>
                        </div>

                        <div className="col-lg-6 mx-auto margin-bottom-1">
                            <button className="btn btn-primary" type="submit" style={btnStyle}>Login</button>
                        </div>

                        <hr />

                </form>

            </section>

            <hr className="col-lg-6 mx-auto"/>

            <section class="col-lg-10 mx-auto text-center margin-y-3">
                <h2>New User? <strong><a href="/registration">Sign Up</a></strong></h2>
            </section>

        </div>
    )
}

export default LoginScreen