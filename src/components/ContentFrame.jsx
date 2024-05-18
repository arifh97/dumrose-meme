import React from 'react'
import minimizeIcon from "../assets/img/minimizeIcon.png"
import zoomIcon from "../assets/img/zoomIcon.png"
import closeIcon from "../assets/img/closeIcon.png"
export default function ContentFrame({icon,name,children}) {
  return (
    <div className='contentFrame'>
        <div className="contentFrame-topBar d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <div className="topLeft d-flex align-items-center gap-2">
                <figure className='tmIcon'>
                    <img src={icon} alt="" />
                </figure>
                <span>{name}</span>
            </div>
            <div className="topRight">
                <button><img src={minimizeIcon} alt="" /></button>
                <button><img src={zoomIcon} alt="" /></button>
                <button><img src={closeIcon} alt="" /></button>
            </div>
        </div>
        <div className="contentFrame-details">
            {children}
        </div>
    </div>
  )
}
