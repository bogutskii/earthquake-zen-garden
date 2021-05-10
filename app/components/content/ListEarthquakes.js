import React from 'react'
import {NavLink} from "react-router-dom";

function ListEarthquakes(props) {
    return (
        <div>
            <h1 className="title-h">{props.title}</h1>
            <table>
                <tbody>
                <tr>
                    <td className="center-text">Title</td>
                    <td className="center-text">Magnitude</td>
                    <td className="center-text">Time</td>
                </tr>
                {[...props.features].sort((a, b) => b.properties.mag - a.properties.mag).map(el => <tr key={el.id}>
                    <td className="title-h bold"><NavLink to={`/detail/${el.id}`}
                                                          className="link"> {el.properties.place} </NavLink></td>
                    <td className="center-text title-h bold">{el.properties.mag}   </td>
                    <td className="title-h bold">{getData(el.properties.time)}   </td>
                </tr>)}
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