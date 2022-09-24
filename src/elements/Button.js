import styled, {css} from "styled-components";

const Button = ({width, height, color, bgColor, borderRadius, fontSize, lineHeight, padding, children, onClick}) => {
	const styles = {width, height, color, bgColor, borderRadius, fontSize, lineHeight, padding};

	return (
		<BtnBx {...styles} className="btnBx" onClick={onClick}>{children}</BtnBx>
	);
}

Button.defaultProps = {
	width: "63px",
	height: "33px",
	color : "#fff",
	bgColor : "#000",
	borderRadius: "0.4rem"
}

const BtnBx = styled.button`
	${({theme}) => {
		const {fontWeight} = theme;
		return css `
			width: ${props => props._width};
			height: ${props => props._height};
			font-size: ${props => props._fontSize};
			font-weight: ${fontWeight.regular};
			color: ${props => props._color};
			background-color: ${props => props._bgColor};
			border-radius: ${props => props._borderRadius};
		`
	}}
`

export default Button;