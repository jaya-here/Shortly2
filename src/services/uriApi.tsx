export async function getURI(url:string) {

    url = url===''?
    "https://www.example.com/my-really-long-link-that-I-need-to-shorten/84378949"
    :url

    try {
        let uri = await fetch('https://api.tinyurl.com/create', {
            method:'POST',
           headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`,
            "Content-Type": "application/json"
           },
           body: JSON.stringify({
            "url": url
           })
        })
        let data = await uri.json()

        return data

    }
    catch (err)
    {
        console.log(err)
        throw new Error("Could not retrieve data.")
    }
}
