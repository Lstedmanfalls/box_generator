import React, {useState} from 'react';

const Box = (props) => {

    const {colorList} = props;

    return(
        <div>
            <div>
                <div style={{display: "flex", flexWrap:"wrap"}}>
                {colorList.map((box, index) => (
                    <div key={index} style={{margin:"20px", width:box.width+"px", height:box.height+"px", display:"flex", backgroundColor:box.color}}>
                    </div>
                ))
                }
                </div>
            </div>
        </div>
    )
}

export default Box;