import React from 'react'
import ListEarthquakes from "./ListEarthquakes"
import data from '../../data'

function Content() {
    const dataInfo = data()
    return (
        <div className="content">
            <ListEarthquakes features={dataInfo.data.features} title={dataInfo.data.metadata.title}/>
        </div>
    )
}

export default Content;