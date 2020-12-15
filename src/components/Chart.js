import React from "react";

const Chart = ({music}) => {

    if(!music){
        return(
            <p>Loading Chart List</p>
        )
    }

    return(
        <>
            <h5 className="chart-detail">{music.category.attributes.label}</h5>
            <audio controls src={music.link[1].attributes.href} type="audio/x-m4a"></audio>
        </>
    )
}

export default Chart;