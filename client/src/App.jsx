// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import AddSweet from "./pages/AddSweet";
// import UpdateSweet from "./pages/UpdateSweet";
// import Cart from "./pages/Cart";
// import SweetDetails from "./pages/SweetDetails";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/add" element={<AddSweet />} />
//             <Route path="/update/:id" element={<UpdateSweet />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/sweet/:id" element={<SweetDetails />} />
//           </Routes>
//         </main>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddSweet from "./pages/AddSweet";
import UpdateSweet from "./pages/UpdateSweet";
import Cart from "./pages/Cart";
import SweetDetails from "./pages/SweetDetails";

function App() {
  return (
    <div className="min-h-screen bg-white text-orange-900 font-sans ">
      <BrowserRouter>
        {/* Navbar (30% color applied in Navbar component directly) */}
        <Navbar />

        {/* Main Content */}
        <main className="p-4 max-w-7xl mx-auto bg-orange-50 rounded-lg shadow-md mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddSweet />} />
            <Route path="/update/:id" element={<UpdateSweet />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sweet/:id" element={<SweetDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
