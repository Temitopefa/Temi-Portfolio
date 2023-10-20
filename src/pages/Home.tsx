import { Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/shared/Hero'
import Featured from '../components/shared/Featured'
import Visual from '../components/shared/Visual'
import Project from '../components/shared/Project'
import ContactMe from '../components/shared/ContactMe'
import Footer from '../components/shared/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home: React.FC = () => {
  return (
    <Stack direction='column'>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Featured />
      <Visual />
      <Project />
      <ContactMe />
      <Footer />
    </Stack>
  )
}

export default Home
