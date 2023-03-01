import React, { lazy, useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import img from "./assets/logo2.png";
import "react-toastify/dist/ReactToastify.css";
import { Privacy } from "./Components/Privacy";
const AllCards = lazy(() => import("./Pages/AllCards"));
const CreateCard = lazy(() => import("./Pages/CreateCard"));
const HomeSet = lazy(() => import("./Pages/HomeSet"));
const UpdateCard = lazy(() => import("./Pages/UpdateCard"));
const CreateReview = lazy(() => import("./Pages/CreateReview"));
const AdminPanel = lazy(() => import("./Pages/AdminPanel"));
const DisplayPost = lazy(() => import("./Pages/DisplayPost"));
const DisplayReview = lazy(() => import("./Pages/DisplayReview"));
const Logout = lazy(() => import("./Pages/Logout"));
const Login = lazy(() => import("./Pages/Login"));
const CardDetailPage = lazy(() => import("./Pages/CardDetailPage"));
const App = () => {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <div
              className="col text-center p-5"
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={img}
                alt="img"
                className="anim"
                style={{ width: "200px", height: "200px" }}
              />
              <div>
                <b>
                  Welcome to <LoadingOutlined /> Cruise World
                </b>
              </div>
            </div>
          }
        >
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomeSet />}></Route>
            <Route path="/view" element={<AllCards />}></Route>
            <Route path="/create" element={<CreateCard />}></Route>
            <Route path="/update/:_id" element={<UpdateCard />}></Route>
            <Route path="/create/review" element={<CreateReview />}></Route>
            <Route path="/admin" element={<AdminPanel />}></Route>
            <Route path="/display" element={<DisplayPost />}></Route>
            <Route path="/display/review" element={<DisplayReview />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/detail/:slug" element={<CardDetailPage />}></Route>
            <Route path="/privacy-policy" element={<Privacy />}></Route>
            
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
