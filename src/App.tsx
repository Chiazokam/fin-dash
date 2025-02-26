import { useState } from "react";
import { Routes, Route } from "react-router";
import { useStoreSelector } from "./hooks/store"
import { selectCount } from "./store/reducers/counterSlice"
import { Settings, Dashboard, Header } from "./components";

export const App = () => {
  const [pageTitle, setPageTitle] = useState('Overview')
  const count = useStoreSelector(selectCount);

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
