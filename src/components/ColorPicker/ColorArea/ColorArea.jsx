import { ColorAreaContainer, ColorAreaBody } from './ColorArea.styles.jsx'

const ColorArea = ({colorArea}) => {
  return (
    <ColorAreaContainer colorArea={colorArea}>
      <ColorAreaBody>
        <h2>{colorArea}</h2>
      </ColorAreaBody>
    </ColorAreaContainer>
  )
}

export default ColorArea;
