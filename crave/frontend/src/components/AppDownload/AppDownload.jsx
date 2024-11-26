import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download<br /><span className='app-name'>Crave App</span></p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="play-store-icon" />
            <img src={assets.app_store} alt="app-store-icon" />
        </div>
    </div>
  )
}

export default AppDownload