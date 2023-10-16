import './App.css'
import BadgeCollection from './components/BadgeCollection.jsx'
import BannerCollection from './components/BannerCollection.jsx'
import CardCollection from './components/CardCollection.jsx'
import ImageTestimonialCollection from './components/ImageTestimonialCollection'
import TestimonialCollection from './components/TestimonialCollection'
import TooltipCollection from './components/TooltipCollection'
import ToastCollection from './components/ToastCollection'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className='component-container'>
        <BadgeCollection />
        <BannerCollection />
        <CardCollection />
        <ImageTestimonialCollection />
        <TestimonialCollection />
        <TooltipCollection />
        <ToastCollection />
      </div>
    </>
  )
}

export default App
