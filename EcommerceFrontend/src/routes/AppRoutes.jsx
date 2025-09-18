import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import EditProfile from '../pages/EditProfile';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/resetPassword';
import ProtectedRoute from './ProtectedRoute';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/reset-password" element={<ResetPassword />}/>

      <Route path="/editprofile"  element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        } />
      <Route path="*" element={<NotFound />} />
        
    </Routes>
      
  );
}