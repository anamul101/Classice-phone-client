import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { router } from "./Routers/Routers/Routers";



function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ScrollToTop smooth color="#6f00ff" />
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
