import { Routes, Route } from "react-router";
import { Settings, Dashboard, Layout } from "./components";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/overview" element={<Dashboard />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App
