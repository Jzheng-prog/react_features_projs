import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import './styles.css'

const ImgSlider = ({url, limit}) => {
    const [images, setImages] = useState([])
    const [currSlide, setCurrSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);



    async function fetchImages(getUrl){
        try{
            setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();
            if(data){
                setImages(data)
                setLoading(false)
            }
        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }
    function handlePrev(){
        setCurrSlide(currSlide ===0? images.length-1: currSlide-1)
    }
    function handleNext(){
        setCurrSlide(currSlide === images.length -1? 0: currSlide+1)

    }
    useEffect(()=>{
        if(url !== ''){
            fetchImages(url)
        }
    },[url]);

    // useEffect(() => {
    //     if (images.length > 0 && images[0]) {
    //         console.log(images[0].download_url);
    //     }
    // }, [images]);

    
    if(loading){
        return <div>Loading Images! Please wait!</div>
    }

    if(errorMsg !==null){
        return <div>There is an error. {errorMsg}</div>
    }

  return (

    <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrev}/>

        {images.length > 0 && (
        <img key={images[currSlide].id} src={images[currSlide].download_url} className="curr_img" alt={`Slide ${currSlide}`} />
        )}
        
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
      
    </div>
  )
}

export default ImgSlider
