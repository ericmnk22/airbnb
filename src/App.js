import react from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import data from './components/data';


export default function App(){
    const projectData = data.map((item) => {
        return <Card item={item}/>
    })
    return(
        <div>
            <Navbar />
            <Hero />
            {projectData}
        </div>
    )
}