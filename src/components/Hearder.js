import { useRef } from 'react';
import styled, {css} from "styled-components";
import Button from "../elements/Button";
import MyImage from '/src/assets/img/logo.png';

const Hearder = () => {
  const personInfo = useRef();
  const moHamberger = () => {
    if(personInfo.current && !personInfo.current.classList.contains('active')){
      personInfo.current.classList.add('active');
    } else {
      personInfo.current.classList.remove('active');
    }
  }

  return (
    <Header>
      <div className="header_inner_MO">
				<nav>
          <div className="menu_mo_inner">
            <a className="logo" href="/"><img src={MyImage} alt="COJAM NFT"/></a>
            <div className="menu_mo">
              <div className="search menu"><a href="#0"><i className="ic-search"></i></a></div>
              <div className="hamberger menu" onClick={moHamberger}><a href="#0"><i className="ic-menu"></i></a></div>
            </div>
          </div>
				
          <div className="menu_mo_hidden" ref={personInfo}>
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
            <ul>
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
    </Header>
  )
};

const Header = styled.header`
  ${({theme}) => {
  const {fontSizes, fontWeight, colors} = theme;
  return css `
    width: 100%;
    border-bottom: 1px solid #EEEEEE;
    background-color: rgba(31,30,28,.9019607843137255);
    position: relative;

    .header_inner_PC {display: none;}
    .header_inner_MO {
      display: block;
      nav {
        position: relative;
        .menu_mo_inner {
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
          .menu_mo {
            width: 60px;
            display: flex;
            justify-content: space-between; 
            a {
              font-size: ${fontSizes.font18};
              font-weight: ${fontWeight.semiBold};
              color: ${colors.white};
            }
          }
          .logo {
            display: block;
            width: 138px;
          }
        }

        .menu_mo_hidden {
          width: 100%;
          text-align: center;
          position: absolute;
          top: 70px;
          left: 100%;
          transition: all 0.2s ease-in-out;
          background-color: #000;

          a {
            display: block;
            color: #fff;
            padding: 20px 0;
          }
        }
        .menu_mo_hidden.active {
          left: 0
        }
      }
    }


    @media only screen and (min-width: 768px){
      .header_inner_MO {display: none;}
      .header_inner_PC {
        max-width: 1320px;
        margin: 0px auto;
        padding: 0 20px;
        box-sizing: border-box;
        display: block;
        nav {
      
        }
      }
      
    }
  `
  }}
`;

export default Hearder;