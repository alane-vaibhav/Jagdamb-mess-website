import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import PaymentPage from "./pages/Payment-page";
import SummaryPage from "./pages/Summary";
import Navbar from "./components/NavBar";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <>
      <div className="flex p-2 bg-amber-200 ">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
