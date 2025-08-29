import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthenticationLayout from './auth-layout'
import AuthHandler from '@/handlers/auth-handler'

export const PublicLayout = () => {
  return (
    <div className='w-full'>
    <AuthHandler/>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </div>
  )
}

