import React from "react"
import memesData from "../memesData";

function Meme(props){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main className="memeSection">

            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                />
                <button onClick={getMemeImage}>
                    <p>Get a meme &#127912;</p>
                </button>
            </div>


            {meme.randomImage && <img src={meme.randomImage} alt="Randomly-generated meme" className="memeImg"/>}
        </main>
    )
    
}

export default Meme