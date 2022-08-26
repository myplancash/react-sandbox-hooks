import {
  ColorContainer,
  ColorName
} from './Color.styles.jsx';

const Color = ({ colorToAdd, changeColor }) => {
  const { name } = colorToAdd;

  return (
    <ColorContainer name={name} onClick={() => changeColor(name)}>
      <ColorName>{name}</ColorName>
    </ColorContainer>
  )
}

export default Color;