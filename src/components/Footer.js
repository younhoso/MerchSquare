import styled, {css} from "styled-components";
import MyImage from '/src/assets/img/logo_footer.png';

const Footer = () => {
  return (
    <FooterSt className="footer">
      <div className="footer_inner">
        <div className="logo_inner">
          <a className="logo" href="/"><img src={MyImage} /></a>
        </div>
        <div className="content">
          <div className="menus centered">
            <ul className="menu-list">
              <li className="menu-item"><a href="#0" target="_blank" rel="noreferrer noopener" className="name">Terms of Service</a></li>
              <li className="menu-item"><a href="#0" target="_blank" rel="noreferrer noopener" className="name">Privacy</a></li>
            </ul>
            <div className="guideline neturals-2 font-weight-600 neturals-1-hover link">
              <a href="#0" target="_blank" rel="noreferrer noopener" className="link">How to use</a>
            </div>
          </div>
          <ul className="icon-group">
            <li className="icon">
              <a className="link" href="#0" rel="noreferrer noopener"><i className="ic-instagram"></i></a>
            </li>
            <li className="icon">
              <a className="link" href="#0" rel="noreferrer noopener"><i className="ic-medium"></i></a>
            </li>
            <li className="icon">
              <a className="link" href="#0" rel="noreferrer noopener"><i className="ic-twitter"></i></a>
            </li>
            <li className="icon">
              <a className="link" href="#0" rel="noreferrer noopener"><i className="ic-facebook"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </FooterSt>
  )
}

const FooterSt = styled.footer`
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  border-top: 1px solid #e1e1e1;
  margin-top: 11.4rem;
  .icon-group .icon a{width: 20px;height: 20px;line-height: 17px;display: inline-block;color: inherit;border: 1px solid;border-radius: 100%;}
  .footer_inner{height: 80px;display: flex;align-items: center;justify-content: space-between;}
  .footer_inner .logo_inner{width: 110px;}
  .footer_inner .menus {display: inline;}
  .footer_inner .menu-list {display: flex;align-items: center;justify-content: center;margin-bottom: 5px;}
  .footer_inner .menu-list .menu-item:nth-child(2):before {color: #9e9e9e;content: "|";padding-right: 10px;padding-left: 10px;}
  .footer_inner .menu-list a {color: #777;font-weight: 400;}
  .footer_inner .icon-group {display: flex;align-items: center;justify-content: space-between;margin-top: 10px;}
  .footer_inner .icon-group .icon {text-align: center;color: #545454;}

  @media only screen and (min-width: 768px){
    padding-left: 150px;
    padding-right: 150px;
    .content {display: flex;align-items: center;justify-content: space-between;}
    .icon-group .icon a{width: 20px;height: 20px;line-height: 18px;}
    .footer_inner .logo_inner {width: 100px;}
    .footer_inner .menus {display: flex;justify-content: space-between;}
    .footer_inner .menus .guideline {margin-right: 1rem;margin-left: 1.5rem;}
    .footer_inner .menus .menu-list {margin-bottom: 0;}
    .footer_inner .icon-group {width: 120px;}
  }

  @media only screen and (min-width: 1024px){
    .footer_inner .content{
      flex: 1 1 auto;
      margin-left: 3rem;
    }
  }

  ${({theme}) => {
    const {fontSizes, fontWeight, colors} = theme;
    return css `
      .footer_inner a {font-size: ${fontSizes.font10};font-weight: ${fontWeight.semiBold};color: ${colors.black};}
      .icon-group .icon a{font-size: ${fontSizes.font10};}

      @media only screen and (min-width: 768px){
        .icon-group .icon a{font-size: ${fontSizes.font11};}
      }

      @media only screen and (min-width: 1024px){
        .menu-item a, .guideline a {font-size: ${fontSizes.font16};font-weight: ${fontWeight.semiBold};color: ${colors.black};}
      }
    `
  }}
`

export default Footer;