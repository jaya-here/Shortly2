import illustrationWorkingImage from '../../assets/illustration-working.svg'
import Button from '../Utils/Button'
import { useEffect, useRef } from 'react'
import './Header.css'
import styled from 'styled-components'

const P = styled.p`
    color:var(--color-neutral-1);
`

function Header() {

  const illustrationRef = useRef<HTMLImageElement | null>(null)

  useEffect(()=>{
    console.log(illustrationRef.current?.offsetHeight)
  }) 

  return (
    <section className='header'>
        <article className='header__image__wrapper'>
            <img
            src={illustrationWorkingImage}
            alt='working-woman-illustration'
            className='header__image'
            ref={illustrationRef}></img>
        </article>
        <article className='header__main__wrapper'>
            <h1>
                More than just shorter links
            </h1>
            <P>
                Build your brand's recognition and get detailed insights on how your links are performing.
            </P>
            <div className='center'>
            <Button
            radius='1.5rem'
            buttonMessage='Get Started'
            additionalStyling={''}></Button>
            </div>
        </article>
  </section>
  )
}

export default Header