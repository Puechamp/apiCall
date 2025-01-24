import { Routes, Route } from "react-router";
import Home from "../pages/Home";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
