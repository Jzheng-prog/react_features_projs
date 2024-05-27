
import './App.css'
import Accordian from './components/accordian'
import ImgSlider from './components/image-slider/img-slider'
import LightDark from './components/light-dark-mode/LightDark'
import LoadMore from './components/load-more-data/loadMore'
import QRCodeGenerator from './components/qr-code-generator/QRCodeGenerator'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {

  return (
    <>
      {/* <Accordian/>
      <RandomColor/>
      <StarRating/> */}
      {/* <ImgSlider url = {'https://picsum.photos/v2/list'} limit = {'10'}/> */}
      {/* <LoadMore/> */}
      {/* <QRCodeGenerator/> */}
      <LightDark/>
    </>
  )
}

export default App
