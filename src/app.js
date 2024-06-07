import React from 'react';
import './dist/style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
