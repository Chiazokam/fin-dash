import { Routes, Route, Navigate } from "react-router";
import { Settings, Dashboard, Layout } from "./components";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/Overview" replace />} />
        <Route path="/Overview" element={<Dashboard />} />
        <Route path="/Setting" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App
