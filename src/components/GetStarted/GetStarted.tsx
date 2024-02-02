import Button from '../Utils/Button'
import './GetStarted.css'

function GetStarted() {
  return (
    <section className='get-started' id="get-started">
        <h3
        style={{zIndex:'10', position:'relative'}}>Boost your links today</h3>
        <Button
        radius='1.5rem'
        buttonMessage='Get Started'
        additionalStyling='getStartedstyling'></Button>
         <div className="getStarted__backgroundImage__wrapper">
            <div
            className="getStarted__backgroundImage"></div>
        </div>
    </section>
  )
}

export default GetStarted