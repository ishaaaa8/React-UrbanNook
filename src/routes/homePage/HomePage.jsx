import './homePage.scss'
import Searchbar from '../../components/searchbar/Searchbar'
export default function homePage() {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1>Find Real Estate & Get Your Dream Place</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi animi consectetur doloribus voluptatem accusamus labore at, corrupti autem minus repellat debitis ipsum laudantium, ipsam sit, maxime possimus dolor. Perferendis, aspernatur.</p>

        <Searchbar/>
    <div className="boxes">
        <div className="box">
            <h1>16+</h1>
            <h2>Years of Experience</h2>
        </div>
        <div className="box">
            <h1>200</h1>
            <h2>Award Gained</h2>
        </div>
        <div className="box">
            <h1>1200+</h1>
            <h2>Property Ready</h2>
        </div>
    </div>
        </div>
        
      </div>
      <div className="imgContainer">
        <img src='/bg.png' alt=''></img>
      </div>
    </div>
  )
}
