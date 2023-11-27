import React from 'react'
import Navbar from '../components/navbar/navbar'
export default function layout(props) {
  return (
    <>
    <Navbar userName={props.userName}></Navbar>
    {props.children}
    </>
    
  )
}
