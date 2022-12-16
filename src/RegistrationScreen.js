import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

let registerStyle = {
    "box-shadow": "0px 0px 17px 12px lightgray",
}

function RegistrationScreen(){

    return(
        <section className="mx-auto padding-y-4">

            <form method="post" className="col-lg-10 mx-auto px-5 padding-y-5" style={registerStyle}>

                <h1 className="text-center margin-bottom-4">Register Here</h1>

                <div className="row margin-bottom-2">

                    <div className="col-lg">
                        <label for="firstName">First Name</label>
                        <input className="input-underline" type="text" name="firstName" id="firstName" />
                    </div>

                    <div className="col-lg">
                        <label for="lastName">Last Name</label>
                        <input className="input-underline" type="text" name="lastName" id="lastName" />
                    </div>

                    <div className="col-lg">
                        <label for="email">Email Address</label>
                        <input className="input-underline" type="email" name="email" id="email" />
                    </div>

                </div>

                <div className="row margin-bottom-2">

                    <div className="col-lg">
                        <label for="phone">Phone Number</label>
                        <input className="input-underline" type="text" name="phone" id="phone" />
                    </div>

                    <div className="col-lg">
                        <label for="password">Password</label>
                        <input className="input-underline" type="password" name="password" id="password" />
                    </div>

                    <div className="col-lg">
                        <label for="city">Residence City</label>
                        <input className="input-underline" type="text" name="city" id="city" />
                    </div>

                </div>

                <div className="row margin-bottom-2">

                    <div className="col-lg-4">
                        <label for="firstName">Avatar</label>
                        <input type="file" name="firstName" id="firstName" />
                    </div>

                </div>

                <div className="row margin-bottom-2">

                    <div className="col-lg-4">
                        <input type="checkbox" name="firstName" id="firstName" />
                        <label class="ms-3" for="firstName"> I agree to the Terms & Conditions</label>
                    </div>

                </div>

                <div className="col-lg-3 row mx-auto">
                        <button className="btn btn-primary">Sign Up</button>
                </div>

            </form>
        </section>
    )
}

export default RegistrationScreen