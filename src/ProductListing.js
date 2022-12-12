import BestsellingProducts from "./HomeComponents/BestsellingProducts"

function ProductListing(){

    let listingTitle = {
        "background-color":"#222831",
        "color":"#EEEEEE"
    }

    return(
        <div>
            <div className="container-fluid text-center padding-y-5" style={listingTitle}>
                <h1>Decorate Your Living Room</h1>
            </div>
            <BestsellingProducts />
            <BestsellingProducts />
            <BestsellingProducts />
            <BestsellingProducts />
        </div>
    )
}

export default ProductListing