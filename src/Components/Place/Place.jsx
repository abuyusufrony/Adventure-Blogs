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
            <div>
                <h2>The total place Section are :{place.length}</h2>
            </div>
            <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  '>
                {
                    place.map(p => (<Places allpalces={p}></Places>))
                }
            </div>
        </div>
    );
};

export default Place;