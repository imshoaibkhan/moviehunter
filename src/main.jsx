import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Movies from './pages/Movies.jsx'
import Trending from './pages/Trending.jsx'
import TvSeries from './pages/TvSeries.jsx'
import Search from './pages/Search.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Trending />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: 'TVseries',
        element: <TvSeries /> 
      },
      {
        path: 'search',
        element: <Search />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
