import './App.css'
import BadgeCollection from './components/BadgeCollection.jsx'
import BannerCollection from './components/BannerCollection.jsx'
import CardCollection from './components/CardCollection.jsx'
import ImageTestimonialCollection from './components/ImageTestimonialCollection'

function App() {

  return (
    <div className='component-container'>
      <BadgeCollection />
      <BannerCollection />
      <CardCollection />
      <ImageTestimonialCollection />
    </div>
  )
}

export default App
