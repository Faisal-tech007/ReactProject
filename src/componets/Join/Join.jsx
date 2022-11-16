import React, { useRef } from 'react'
import './Join.css'
const Join = () => {
    const form = useRef()
  return (
    <div className='join' id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} className='email-contianer'>
                <input type="email" name='user-mail' placeholder='Enter your email address' autoComplete='off'/>
                <button className='btn btn-j'>Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join