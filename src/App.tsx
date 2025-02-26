import { useState } from "react";
import { Routes, Route } from "react-router";
import { Settings, Dashboard, Header } from "./components";

export const App = () => {
  const [pageTitle] = useState('Overview')

  return (
    <div>
      <Header title={pageTitle} />
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </div>
  )
}

export default App
