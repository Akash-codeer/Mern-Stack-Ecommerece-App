import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Inital Details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params.slug]);

  // Get Products
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Similar Products
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {/* {JSON.stringify(products, null, 4)} */}
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height={"600px"}
            width={"200px"}
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product Details</h1>
          <h5>Name: {product.name}</h5>
          <h5>Description: {product.description}</h5>
          <h5>Price: {product.price}</h5>
          <h5>Category: {product.category?.name} </h5>
          <button class="btn btn-info ms-1">ADD TO CART</button>
        </div>
      </div>
      <hr />
      <div className="row container">
        <h5>Similar Products</h5>
        {relatedProducts.length < 1 && <p className="text-center">No Similar Products</p>}
        {/* {JSON.stringify(relatedProducts, null, 4)} */}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text">₹ {p.price}</p>
                <button class="btn btn-info ms-1">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
