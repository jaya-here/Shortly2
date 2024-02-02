import Generalitem from "./Generalitem"
import image1 from '../../assets/icon-brand-recognition.svg'
import image2 from '../../assets/icon-detailed-records.svg'
import image3 from '../../assets/icon-fully-customizable.svg'
import './General.css'


const generalItemContent = [
    {
        icon:image1,
        heading:'Brand Recognition',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit harum eaque a repellendus. Ab sequi velit esse asperiores ex atque.'
    },
    {
        icon:image2,
        heading:'Detailed Records',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit harum eaque a repellendus. Ab sequi velit esse asperiores ex atque.'
    },
    {
        icon:image3,
        heading:'Fully Customizable',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit harum eaque a repellendus. Ab sequi velit esse asperiores ex atque.'
    }
]

export default function General() {
  return (
    <section className="general__item__wrapper">
        {generalItemContent.map((item, index)=>{
            return <Generalitem item={item} index={index}></Generalitem>
        })}
        <div className="general__item__wrapper__bg"></div>
    </section>
  )
}


