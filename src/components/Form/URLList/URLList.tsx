import Button from "../../Utils/Button";
import './URLList.css'

export default function URLList({url,uri}:{url:string,uri:string}) {

  function handleClick() {
    navigator.clipboard.writeText(uri)
  }

  return (
    
        <div className="URI__item ">
            <p className="URL ">{url}</p>
            <div className="line"></div>
            <p className="URI ">{uri}</p>
         
            <Button
            radius="0.5rem"
            buttonMessage="Copy"
            additionalStyling={"copy-button-style"}
            onClick={handleClick}></Button>
        </div>
    
  )
}
