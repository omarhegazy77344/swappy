import { useEffect,useState } from "react";
import Button from '@mui/material/Button';
import {Link as ReactLink} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProductCard from "./ProductCard";







  function createProductCard(products){
    return(
        <ProductCard name={products.name} price={products.price} location={products.location} img={products.picture} />
    )
}

  var findData = new FormData();
  findData.append('null', null);


function ProductsScreen() {





  var [formState, setFormState] = useState(null);
  var [errorsState, setErrorsState] = useState([]);
  const [productDetails, setproductDetails]  = useState();

  var data;
  
    





    // Create a JS object like an HTML form element 

  useEffect(
    function() {
        fetch(
            `${process.env.REACT_APP_BACKEND_ENDPOINT}/products/find`,
        {
            'method':'POST' ,
            // 'headers':{
            //     'Authorization':`Bearer ${localStorage.getItem('jsonwebtoken')}`
            // }
        }
            )
        .then(
            function(backendResponse){
                return backendResponse.json()
            }
        )
        .then(
            function(jsonResponse){
                setproductDetails(jsonResponse);
            }
        )
        .catch(
            function(backendError){
                console.log('backendEroor',backendError)
            }
        )
    },
    []
  );

data=productDetails;


  return (

  <section>
      
      <div className="bg-dark text-light text-center padding-y-4">
          <h1>Product Listing</h1>
      </div>

      <div className="col-lg-10 col-10 col-md-10 row mx-auto margin-y-1">
          {productDetails?.map(createProductCard)}
      </div>
      
  </section>
    // <ThemeProvider theme={theme}>
    // <CssBaseline />
    
    // <main>
    //   {/* Hero unit */}
    //   <Box
    //     sx={{
    //       bgcolor: 'background.paper',
    //       pt: 8,
    //       pb: 6,
    //     }}
    //   >
    //     <Container maxWidth="sm">
    //       <Typography
    //         component="h1"
    //         variant="h2"
    //         align="center"
    //         color="text.primary"
    //         gutterBottom
    //       >
    //         Album layout
    //       </Typography>
    //       <Typography variant="h5" align="center" color="text.secondary" paragraph>
    //         Something short and leading about the collection below—its contents,
    //         the creator, etc. Make it short and sweet, but not too short so folks
    //         don&apos;t simply skip over it entirely.
    //       </Typography>
    //       <Stack
    //         sx={{ pt: 4 }}
    //         direction="row"
    //         spacing={2}
    //         justifyContent="center"
    //       >
    //         <Button variant="contained">Main call to action</Button>
    //         <Button variant="outlined">Secondary action</Button>
    //       </Stack>
    //     </Container>
    //   </Box>
    //   {/* End hero unit */}

    //   <Container sx={{ py: 8 }} maxWidth="md">
        


  
    //   <Grid container spacing={4}>
    //       {data?.map((product,i) => (
    //         <Grid item key={i} xs={12} sm={6} md={4}>
              
            
          
    //         <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
           
            
    //         <CardMedia
    //         component="img"
    //         sx={{
    //           // 16:9
    //           pt: '56.25%',
    //         }}
    //         image={product.picture}
    //         alt="random"
    //         />

    //                   <CardContent sx={{ flexGrow: 1 }}>
    //                   <Typography gutterBottom variant="h5" component="h2">
    //                   {product.name}
    //                   </Typography>
    //                   <Typography>
    //                   {product.price}
    //                   </Typography>
    //                   </CardContent>
    //           <CardActions>
    //           <Box sx={{ opacity: [0, 0, 0],}}> {}</Box>
    //             <Button
    //             to={'/pupdate'}
    //             component={ReactLink}
    //             size="small" >Edit</Button>
                
    //           </CardActions>
    //         </Card>
    //       </Grid>
    //       ))}
    //     </Grid>



    //   </Container>
    // </main> 

    // </ThemeProvider>
);

}
export {findData};
export default ProductsScreen;