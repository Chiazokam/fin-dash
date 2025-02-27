import { Routes, Route } from "react-router";
import { Settings, Dashboard, Layout } from "./components";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App
