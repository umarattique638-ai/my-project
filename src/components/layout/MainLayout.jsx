import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";

function MainLayout() {
  // const navigation = useNavigation();

  // if (navigation.state === "loading") {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
