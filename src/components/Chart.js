import React from "react";

const Chart = ({music}) => {

    return(
        <div className="music">
            <p>{music.title.label}</p>
            <audio controls src={music.link[1].attributes.href} type="audio/x-m4a"></audio>
        </div>
    )
}

export default Chart;