import React from "react";
import Chart from "./Chart";

const ChartList = ({music, load}) => {
    const musicNode = music.map(music => {
        if(!load){
            return(
                <p>loading songs</p>
            )
        }

        if(load){
            return(
                <Chart music={music} key={music.id.attributes["im:id"]}/>
            )}
    })

    return(
        <div className="music-list">
            {musicNode}
        </div>
    )
}

export default ChartList;