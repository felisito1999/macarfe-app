import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productData } from "../Data/productData";
import "../App.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData,
    };
  }

  render() {
    const imageStyle = {
      maxHeight: 500,
    };
    const btnStyle = {
      backgroundColor: "#FF8900",
    };
    return (
      <div className="product-page" style={{backgroundColor : "#306d93"}}>
        <div className="container">
          <h1>This is the products page</h1>
          <div className="row">
            {this.state.products.map((product, item) => (
              <div key={item} className="col-md-4">
                <Card className="mb-5" style={{ backgroundColor: "#0F4C75" }}>
                  <Card.Img
                    className="img img-fluid"
                    src={product.image}
                    style={imageStyle}
                  ></Card.Img>
                  <hr />
                  <Card.Title className="text-center text-light">
                    {product.productName}
                  </Card.Title>
                  <hr/>
                  <Card.Text className="text-center text-light font-weight-bold">
                    Precio : {product.price} RD$
                  </Card.Text>
                  <Card.Footer>
                    <Link
                      className="btn btn-class btn-block"
                      to={""}
                      style={btnStyle}
                    >
                      Agregar al carrito de compra
                    </Link>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
