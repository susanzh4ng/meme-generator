import React from 'react'

const SWData = () => {
    const [swData, setswData] = React.useState({})
    const [count, setCount] = React.useState(1)
    console.log("Component rendered")
    React.useEffect(() => {
        console.log("Effect ran")
            fetch(`http://swapi.dev/api/planets/${count}`)
                .then(res => res.json())
                .then(data => setswData(data))
    }, [count])
    return (
        <div className="SWDatat">
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(swData, null, 2)}</pre>
        </div>
    )
}

export default SWData