import React from 'react'
import { Link } from 'react-router'

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
    <img src="/src/assets/svg/logo.svg" className='min-w-10 min-h-10 object-contain' alt="" />
    </Link>
)
}
