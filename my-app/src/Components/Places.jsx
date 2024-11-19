/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-require-imports */
import {useState, useEffect, useContext} from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { FormContext } from '../Contexts/FormContext';

// require("dotenv").config();
function Places ({setPlace}) {
    const { data, updateData } = useContext(FormContext); // Access context data and update function
    const ting = `${process.env.REACT_APP_MAP_BOX_TOKEN}`;
    const [places, setPlaces] = useState([]);

    const [value, setValue] = useState("");
    useEffect(() => {
        //e.preventDefault();
        getPlaces()
    }, [value])
    const getPlaces = async () => {
        const promise = await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + value +'.json?access_token=' + ting)
        const data = await promise.json();
        setPlaces(data.features);
        //console.log(data.features);
    }
    const handleClick = (place) => {
        //console.log("BOOP",place.geometry.coordinates);
        //console.log("break", place)
        setPlace(place);
        // updateData({ 
        //     latitude: place.geometry.coordinates[0],
        //     longitude: place.geometry.coordinates[1]
        //    });
    }
    return(
        <>
        <article className="rounded-md">
            <div className="flex items-center justify-center w-full px-2 rounded-md bg-white">
                <div ><IoSearchOutline size={18}/></div>
                <input className="px-4 py-2 outline-none w-full" placeholder="Enter endpoint" value = {value} onChange={(e) => setValue(e.target.value)} type="text" name="place" id="place"/>
                <div><IoCloseOutline size={18}/></div>
            </div>
        </article>
        <article className="max-w-sm">
            {places?.map((items) => {
                return(
                    <div key={items.id} onClick={() => {handleClick(items)}} className="flex items-center justify-start gap-2 bg-white py-2 hover:bg-gray-200 cursor-pointer">
                        <h4 className=" text-cut text=[0.9rem] font-semibold">{items.text}</h4>
                        <p className=" text-cut text-[0.8rem] text-gray-500">{items.place_name}</p>
                    </div>
                )
            })}
        </article>
        </>
    );
}
export default Places;