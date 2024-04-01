import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useFirebase } from './Context/FirebaseContext';
import Singup from './Component/Auth/Singup';
import Singin from './Component/Auth/Singin';
import Explore from './Component/Explore/Explore';
import Subscription from './Component/Subscription/Subscription';
import Setting from './Component/Setting/Setting';
import Dashboard from './Component/Dashboard/Dashboard';
import Profile from './Component/Dashboard/Profile';
import CreateNew from './Component/Dashboard/CreatNew';
import Performance from './Component/Dashboard/Performance';
import ManageNews from './Component/Dashboard/ManageNews';
import PrivateRoute from './Private';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';

function App() {
  const firebase = useFirebase();

  return (
    <div className="App">

      <Routes>
        <Route path="/signup" element={<Singup />} />
        <Route path="/signin" element={<Singin />} />
        <Route path="/" element={<Singin />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />}><Dashboard /></PrivateRoute>} />
        <Route path="/Profile" element={<PrivateRoute  element={<Profile />}><Profile /></PrivateRoute>} />
        <Route path="/CreateNew" element={<PrivateRoute  element={<CreateNew />}><CreateNew /></PrivateRoute>} />
        <Route path="/Performance" element={<PrivateRoute  element={<Performance />}><Performance /></PrivateRoute>} />
        <Route path="/ManageNews" element={<PrivateRoute  element={<ManageNews />}><ManageNews /></PrivateRoute>} />
        <Route path="/Home" element={<PrivateRoute element={<Home />}><Dashboard /></PrivateRoute>} />
        <Route path="/Home" element={<PrivateRoute element={<Home />}><Dashboard /></PrivateRoute>} />
        <Route path="/Explore" element={<PrivateRoute element={<Home />}><Explore /></PrivateRoute>} />
        <Route path="/Subscription" element={<PrivateRoute element={<Home />}><Subscription /></PrivateRoute>} />
        <Route path="/Setting" element={<PrivateRoute element={<Home />}><Setting /></PrivateRoute>} />
       <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
