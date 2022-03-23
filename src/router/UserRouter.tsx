import react from 'react';
import { Routes,Route} from 'react-router-dom';

import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

const UserRouter = () =>{
    return (
        <Routes>
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
    );
}

export default UserRouter;