import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import routerWelcome from './routerWelcome';
import routerApp from './routerApp';

const router = createBrowserRouter([routerWelcome, routerApp]);

export default router;
