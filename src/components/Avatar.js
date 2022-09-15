import React from 'react'

function Avatar({ user }) {
  return (
    <div className='avatar-component'>
        <img className='avatar' src={user.avatar} alt='s' />
        <h3 className='avatar-title'>{user.name}</h3>
        
        </div>
  )
}

export default Avatar