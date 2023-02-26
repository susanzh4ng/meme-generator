import React from "react"
//import memesData from "../memesData";



function Meme(props){
    const [meme, setMeme] = React.useState({
        topText: "One Does Not Simply",
        bottomText: "Walk Into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random()*allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(meme)
    } 

    return(
        <main className="memeSection">

            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button type="submit" onClick={getMemeImage}>
                    <p>Get a meme &#127912;</p>
                </button>
            </div>

            <div className="meme">
                {meme.randomImage && <img src={meme.randomImage} alt="Randomly-generated meme" className="memeImg"/>}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
    
}

export default Meme