import Hero from "./HomeComponents/Hero"
import Features from "./HomeComponents/Features";
//import Product from "./Product";
import Testimonials from "./HomeComponents/Testimonials";
//import { Button } from "@mui/material";

function HomeScreen() {
    return (
        <div>
            <Hero/>       
            <Features />
            <Testimonials />
        </div>
    )
}

export default HomeScreen