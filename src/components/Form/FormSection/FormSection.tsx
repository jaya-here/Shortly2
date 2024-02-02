import Form from "../Form"
import { useState } from "react"
import URLList from "../URLList/URLList"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useURI } from "./useURI"
import { useEffect } from "react"
import './FormSection.css'

type URLset = {
    url:string,
    uri:string
}

type URLsetArr = URLset[] 

export default function FormSection() {

  const [urls, setUrls] = useState<URLsetArr>([])

  const {isPending, uri, isError, setUrlQuery} = useURI()

  const [currentUrl, setCurrentUrl] = useState('')

  const formik = useFormik({
    initialValues: {
        currentUrl:""
    },
    validationSchema:Yup.object({
        currentUrl:Yup.string().required('Please add a link')
    }),
    onSubmit:(values, actions)=>{
        
        setUrlQuery(values.currentUrl)
        setCurrentUrl(values.currentUrl)
        actions.resetForm({
          values:{currentUrl:""
        }
        }) 

    }
  })

  useEffect(()=>{

    if (!isPending && currentUrl!=='')
    {
      setUrls((prev)=>[{url:currentUrl,uri:uri},...prev])
    }

  },[isPending,uri,isError])
  
  

  console.log(uri)

  return (
    <div className="form-section">
    <Form formik={formik}></Form>
    <div>
    {urls.map((url)=><URLList url={url.url} uri={url.uri}></URLList>)}
    </div>
    </div>
  )
}
