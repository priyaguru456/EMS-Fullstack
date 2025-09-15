import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", minHeight: "80vh" }}>
        <AddEmployee />
        <EmployeeList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
