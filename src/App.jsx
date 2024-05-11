import { Marker, Popup } from 'leaflet'
import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
const App = () => {
  const [sucsecc, setsucsecc] = useState(false)
  const [isLogin, setisLogin] = useState(false)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path='/admin' element={<AdminPanel isLogin={isLogin} />} />
        <Route index element={<Login setisLogin={setisLogin} sucsecc={sucsecc} setsucsecc={setsucsecc} />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App