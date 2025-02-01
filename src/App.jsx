import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Page from "./Components/Page/Page";
import About from "./Components/Page/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Page/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
