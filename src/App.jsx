import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import { Forgot } from "./Forgot";
import { SignIn } from "./SignIn";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
