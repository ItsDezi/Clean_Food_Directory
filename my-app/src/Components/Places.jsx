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
        setPlace(place);
    }
    return(
        <>
        <article className="rounded-md">
            <div>
                {/* <div ><IoSearchOutline size={18}/></div> */}
                <input className="add-location-form-search-bar" placeholder="123 Blueberry lane" value = {value} onChange={(e) => setValue(e.target.value)} type="text" name="place" id="place"/>
                {/* <div><IoCloseOutline size={18}/></div> */}
            </div>
        </article>
        <article className="max-w-sm">
            {places?.map((items) => {
                return(
                    <div key={items.id} onClick={() => {handleClick(items)}} className="place-div flex items-center justify-start gap-2 py-2 cursor-pointer">
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