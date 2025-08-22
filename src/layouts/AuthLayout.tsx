import { AbsoluteCenter } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <AbsoluteCenter>
      <Outlet />
    </AbsoluteCenter>
  )
}

export default AuthLayout