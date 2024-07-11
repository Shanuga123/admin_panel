import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Register,
  Role,
  ContentManagement,
  MarketPlace,
  Settings,
  ShowcaseManagement,
} from "./Pages/index";
import BlogPage from "./Pages/BlogPage";
import AllBlogPage from "./Pages/AllBlogPage";
import AllProducts from './Pages/AllProducts';
import CreateProduct from "./Pages/CreateProduct";
import BlogDetailPage from "./Pages/BlogDetailPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import AllActivities from "./Pages/AllActivities";
import PendingActivities from "./Pages/PendingActivities";
import ActivityDetails from "./Pages/ActivityDetails";
import AllRestaurant from "./Pages/AllRestaurant";
import PendingRestaurants from "./Pages/PendingRestaurants";
import RestaurantDetails from "./Pages/RestaurantDetails";
import AllRent from './Pages/AllRent';
import PendingRent from "./Pages/PendingRent";
import RentDetails from "./Pages/RentDetails";
import AllHotels from "./Pages/AllHotels";
import PendingHotel from "./Pages/PendingHotel";
import HotelDetails from "./Pages/HotelDetails";



const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/role-management" element={<Role />} />
          <Route path="/content-management" element={<ContentManagement />} />
          <Route path="/all-product" element={<AllProducts />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/all-activity" element={<AllActivities />} />
          <Route path="/all-restaurant" element={<AllRestaurant />} />
          <Route path="/all-rent" element={<AllRent />} />
          <Route path="/all-hotel" element={<AllHotels />} />
          <Route path="/pending-activity" element={<PendingActivities />} />
          <Route path="/pending-restaurant" element={<PendingRestaurants />} />
          <Route path="/pending-rent" element={<PendingRent />} />
          <Route path="/pending-hotel" element={<PendingHotel />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/showcase-management" element={<ShowcaseManagement />} />
          <Route path="/create-blog" element={<BlogPage />} />
          <Route path="/edit-blog/:listingId" element={<BlogPage />} />
          <Route path="/edit-product/:listingId" element={<CreateProduct />} />
          <Route path="/all-blog" element={<AllBlogPage />} />
          <Route path="/blog/detail/:listingId" element={<BlogDetailPage/>} />
          <Route path="/product/detail/:listingId" element={<ProductDetailPage/>} />
          <Route path="/activity/detail/:listingId" element={<ActivityDetails/>} />
          <Route path="/restaurant/detail/:listingId" element={<RestaurantDetails/>} />
          <Route path="/rent/detail/:listingId" element={<RentDetails/>} />
          <Route path="/hotels/detail/:listingId" element={<HotelDetails/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App; //app
