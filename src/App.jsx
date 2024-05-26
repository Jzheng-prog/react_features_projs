
import './App.css'
import Accordian from './components/accordian'
import ImgSlider from './components/image-slider/img-slider'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {

  return (
    <>
      {/* <Accordian/>
      <RandomColor/>
      <StarRating/> */}
      <ImgSlider url = {'https://picsum.photos/v2/list'} limit = {'10'}/>
    </>
  )
}

export default App
