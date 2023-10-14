import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import router from './routes/router'; 
import store from './store/store'

import './index.css';



const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
		<Provider store={store}>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
		</Provider>
);
