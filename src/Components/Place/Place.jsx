import React, { useEffect, useState } from 'react';
import Places from '../Places/Places';


const Place = () => {

    const [place, setplace] = useState([])
    useEffect(() => {
        fetch("/place.json")
            .then((res) => res.json())
            .then((data) => setplace(data))
            .catch((err) => console.log("err aree ", err))
    }, [])


    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 mt-3.5">
                Explore Our Top <span className="text-purple-600">Adventure Tours</span>
            </h2>

            <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-5  '>
                {
                    place.map(p => (<Places allpalces={p}></Places>))
                }
            </div>
        </div>
    );
};

export default Place;