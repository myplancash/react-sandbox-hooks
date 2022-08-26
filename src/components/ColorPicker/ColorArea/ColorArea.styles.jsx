import styled from 'styled-components';

export const ColorAreaContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  background-color: ${({ colorArea }) => colorArea};
`

export const ColorAreaBody = styled.div`
  height: 90px;
	width: 100%;
  max-width: 20em;
  padding: 0 25px;
  display: flex;
	flex: 1 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }
`
