import { Route, Routes } from 'react-router-dom';

import { routePathConfig } from './config';
import Home from '../pages/Home';
import Tags from '../pages/Tags';

const Router = () => {
  return (
    <Routes>
      <Route path={routePathConfig.home} element={<Home />} />
      <Route path={routePathConfig.tags} element={<Tags />} />
    </Routes>
  );
};

export default Router;
