import React, {useState} from 'react';

const Form = (props) => {

    const {colorList, setColorList} = props;
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    
    const addColor = (e) => {
        e.preventDefault();
        setColorList([...colorList, {
            color,
            height,
            width,
        }
        ])
    setColor("");
    setHeight("");
    setWidth("");
    };

    return(
        <div>
            <form onSubmit={addColor}>
                <div>
                    <label htmlFor="color">Color: </label>
                    <input name="color" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="height">Box Height (in px): </label>
                    <input name="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="width">Box Width (in px): </label>
                    <input name="width" type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;