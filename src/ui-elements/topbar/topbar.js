import React from 'react'
import './topbar.scss'
import more from '../../assets/icons/more.svg'
import plus from '../../assets/icons/plus.svg'

const Topbar = ({title, count, titleIconSrc}) => {

    return (
        <div className='topbar'>
            <div className='left'>
                {titleIconSrc ? 
                    <img className='status-icon' alt='' src={titleIconSrc}/>
                    :
                    <div className='profile'>{title[0]}</div>
                }
                <div className='title'>{title}</div>
                <div className='count'>{count}</div>
            </div>


            <div className='right'>
                <img alt='' className='plus icon' src={plus}/>
                <img alt='' className='more icon' src={more}/>
            </div>
        </div>
    )
}

export default Topbar;