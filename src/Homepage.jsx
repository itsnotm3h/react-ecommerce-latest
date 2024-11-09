import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";



export default function Homepage(){
    return(
        <>
        <Header showNowLink="/shop/" title="This is my shop" />

        <main className="container my-5">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <ProductCard imageURL="https://picsum.photos/id/20/300/200" productName="Product 1" price="$100.00" />
            </div>
            <div className="col-md-3 mb-4">
  
              <ProductCard imageURL="https://picsum.photos/id/1/300/200"
                className="card-img-top" productName="Product 2" price="$50.00" />
  
            </div>
            <div className="col-md-3 mb-4">
            <ProductCard imageURL="https://picsum.photos/id/26/300/200"
                className="card-img-top" productName="BTOB Album" price="$150.00" />      
            </div>
            <div className="col-md-3 mb-4">
  
            <ProductCard imageURL="https://picsum.photos/id/96/300/200"
                className="card-img-top" productName="33 Album" price="$150.00" /> 
        
            </div>
          </div>
        </main>
        </>
    );

}