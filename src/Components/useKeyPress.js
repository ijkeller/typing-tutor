import React, {useState, useEffect} from "react";

// create a custom hook called useKeyPress that receives a callback to be called when a key is pressed down.
const useKeyPress = callback => {
    // Use the state hook to keep track of the key that is pressed
    const [keyPressed, setKeyPressed] = useState();
    // Use the effect hook that doesn't re-render by passing it an empty dependency array as it's second parameter
    useEffect(() => {
        // Create a key down handler that will control when to call the callback function with the pressed key.  Then callback ensures that a single characcter was pressed and not a special character such as "CTRL", "ALT", etc. It also prevents space bar from automatically scrolling down the page
        const downHandler = (e) => {
            const { key } = e;
            if ((key.length === 1 || key === "Backspace")) {
                setKeyPressed(key);
                callback && callback(key);
            }

            if (e.keyCode == 32 && e.target == document.body) {
                // Prevent spaces from scrolling the page
                e.preventDefault();
            }
        };
        // Create a key up handler to reset key pressed state
        const upHandler = () => {
            setKeyPressed(null);
        }
        // Create listeners with their respective handlers
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)

        return () => {
            // Once hook is unmounted remove listeners on keys
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        }
    }, [])
    
    return keyPressed
}

export default useKeyPress;