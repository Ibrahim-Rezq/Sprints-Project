import React, { useState, useEffect } from 'react';

const ColorChange = ({ handleColorChange, colorArr }) => {
  const [colorsArr, setColorsArr] = useState([...colorArr]);
  const changeValue = (e, colorIndex) => {
    const tempColorArr = colorsArr.map((color, index) => {
      if (colorIndex === index) return e.target.value;
      else return color;
    });
    setColorsArr(tempColorArr);
    handleColorChange(tempColorArr);
  };
  const addColor = () => {
    if (colorsArr.length < 5) {
      setColorsArr([...colorsArr, '#ffffff']);
    }
  };
  const remColor = () => {
    const temp = [...colorsArr];
    temp.pop();
    if (colorsArr.length > 1) {
      setColorsArr(temp);
    }
  };

  return (
    <div>
      <label className='form-label' htmlFor='formProductDescription'>
        Product Colors
      </label>
      <div className='input-group'>
        <button class='btn btn-outline-secondary' onClick={remColor}>
          -
        </button>
        {colorsArr &&
          colorsArr.map((color, index) => {
            return (
              <input
                className='form-control form-control-color'
                type='color'
                defaultValue={color}
                onChange={(e) => {
                  changeValue(e, index);
                }}
              />
            );
          })}
        <button class='btn btn-outline-secondary' onClick={addColor}>
          +
        </button>
      </div>
      <p className='form-text'>Max 5 Colors Min 1 Color</p>
    </div>
  );
};

export default ColorChange;
