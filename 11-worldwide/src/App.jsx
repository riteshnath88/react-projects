/*There are 2 ways to define routes and the common and traditional way is the declarative
way where we use the functions that are provided to us by react-router library*/

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            {/* Index route is a default child route that is going to be executed if none of the other child routes matches. It is used to display some default contents before any other nested routes executes.   */}
            {/* Child route for the parent routes - we don't need to refer the parent as react auto detects that they are the child. 
          There is a react Outlet element which will determine where the content will be displayed. So in the Sidebar component we use the 
          Outlet element to display the content.*/}
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />}></Route>
            <Route path="cities/:id" element={<City />}></Route>
            <Route path="countries" element={<CountryList />}></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
