import React from 'react'

const Window = () => {
    const [show, setShow] = React.useState(true)
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    function getShow() {
        setShow(prevShow => !prevShow)
    }
  return (
    <div className="Window">
        <button onClick={getShow}>Toggle WindowTracker</button>
        {show && <h1>Window width: {windowWidth}</h1>}
    </div>
  )
}

export default Window