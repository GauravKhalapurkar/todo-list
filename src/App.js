import React from "react";
import AppContent from "./components/AppContent";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import { Toaster } from "react-hot-toast";
import Background from "./components/Background";

const App = () => {
  return (
    <>
      <div className="bg-bg-1">
        <Background />
        <PageTitle />
        <Header />
        <AppContent />
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

export default App;
