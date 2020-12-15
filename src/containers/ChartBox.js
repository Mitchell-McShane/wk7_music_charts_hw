import React, {useState, useEffect} from "react";
import ChartList from "../components/ChartList";

const ChartBox = () => {

    const [music, setMusic] = useState([]);
    const [load, setLoad] = useState([false]);

    useEffect(() =>{
        getMusic()
    }, [])

    const getMusic = () => {
        console.log("loading music charts");

        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((res) => res.json())
        .then((data => setMusic(data.feed.entry)))
        .then(setLoad(true))
    }

    return(
        <>

            <h1>UK top 20 Songs</h1>
            <ChartList music={music} load={load}/>
        </>
    )
}

export default ChartBox;