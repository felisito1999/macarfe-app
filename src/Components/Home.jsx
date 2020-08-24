import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Content/logo_macarfe.svg";
import dulces from "../Content/foto_dulces.jpg";
import paquetes from "../Content/correos.jpg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const style = {
      maxHeight: 500,
    };
    const btnStyle = {
      backgroundColor: "#FF8900",
    };
    return (
      <div className="">
        {/* <h1 className="text-center jumbotron bg-dark text-light">
          Macarfe
        </h1> */}
        <div className="bg-white p-2">
          <div className="container">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo}
                  alt="First slide"
                  style={style}
                />
                {/* <Carousel.Caption>
              <h3>Macarfe</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-responsive"
                  src={dulces}
                  alt="Third slide"
                  style={style}
                />
                <Carousel.Caption className="carousel-text">
                  <h3>Todo tipo de dulces y golosinas</h3>
                  <p>Paletas, caramelos duros, gomitas y mucho más</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={paquetes}
                  alt="Third slide"
                  style={style}
                />

                <Carousel.Caption className="carousel-text">
                  <h3>Envío de su mercancía de manera fácil y rápida</h3>
                  {/* <p>Porque su abastecimiento es nuestra responsabilidad</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div
          className="p-5 text-center text-light"
          style={{ backgroundColor: "#306d93" }}
        >
          <h2>¿Desea ver los productos que ofrecemos?</h2>
          <Link
            className="btn m-2"
            style={btnStyle}
            to={"/macarfe-app/productos"}
          >
            Ver productos
          </Link>
        </div>
        <div
          className="p-5 text-center text-light"
          style={{ backgroundColor: "#0c3c5c" }}
        >
          <h2>Para saber más sobre nosotros dar click aquí</h2>
          <Link
            className="btn m-2"
            style={btnStyle}
            to={"/macarfe-app/productos"}
          >
            Ver más sobre nosotros
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
