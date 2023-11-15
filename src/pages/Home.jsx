import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className="w-full h-screen relative">
        <Canvas className='w full h-screen bg-black'
            camera={{near: 0.1, far:100}}
        >
            <Suspense fallback={<Loader/>}> 
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <hemisphereLight/>
            </Suspense>  


        </Canvas>
    </section>
  )
}

export default Home
