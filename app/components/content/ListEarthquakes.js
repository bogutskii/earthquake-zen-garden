import React, {useState} from 'react'
import {NavLink} from "react-router-dom";

function ListEarthquakes(props) {
    const [typeSorting, setTypeSorting] = useState({direction: true, column: 'place'})

    function placeSplit(obj) {
        if (typeSorting.column === 'place') {
            return obj.place.split('km')[0]
        }
        return obj[typeSorting.column]
    }

    const sortList = (title) => {
        if (typeSorting.column === title) {
            setTypeSorting({...typeSorting, direction: !typeSorting.direction})
        } else {
            setTypeSorting({column: title, direction: true})
        }
    }
    return (

        <div>
            <h1 className="title-h">{props.title}</h1>
            <table>
                <tbody>
                <tr>
                    <td className="center-text pointer" onClick={() => sortList('place')}>Title</td>
                    <td className="center-text pointer" onClick={() => sortList('mag')}> Magnitude</td>
                    <td className="center-text pointer" onClick={() => sortList('time')}> Time</td>
                </tr>
                {
                    [...props.features].sort((a, b) => typeSorting.direction ?
                        placeSplit(b.properties) - placeSplit(a.properties)
                        :
                        placeSplit(a.properties) - placeSplit(b.properties)
                    ).map(el =>
                        <tr key={el.id}>
                            <td className="title-h bold"><NavLink to={`/detail/${el.id}`}
                                                                  className="link"> {el.properties.place} </NavLink>
                            </td>
                            <td className="center-text title-h bold">{el.properties.mag} </td>
                            <td className="title-h bold">{getData(el.properties.time)}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListEarthquakes;

export function getData(ms) {
    const dateObject = new Date(ms)
    return dateObject.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    })
}