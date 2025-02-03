import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Components/Page/About";
import Page from "./Components/Page";
import Pricing from "./Components/Page/Pricing";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Page/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
