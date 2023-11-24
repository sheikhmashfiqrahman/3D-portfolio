// import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
// import Navbar from './components/Navbar'
// import{Home,Contact,About,Project} from './pages'

// const App=()=>{
//     return (
//     <main className= 'bg-slate-300/20'>
//         <Router>
//             <Navbar/>
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/about" element={<About/>} />
//                 <Route path="/projects" element={<Project/>}/>
//                 <Route path="/contact" element={<Contact/>}/>
//             </Routes>
//         </Router>

//     </main>
//     )
// }

// export default App

import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollControls, Scroll} from "@react-three/drei"

 
function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages ={4} damping = {0.1}> 
        <Experience />
        <Scroll html> 
            <Interface/>
      
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;






