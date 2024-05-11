import React from 'react'
import Login from './Login'

const Home = ({ sucsecc, setsucsecc }) => {
    return (
        <div>
            {sucsecc === true && <Login />}
        </div>
    )
}

export default Home