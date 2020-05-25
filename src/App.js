import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/ConfigureStore";
import AppLayout from "./Components/AppLayout";
function App() {
  return (
    <Provider store={ConfigureStore()}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
