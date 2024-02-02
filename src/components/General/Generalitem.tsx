import styled from 'styled-components'
import './Generalitem.css'

const P = styled.p`
    color:var(--color-neutral-1);
    margin-block-start: 0em;
`

export default function Generalitem({item, index}:{item:any, index:number}) {

  let additionalClassname = index === 1 ? "generalItemTop1" : index === 2? "generalItemTop2" : ""

  return (
    <>
    <section className={`generalItem ${index===0?'generalItemTop3rem':'generalItemTop1rem'} ${additionalClassname}`}
    >
        <div className='gi_text_content'>
        <h3>{item.heading}</h3>
        <P>{item.description}</P>
        </div>
        <section className='gi_icon_content'>
            <div className='gi_icon_wrapper'>
                <img
                src={item.icon}
                alt={"stock rise"}
                className='gi_icon'></img>
            </div>
        </section>
        {(index!==2) && <div
         className={`link-strip-desktop
         ${index===1?"link-strip-desktop-top":""}`}></div>}
    </section>
    {(index!==2) && <div className='link-strip-mobile'></div>}
    </>
  )
}
