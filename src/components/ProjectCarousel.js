import React, {useState} from 'react'
import { ProjectData } from './ProjectData'
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'

const ProjectCarousel = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length 

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1)
}
const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
}
if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}


    return(
        <section className='slider'>
            <IoMdArrowDropleft className="left-arrow" onClick={prevSlide}/>
            <IoMdArrowDropright className="right-arrow" onClick={nextSlide}/>
            {ProjectData.map((slide, index) => {
                return(
                    <>
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && 
                        (<>
                        <div className='CanvasContainer'>
                        <div className="textOverlay">
                        <h1>{slide.projectName}</h1>
                        <p>{slide.description.map(key=>{ return(<>{key}<br/><br/></>)})}</p>
                        </div>
                        {slide.image}
                        </div>
                        </>
                        )}
                        
                    </div>
                    </>
                )
            })}
        </section>
    )
}

export default ProjectCarousel