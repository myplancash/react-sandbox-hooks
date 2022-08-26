import styled from 'styled-components';

export const ColorContainer = styled.div`
	cursor: pointer;
  position: relative;
  background-color: ${({name}) => name};
	height: 240px;
  display: flex;
	flex: 1 1 auto;
  flex-flow: row;

	width: 100%;
  max-width: 20em;
  padding: 0 25px;
  display: flex;
	flex: 1 100%;


  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
`

export const ColorName = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
	background-color: white;
	padding: 1.5rem;
	opacity: 0.7;
`
