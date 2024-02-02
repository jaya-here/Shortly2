import image1 from '../../assets/icon-facebook.svg'
import image2 from '../../assets/icon-twitter.svg'
import image3 from '../../assets/icon-pinterest.svg'
import image4 from '../../assets/icon-instagram.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
       
       <h3 className='footer-heading'>Shortly</h3>

       <section className='footer-features'>
        <h5 className='footer-sub-heading'>Features</h5>
        <p className='footer-sub-content'>Link Shortening</p>
        <p className='footer-sub-content'>Branded links</p>
        <p className='footer-sub-content'>Analytics</p>
        </section>

        <section>
        <h5 className='footer-sub-heading'>Resources</h5>
        <p className='footer-sub-content'>Blog</p>
        <p className='footer-sub-content'>Developers</p>
        <p className='footer-sub-content'>Support</p>
        </section>

        <section>
        <h5 className='footer-sub-heading'>Company</h5>
        <p className='footer-sub-content'>About</p>
        <p className='footer-sub-content'>Our team</p>
        <p className='footer-sub-content'>Careers</p>
        <p className='footer-sub-content'>Contact</p>
        </section>

        <section className='footer-share-links'>
        <img src={image1} alt='facebook' className='image'></img>
        <img src={image2} alt='twitter' className='image'></img>
        <img src={image3} alt='pinterest' className='image'></img>
        <img src={image4} alt='instagram' className='image'></img>
        </section>
    </footer>
  )
}

export default Footer

/*


*/