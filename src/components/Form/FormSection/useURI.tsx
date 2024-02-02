import { useQuery } from "@tanstack/react-query";
import { getURI } from "../../../services/uriApi";
import { useState } from "react";

export function useURI() {

    const [urlQuery, setUrlQuery] = useState<string>('')

    const {isPending, data, isError} = useQuery({
        queryKey:["uri", urlQuery],
        queryFn:()=>{return getURI(urlQuery)}
    })

    console.log(data?.data)

   let uri = data?.data?.tiny_url

    return {isPending, uri, isError, setUrlQuery}
}