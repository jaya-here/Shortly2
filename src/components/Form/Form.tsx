import Button from "../Utils/Button"
import './Form.css'
import styled from "styled-components"

const FormInput = styled.input`
    height: 2rem;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: small;
    font-weight: 600;
    color:var(--color-netural-2);
    z-index:10;
    border:none;
    width:-webkit-fill-available;

    &::placeholder {
        color:var(--color-netural-1);
    }
`



export default function Form({formik}:{formik:any}) {

  return (
    <form className="url__form" onSubmit={(event)=>
    {
    event.preventDefault()
    formik.handleSubmit()}}>
       <div className="url__input__wrapper">
        <FormInput
        id="currentUrl"
        name="currentUrl"
        type="text"
        placeholder="Shorten a link here..."
        className='url__input'
        value={formik.values.currentUrl}
        onChange={formik.handleChange}></FormInput>
          {formik.errors.currentUrl ? (
         <div className='input__error'>{formik.errors.currentUrl}</div>
       ) : null}
        </div>
      
      
        <Button
        type="submit"
        radius="0.5rem"
        buttonMessage="Shorten it!"
        additionalStyling='formbuttonstyling'
        ></Button>
        <div className="urlf__backgroundImage__wrapper">
            <div
            className="urlf__backgroundImage"></div>
        </div>
    </form>
  )
}
