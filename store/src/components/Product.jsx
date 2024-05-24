import React, { Component } from "react";

export default class Product extends Component {
  state = {
    id: this.props.id,
    productName: this.props.productName,
    price: this.props.price,
  };

  render() {
    return (
      <>
        <div className="card m-2">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-muted">#{this.props.id}</div>
              <span
                className="text-danger"
                onClick={() => {
                  this.props.onDelete(this.props.prod);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h5 className="pt-5 border-top">{this.props.productName}</h5>
            <div>${this.props.price}</div>
          </div>
          {/* card body ends here */}

          {/* card footer begins here */}
          <div className="card-footer">
            <div className="float-left">
              <span className="badge badge-pill badge-info">
                {this.props.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.props.prod, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    this.props.onDecrement(this.props.prod, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-right">{this.props.button}</div>
          </div>
        </div>
      </>
    );
  }
}
