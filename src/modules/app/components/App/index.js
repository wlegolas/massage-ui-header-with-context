import React from "react"
import { AppProvider } from '../../context/AppContext'
import { Header } from '..'
import "./styles.css";

function App() {
  return (
    <AppProvider>
      <div className="x-app">
        <Header />
      </div>
    </AppProvider>
  );
}

export default App;
