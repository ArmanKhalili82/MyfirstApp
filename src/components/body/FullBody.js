import React from 'react'
import Layout from './Layout'
import './FullBody.css'
import MorePics from './MorePics'
import Discription from './Discription'


const FullBody = () => {
  return (
    <div className='fullbody'>
        <Layout />
        <MorePics />
        <Discription />
    </div>
  )
}

export default FullBody