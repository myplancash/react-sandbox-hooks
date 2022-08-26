import React, { Fragment, useState } from 'react';

import ColorArea from '../ColorArea/ColorArea';
import Color from '../Color/Color';
import InputChangeColor from '../InputChangeColor/InputChangeColor';

import { ColorContainer, Title } from './ColorPicker.styles.jsx';


const ColorPicker = () => {
	const [colorArea, setColorArea ] = useState('#B45865')
	
  // const color = useSelector(selectPickerColor);
  const newColors = [
    {
      id: 1,
      name: '#00A4A6'
    },
    {
      id: 2,
      name: '#E4C3C7'
    },
    {
      id: 3,
      name: '#F7BD81'
    },
  ];

	const changeColor = (hexColor) => {
		setColorArea(hexColor);
    console.log(hexColor)
	}

  return (
    <>
      <Title>Color Picker:</Title>
      <ColorArea colorArea={colorArea} />
      <ColorContainer>
        {newColors.map((colorToAdd) => (
          <Color key={colorToAdd.id} colorToAdd={colorToAdd} changeColor={changeColor} />
        ))}
      </ColorContainer>
      <InputChangeColor />
    </>
  )
}

export default ColorPicker;