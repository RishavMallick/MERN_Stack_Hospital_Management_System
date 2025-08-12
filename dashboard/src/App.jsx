import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, admin, setAdmin } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/admin/me`,
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };

    fetchUser();
  }, []); 

  return (
    <Router>
      {isAuthenticated && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? <Login /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/doctor/addnew"
          element={
            isAuthenticated ? <AddNewDoctor /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/admin/addnew"
          element={
            isAuthenticated ? <AddNewAdmin /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/messages"
          element={
            isAuthenticated ? <Messages /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/doctors"
          element={
            isAuthenticated ? <Doctors /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
