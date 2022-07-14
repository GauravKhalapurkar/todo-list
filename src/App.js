import React from "react";
import AppContent from "./components/AppContent";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div>
        <PageTitle />
        <Header />
        <AppContent />
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

export default App;
