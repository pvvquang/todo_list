import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TodoList from "../component/TodoList";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
