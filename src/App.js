import React from "react";
import AppContent from "./components/AppContent";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";

const App = () => {
  return (
    <div>
      <PageTitle />
      <Header />
      <AppContent />
    </div>
  );
};

export default App;
