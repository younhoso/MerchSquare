import { useRef } from 'react';
import styled, {css} from "styled-components";
import Button from "../elements/Button";
import MyImage from '/src/assets/img/logo_header.png';

const Hearder = () => {
  const menuMobile = useRef();
  const moHamberger = () => {
    if(menuMobile.current && !menuMobile.current.classList.contains('active')){
      menuMobile.current.classList.add('active');
    } else {
      menuMobile.current.classList.remove('active');
    }
  }

  return (
    <HearderSt>
      <div className="header_inner_MO">
				<nav>
          <div className="menu_mo_inner">
            <a className="logo" href="/"><img src={MyImage} alt="COJAM NFT"/></a>
            <div className="menu_mo">
              <div className="search menu"><a href="#0"><i className="ic-search"></i></a></div>
              <div className="hamberger menu" onClick={moHamberger}><a href="#0"><i className="ic-menu"></i></a></div>
            </div>
          </div>
				
          <div className="menu_mo_hidden" ref={menuMobile}>
            <ul className="">
              <li><a href="#0">Market</a></li>
              <li><a href="#0">Artist</a></li>
              <li><a href="#0">News</a></li>
              <li><a href="#0">About</a></li>
              <li><a href="#0">VR Gallery</a></li>
            </ul>
          </div>
        </nav>
			</div>
      

      <div className="header_inner_PC">
				<nav>
					<a className="logo" href="/"><img src={MyImage} alt="COJAM NFT"/></a>
					<div className="menu_inner">
            <ul className='menu_pc'>
              <li className="menu"><a href="#0">Market</a></li>
              <li className="menu"><a href="#0">Artist</a></li>
              <li className="menu"><a href="#0">News</a></li>
              <li className="menu"><a href="#0">About</a></li>
              <li className="menu"><a href="#0">VR Gallery</a></li>
            </ul>
            <div className="search menu"><a href="#0"><i className="ic-search"></i></a></div>
						<Button color="#fff" fontSize="12px" bgColor="#16aa56" children="CONNECT" />
					</div>
				</nav>
			</div>
    </HearderSt>
  )
};

const HearderSt = styled.header`
  width: 100%;
  border-bottom: 1px solid #EEEEEE;
  background-color: rgba(31,30,28,.9);
  position: fixed;
  top: 0;
  .header_inner_PC {display: none;}
  .header_inner_MO {display: block;}
  .header_inner_MO nav {position: relative;}
  .header_inner_MO nav .menu_mo_inner {height: 70px;display: flex;justify-content: space-between;align-items: center;padding: 0 30px;}
  .header_inner_MO nav .menu_mo_inner .logo {width: 100px;display: block;}
  .header_inner_MO nav .menu_mo {width: 60px; display: flex; justify-content: space-between; align-items: center;}
  .header_inner_MO nav .menu_mo .hamberger a{font-size: 22px;}

  .header_inner_MO nav .menu_mo_hidden { width: 100%; height: 100vh; text-align: center; position: absolute; top: 70px; left: 100%; transition: all 0.15s ease-in-out; background-color: rgba(31,30,28,.9);}
  .header_inner_MO nav .menu_mo_hidden a { display: block; color: #fff; padding: 20px 0; }
  .header_inner_MO nav .menu_mo_hidden.active { left: 0; }

  @media only screen and (min-width: 768px){
    .header_inner_MO {display: none;}
    .header_inner_PC {display: block;}
    .header_inner_PC {max-width: 1320px;height: 70px;line-height: 70px;margin: 0px auto;padding-left: calc(50% - 400px);padding-right: calc(50% - 400px);box-sizing: border-box;}
    .header_inner_PC nav {display: flex;justify-content: space-between;align-items: center;padding: 0 20px;}
    .header_inner_PC nav .menu_pc {}
    .header_inner_PC nav .logo {width: 100px;display: block;}
    .header_inner_PC nav .menu_inner {width: 72%;display: flex;justify-content: center;align-items: center;}
    .header_inner_PC nav .menu_pc {width: 100%;display: flex;justify-content: center;align-items: center;text-align: center;}
    .header_inner_PC nav .menu { width: 100%;}
    .header_inner_PC nav .menu a {width: calc(50% / 2);}
    .header_inner_PC nav .search { width: 70px; text-align: center;}
  }

  @media only screen and (min-width: 1024px){
    .header_inner_PC {
      padding-left: 150px;
      padding-right: 150px;
    }
  }

  ${({theme}) => {
  const {fontSizes, fontWeight, colors} = theme;
  return css `
    .header_inner_MO a {
      font-size: ${fontSizes.font16};
      font-weight: ${fontWeight.semiBold};
      color: ${colors.white};
    }

    .header_inner_PC a {
      font-size: ${fontSizes.font12};
      font-weight: ${fontWeight.semiBold};
      color: ${colors.white};
    }

    @media only screen and (min-width: 768px){
      .header_inner_PC nav .search a{ font-size: ${fontSizes.font16}; }
    }
  `
  }}
`;

export default Hearder;