
import { Suspense } from "react";
import type { Route } from "./+types/country";


export function links(){
    return [
        {
        rel: "stylesheet", 
        href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", 

        crossoirigin:"",
    }
    ]
}
    


export async function clientLoader({params}: Route.LoaderArgs){
    const contryName = params.countryName
    const res = await fetch(`https://restcountries.com/v3.1/name/${contryName}?fullText=true`)
    const data = await res.json()
    return data
}

export function HydrateFallback() {
    return <p>Loading Game...</p>;
  }
const Country = ({loaderData}: Route.ComponentProps)=>{
    const contryData = {
        name: loaderData[0].name.common || "N/A",
        officialName: loaderData[0].name.official || "N/A",
        region: loaderData[0].region || "N/A",
        subregion: loaderData[0].subregion || "N/A",
        capital: loaderData[0].capital || "N/A",
        population: loaderData[0].population || "N/A",
        flagUrl: loaderData[0].flags.png || "N/A",
    }
    return (
        <div className="p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold my-2">{contryData.name}</h1>
                <p><span className="font-semibold ">Official Name </span>: {contryData.officialName}</p>
                <p><span className="font-semibold">Region </span>: {contryData.region}</p>
                <p><span className="font-semibold">Subregion </span>: {contryData.subregion}</p>
                <p><span className="font-semibold">Capital </span>: {contryData.capital}</p>
                <p><span className="font-semibold">Population </span>: {contryData.population}</p>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <img className=" mr-0 md:mr-48 shadow-2xl w-72 mt-10" src={contryData.flagUrl} alt={contryData.name}/>
            </Suspense>
        </div>
    )
}

export default Country;