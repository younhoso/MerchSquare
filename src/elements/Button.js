import styled, {css} from "styled-components";

const Button = ({width, height, color, bgColor, borderRadius, fontSize, lineHeight, padding, children, onClick}) => {
	const styles = {width, height, color, bgColor, borderRadius, fontSize, lineHeight, padding};

	return (
		<BtnBx {...styles} className="btnBx" onClick={onClick}>{children}</BtnBx>
	);
}

Button.defaultProps = {
	width: "auto",
	height: "33px",
	color : "#fff",
	bgColor : "#000",
	borderRadius: "0.4rem",
	padding: "0 0.9rem",
}

const BtnBx = styled.button`
	${({theme}) => {
		const {fontWeight} = theme;
		return css `
			width: ${props => props.width};
			height: ${props => props.height};
			font-size: ${props => props.fontSize};
			font-weight: ${fontWeight.regular};
			color: ${props => props.color};
			background-color: ${props => props.bgColor};
			border-radius: ${props => props.borderRadius};
			padding: ${props => props.padding}
		`
	}}
`

export default Button;