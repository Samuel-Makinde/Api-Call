import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./button.css";
// import $ from "jquery";
const Buttons = () => {
  // $(document).ready(function () {
  //   if (!$.browser.webkit) {
  //     $(".wrapper").html("<p>Sorry! Non webkit users. :(</p>");
  //   }
  // });

  const [productList, setProductList] = useState([])
    

    useEffect(() =>{
        axios.get(`https://100096.pythonanywhere.com/product_list/`)
        .then( res => {
            console.log('getting products')
            // const { } = productList
            setProductList(res.data.product_list)
        })
        .catch(err => {
            console.log('error')
        })
    }, [])

  return (
    <div className="d-flex flex-nowrap">
      <div className="d-flex flex-nowrap gap-2 scroll text-nowrap py-3">
        
          {productList.map(product => <button key={product} type="button" className="btn btn-sm btn-success">{product}</button>)}
      </div>
      </div>
  )
}
 

export default Buttons;
