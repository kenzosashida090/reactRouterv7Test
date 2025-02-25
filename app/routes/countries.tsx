import { useMemo, useState } from "react"
import type {Route} from "./+types/country"
import { Link } from "react-router"

let isItInitialState = true
const generateKey = (request: Request) => {
    return `${request.url}`;
  };
  
 export async function clientLoader({request}: Route.ClientLoaderArgs){
     const cacheKey = generateKey(request)
     if(isItInitialState){
        const res = await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json()
        isItInitialState = false
        sessionStorage.setItem(cacheKey, JSON.stringify(data))
        return data
    }
    const cachedData = sessionStorage.getItem(cacheKey)
    if(cachedData){
        return JSON.parse(cachedData)
    }
 }


 const Countries = ({loaderData}: Route.ComponentProps)=>{
    const [search, setSearch] = useState("")
    const [region, setRegion] = useState("")
    const filteredCountries = useMemo(()=> {
        const data = loaderData || [];
        return data.filter((country:any)=> {
            const matchesRegion = !region || country.region.toLowerCase() === region.toLowerCase()   
            const matchesSearch = !search ||   country.name.common.toLowerCase().includes(search.toLowerCase())
           
            return matchesSearch && matchesRegion
           }
               
            
           )
    },[loaderData,search, region]) 
    return (
        <div className="p-6">
                <h1 className="text-2xl font-bold mb-6 text-gray-900" >Countries</h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-blue-500" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search for a country"/>
                <select className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500" onChange={(e)=>setRegion(e.target.value)}>
                    <option value="">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            {filteredCountries.length === 0 ? <div className="text-gray-600">No countries found</div>
            :
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCountries.map((country:any)=>(
                        <li key={country.cca3} className=" bg-white border border-gray-200 p-4 shadow-md rounded-xl hover:shadow-lg ease-out duration-300 transition-all">
                            <Link className="text-2xl font-bold text-blue-500" to={`/countries/${country.name.common}`}>{country.name.common}</Link>
                            <div className="text-gray-600">
                                Region: {country.region} <br/> 
                                Population: {country.population}
                            </div>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
 }


 export default Countries