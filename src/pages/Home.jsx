import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"


import  Loader  from "../components/Loader"

import Island from "../models/Island"


const Home = () => {
    const adjustIslandForScreenSize =()=>{
        let screenScale = null
        let screenPosition= [0,-6.5,-43]
        let rotation =[0.1,4.7,0]

        
        if(window.innerWidth < 768){
            screenScale=[0.9,0.9,0.9]
        }
        else{
            screenScale=[0.9,0.9,0.9]

        }
        return [screenScale,screenPosition,rotation]
    }

    const [islandScale, islandPosition,islandRotation] = adjustIslandForScreenSize()

    return (
        <section className="w-full h-screen relative">
            <Canvas className='w full h-screen bg-transparent'
                camera={{near: 0.1, far:100}}
            >
                <Suspense fallback={<Loader/>}> 
                    <directionalLight position ={[2,0,2]} intensity={1}/>
                    <ambientLight position ={[2,0,2]} intensity={1}/>
                    <pointLight intensity={2}/>
                    {/* <spotLight position ={[2,0,2]} intensity={1}/> */}
                    <hemisphereLight position ={[2,0,2]} intensity={1}/>
 
                    <Island position ={islandPosition} scale ={islandScale} rotation={islandRotation}/>
                </Suspense>  


            </Canvas>
        </section>
    )
}

export default Home
