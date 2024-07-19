import './Comps.css'
import Projects from './Projects'

export default function Portfolio(){
    return (
        <>
            <div className = "AboutMe">
                <h1>Hi. I'm Mark Nacionales</h1>
                <p>I am a passionate computer science student at Mapúa Malayan Colleges Laguna, where I am diving deep into the world of technology and innovation. My academic journey is driven by a keen interest in solving complex problems through coding and software development. Alongside my studies, I enjoy exploring emerging technologies and contributing to projects that merge technical expertise with practical solutions.</p>
            </div>
            <div className='ProjectsSection'>
                <Projects />
            </div>
        </>
    )
}