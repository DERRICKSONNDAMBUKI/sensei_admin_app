import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Home from "./components/views/pages/home/Home";
import SideBar from "./components/views/sidebar/SideBar";
import Topbar from "./components/views/topbar/Topbar";
import UserList from "./components/views/pages/userList/UserList";
import User from "./components/views/pages/user/User";
import NewUser from "./components/views/pages/newUser/NewUser";
import ProductList from "./components/views/pages/productList/ProductList";
import Product from "./components/views/pages/product/Product";
import NewProduct from "./components/views/pages/newProduct/NewProduct";
import { useEffect, useState } from "react";


function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [prodImg, setProdImg] = useState();
  // USERS

  // fetch users
  const getUsers = async () => {
    try {
      const fetchUsers = await fetch("http://localhost:5000/users");
      const jsonUsers = await fetchUsers.json();
      setUsers(jsonUsers);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  // console.log(users);

  // delete user
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    setUsers(users.filter((users) => users.id !== id));
  };
  // PRODUCTS
  // fetch products
  const getProducts = async () => {
    try {
      const fetchProducts = await fetch("http://localhost:5000/products");
      const jsonProducts = await fetchProducts.json();
      setProducts(jsonProducts);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(users);

  // delete product
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    setProducts(products.filter((products) => products.id !== id));
  };
  // new product
  const newProduct = async (product) => {
    const res = await fetch("http://localhost:5000/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const productdata = await res.json();
    setProducts([...products, productdata]);
  };
  const productImg = async (proImg) => {
    const res = await fetch(
      "http://localhost:5000/api/file/productimage",
      proImg,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    const productImgData = await res.formData;

  
    prodImg(productImgData);
  };

  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          {/* user */}
          <Route path={"/users"}>
            <UserList users={users} deleteUser={deleteUser} />
          </Route>
          <Route path={"/newUser"}>
            <NewUser />
          </Route>
          <Route path={"/user/:userId"}>
            <User />
          </Route>
          {/* product */}
          <Route path={"/products"}>
            <ProductList products={products} deleteProduct={deleteProduct} />
          </Route>
          <Route path={"/newProduct"}>
            <NewProduct newProduct={newProduct} productImg={productImg} />
          </Route>
          <Route path={"/product/:productId"}>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
