import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      // { id: 1, productName: "iphone", price: 4500, quantity: 5 },
      // { id: 2, productName: "Tv", price: 4500, quantity: 8 },
      // { id: 3, productName: "Xbox", price: 4500, quantity: 9 },
      // { id: 4, productName: "playstation", price: 4500, quantity: 10 },
      // { id: 5, productName: "Tablet", price: 4500, quantity: 13 },
      // { id: 6, productName: "fridge", price: 4500, quantity: 12 },
      // { id: 7, productName: "Washing machine", price: 4500, quantity: 34 },
      // { id: 8, productName: "dell Laptop", price: 4500, quantity: 67 },
      // { id: 9, productName: "Mouse", price: 4500, quantity: 34 },
      // { id: 10, productName: "KeyBoard", price: 4500, quantity: 5 },
      // { id: 11, productName: "Iphone pro 15", price: 4500, quantity: 6 },
      // { id: 12, productName: "School bag", price: 4500, quantity: 12 },
      // { id: 13, productName: "Charger ", price: 4500, quantity: 12 },
    ],
  };
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.findIndex((p) => p.id === product.id);

    if (index !== -1 && allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.findIndex((p) => p.id === product.id);

    if (index !== -1 && allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };
  // occcurs when user presses on the x icon
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete")) {
      ///delete product based on index
      allProducts.splice(index, 1);

      // update state of current component
      this.setState({ products: allProducts });
    }
  };

  // componentDidMount() {
  //   const promise = fetch("http://localhost:3000/products", { method: "GET" });
  //   promise.then((response) => {
  //     const promise2 = response.json();
  //     promise2.then((products) => {
  //       this.setState({ products: products });
  //     });
  //   });
  // }
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      this.setState({ products });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <h4>ShoppingCart</h4>
          <div className="row  ">
            {this.state.products.map((prod) => (
              <div className="col-12 col-md-6" key={prod.id}>
                <Product
                  prod={prod}
                  id={prod.id}
                  productName={prod.productName}
                  price={prod.price}
                  quantity={prod.quantity}
                  button={<button className="btn btn-primary">BuyNow</button>}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
