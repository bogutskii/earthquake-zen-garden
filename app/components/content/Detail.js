import React from 'react'
import {getData} from "./ListEarthquakes";
import data from '../../data'

function Detail(props) {
    const dataInfo = data().data.features
    return (
        <div>
            {dataInfo.map(el => el.id === props.match.params.id ?
                <div key={el.id}>
                    <div className="content">
                        <table>
                            <tbody>
                            <tr>
                                <td colSpan="2">
                                    <h2 className="title-h center-text">{el.properties.title}</h2>
                                </td>
                            </tr>
                            <tr>
                                <td className="title-h td-nowrap bold">Title</td>
                                <td className="header-title bold">{el.properties.title}</td>
                            </tr>
                            <tr>
                                <td className="title-h td-nowrap bold">Magnitude</td>
                                <td className="header-title bold">{el.properties.mag}</td>
                            </tr>
                            <tr>
                                <td className="title-h td-nowrap bold">Time</td>
                                <td className="header-title bold">{getData(el.properties.time)}</td>
                            </tr>
                            <tr>
                                <td className="title-h td-nowrap bold">Status</td>
                                <td className="header-title bold">{el.properties.status}</td>
                            </tr>
                            <tr>
                                <td className="title-h td-nowrap bold">Tsunami</td>
                                <td className="header-title bold">{el.properties.tsunami}</td>
                            </tr>
                            <tr>
                                <td className="title-h td-nowrap bold">Type</td>
                                <td className="header-title bold">{el.properties.type}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                : '')}
        </div>
    )
}

export default Detail;