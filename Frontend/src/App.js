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
import Homepage from './Component/Homepage/Homepage';

function App() {
  const firebase = useFirebase();

  return (
    <div className="App">
      <Routes>
      <Route path="/signup" element={<Singup />} />
        <Route path="/signin" element={<Singin />} />
        <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
<Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
<Route path="/createNew" element={<PrivateRoute element={<CreateNew />} />} />
<Route path="/performance" element={<PrivateRoute element={<Performance />} />} />
<Route path="/manageNews" element={<PrivateRoute element={<ManageNews />} />} />
<Route path="/home" element={<PrivateRoute element={<Home />} />} />
<Route path="/explore" element={<PrivateRoute element={<Explore />} />} />
<Route path="/subscription" element={<PrivateRoute element={<Subscription />} />} />
<Route path="/setting" element={<PrivateRoute element={<Setting />} />} />
<Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
