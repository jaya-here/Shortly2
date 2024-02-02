import styled from "styled-components"

const ButtonElement = styled.button<{radius?:string}>`
  border-radius: ${(props)=>props.radius};
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--color-primary-1);
  cursor: pointer;
  transition: border-color 0.25s;
  color:#FFF;
  display:block;
  position:relative;

&:hover {
  border-color: white;
}

&:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`

export default function Button (
  {buttonMessage,
    radius, 
    additionalStyling,
   type,
  onClick}:
    {
    buttonMessage:string, 
    radius:string
    additionalStyling:any,
    type?:"submit" | "button" | "reset",
    onClick?:()=>void
    }) {
  
    let typeVal = type ? type : 'button'

  return (
    <ButtonElement 
    radius={radius}
    className={`${additionalStyling}`}
    type={typeVal}
    onClick={onClick}>{buttonMessage}</ButtonElement>
  )
}
