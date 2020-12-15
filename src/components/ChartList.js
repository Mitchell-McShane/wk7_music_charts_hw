import React from "react";
import Chart from "./Chart";

const ChartList = ({music}) => {
    if(!music){
        return(
            <h1>Loading Top 20</h1>
        )
    }

    return(
        <div>
            {music.map((music, index) => {
                return(
                    <div>
                        <li key={index}>{index + 1}. {music.title.label} {music.image}</li>
                        <Chart music={music}></Chart>
                    </div>
                )
            })}
        </div>
    )
};


export default ChartList;