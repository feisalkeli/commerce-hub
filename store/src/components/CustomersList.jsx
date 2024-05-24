import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "12223-456",
        address: "Nairobi",
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Boyd",
        phone: "12223-956",
        address: "Shamakhojho",
        photo: "https://picsum.photos/id/1025/60",
      },
      {
        id: 3,
        name: "Ashley",
        phone: "1222-456",
        address: "Mavoko",
        photo: "https://picsum.photos/id/1024/60",
      },
      {
        id: 9,
        name: "Kanini",
        phone: "123-456",
        address: "Dubai",
        photo: "https://picsum.photos/id/1023/60",
      },
      {
        id: 4,
        name: "Temu",
        phone: "12223-45006",
        address: "Kuwale",
        photo: "https://picsum.photos/id/1020/60",
      },
      {
        id: 5,
        name: "Bryce",
        phone: "",
        address: "India",
        photo: "https://picsum.photos/id/1019/60",
      },
    ],
  };

  onRefreshClick = () => {
    // Implement your refresh logic here
    this.setState((prevState) => ({
      customersCount: prevState.customersCount + 1,
    }));
  };

  customerNameStyle = (customerName) => {
    if (customerName.toLowerCase().startsWith("s"))
      return { backgroundColor: "green" };
    if (customerName.toLowerCase().startsWith("a"))
      return { backgroundColor: "red" };
  };

  onChangePictureClick = (customer, index) => {
    // Copy the existing customers array from the state
    let custArr = [...this.state.customers];

    // Update the photo of the specific customer
    custArr[index].photo = "https://picsum.photos/id/1019/60";

    // Update the state with the modified customers array
    this.setState({ customers: custArr });
  };
  render() {
    return (
      <div className="">
        <h4 className="border-bottom m1 p-1">
          {this.state.pageTitle}{" "}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className=" container table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Profile Photo</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer, index) => {
              return (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>
                    {customer.photo && (
                      <div>
                        <img src={customer.photo} alt="image_customer" />
                      </div>
                    )}
                    <div
                      className="btn btn-primary btn-sm mt-3 "
                      onClick={() => {
                        this.onChangePictureClick(
                          customer.photo,
                          customer.index
                        );
                      }}
                    >
                      Change picture
                    </div>
                  </td>

                  <td>
                    {customer.phone ? (
                      <div className="text-primary">{customer.phone}</div>
                    ) : (
                      <div className="text-danger">No Phone</div>
                    )}
                  </td>
                  <td>
                    {customer.address ? (
                      <div>
                        <div className="text-primary">{customer.address}</div>
                      </div>
                    ) : (
                      <p className="text-danger">No address available</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
