
import './App.css'
import Accordian from './components/accordian'
import TabParent from './components/custom-tabs/TabParent'
import GitHubFinder from './components/github-profile-finder/GitHubFinder'
import ImgSlider from './components/image-slider/img-slider'
import LightDark from './components/light-dark-mode/LightDark'
import LoadMore from './components/load-more-data/loadMore'
import ModalParent from './components/modal/ModalParent'
import QRCodeGenerator from './components/qr-code-generator/QRCodeGenerator'
import RandomColor from './components/random-color'
import ScrollIndicator from './components/scroll-indicator/Scroll-Indicator'
import SearchAutoComplete from './components/searchAutoComplet/SearchAutoComplete'
import StarRating from './components/star-rating'
import TicTackToe from './components/tic-tact-toe/TicTackToe'

function App() {

  return (
    <>
      {/* <Accordian/>
      <RandomColor/>
      <StarRating/>
      <LoadMore/>
      <QRCodeGenerator/>
      <LightDark/>
      <ScrollIndicator url ={"https://dummyjson.com/products?limit=100"}/>
      <ImgSlider url = {'https://picsum.photos/v2/list'} limit = {'10'}/>
      <TabParent/>
      <ModalParent/> */}
      {/* <GitHubFinder/> */}
      {/* <SearchAutoComplete/> */}
      <TicTackToe/>
    </>
  )
}

export default App
