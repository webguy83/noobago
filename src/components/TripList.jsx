import { useState } from "react"
import { useFetch } from "../hooks/useFetch";

export default function TripList() {
    const [url, setUrl] = useState("http://localhost:3000/noobs");
    const {data: trips} = useFetch(url);

    return (
        <>
        <h1>
            TripList
        </h1>
        <ul>
            {trips && trips.map(trip => {
                return <li key={trip.id}>{trip.title} - {trip.price}</li>
            })}
        </ul>
        <button onClick={() => setUrl('http://localhost:3000/noobs?loc=canada')}>
            Canada Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/noobs?loc=thailand')}>
            Thailand Trips
        </button>
        </>
    )
}
