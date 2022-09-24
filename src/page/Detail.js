import styled, {css} from "styled-components";
import Footer from "../components/Footer";
import Hearder from "../components/Hearder";
import {apis} from '../api';
import { useState, useEffect } from "react";
import Button from "../elements/Button";
import klaytnscope from '/src/assets/img/klaytnscope.svg';
import opensea from '/src/assets/img/Opensea.svg';
import ct from '/src/assets/img/ct.svg';


const Detail = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handlerLode = async () => {
    try{
      setLoadingError(null);
      setIsLoading(true);
      const result = await apis.detail();
      console.log(result)
      const {description, image_url, created_date, name} = result.data.collection;
      const customData = [{
        description,
        image_url,
        created_date,
        name
      }]
      setItems(customData);
    } catch(error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handlerLode();
  },[])

  return (
    <>
      <Hearder/>
      <DetailPage>
        <div className="img_contens">
          {items && items.map((item, idx) => {
            return(
              <div key={idx} className="artDetail">
                <section className="artImg">
                  <a href="#0"><img src={item.image_url} /></a>
                </section>
                <section className="artInfo">
                  <article className="detailInfos">
                    <div className="detail_left">
                      <h2 className="title">Mechanic in Wonderland by Park Jong Hee</h2>
                      <div className="description">Mechanic in Woderland, Watercolor on Korean Paper</div>
                      <div className="infos">
                        <div className="info">
                          <span className="label">Created year: </span>
                          <span className="text">2022</span>
                        </div>
                        <div className="info">
                          <span className="label">Edition: </span>
                          <span className="text">1/1</span>
                        </div>
                      </div>

                      <div className="artistInfo">
                        <div className="profileWaper">
                            <img className="profile" src="https://cojamcorknft.s3.ap-northeast-2.amazonaws.com/artist/parkjonghee/profile-photo-1660305939700.webp" alt="profile" />
                            <div className="profile_txt">
                              <div className="name">Park Jong Hee</div>
                              <div className="name_2">parkjonghee</div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="detail_right"></div>
                  </article>
                </section>
                <section className="artAuth">
                  <div className="authWrapper">
                    <h2 className="title">Authentification</h2>
                    <div className="auth-infos">
                      <div className="info">
                        <span className="label">ID#</span>
                        <div className="row">
                          <span type="button" aria-describedby="copy">202</span>
                        </div>
                      </div>
                      <div>
                        <div className="label">Contract</div>
                        <div className="text">0xF9480a8356f45fA7c0965300Fd133a88c7bD0095</div>
                      </div>
                    </div>
                    <div className="authLinks">
                      <a href="#0" target="_blank" className="scanLink">
                        <span className="authLinks_img"><img src={klaytnscope} /></span>
                        <span className="text">View on klaytnscope</span>
                      </a>
                      <a href="#0" target="_blank" className="align-center">
                        <span className="opensea_img"><img src={opensea} /></span>
                        <span className="text">View on Opensea</span>
                      </a>
                    </div>
                    <div className="price-container">
                      <div>
                        <a href="#0" className="price-content">
                          <span className="ct_img"><img src={ct} /></span>
                          <div className="price-main">
                            <div>$143.93</div>
                            <div>62,000 CT</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="buy-btn-warpper">
                      <Button width="49%;" height="54px" color="#fff" fontSize="12px" bgColor="#16aa56" children="Buy now" />
                      <Button width="49%;" height="54px" color="#16aa56" fontSize="12px" bgColor="rgba(22,170,86,.1)" children="Wish List" />
                    </div>
                  </div>
                </section>
                <section className="item-history">
                  <h2 className="title">History</h2>
                  <div className="item">
                    <div className="history-list">
                      <div className="row">
                        <div className="flexible-box">Event</div>
                        <div className="flexible-box">Price</div>
                        <div className="flexible-box">From</div>
                        <div className="flexible-box">To</div>
                        <div className="flexible-box">Date</div>
                      </div>
                      <div className="col">
                        <div className="text-left">
                          <div className="flexible-box">Minted</div>
                          <div className="flexible-box">
                            <img className="link" />  
                          </div>
                          <div className="flexible-box">000000</div>
                          <div className="flexible-box">1407a7</div>
                          <div className="flexible-box"><span>2022-08-15</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card-list">
                  <h2 className="title">Other Items from the Artist</h2>
                </section>
              </div>
            );
          })}
          {isLoading && <div>로딩중</div>}
          {loadingError?.message && <span>{loadingError.message}</span>}
        </div>
      </DetailPage>
      <Footer/>
    </>
  )
}

const DetailPage = styled.div`
  padding-top: 70px;
  .artImg { padding: 1.8rem; display: flex; align-items: center; justify-content: center;}
  .artImg a {width: 314px;height: 314px;}
  .artInfo {margin-top: 9rem;}
  .artInfo .title { line-height: 1.1; font-size: 3.5rem;}
  .artInfo .detailInfos { padding-left: 20px; padding-right: 20px;}
  .artInfo .description {margin-top: 30px;}
  .artInfo .infos{margin-top:20px;}
  .artInfo .info {margin-top:10px;}
  .artInfo .artistInfo {padding-top: 3.6rem; border-top: 1px solid #e1e1e1; margin-top: 3.6rem;}
  .artInfo .profileWaper{display:flex;align-items: center;}
  .artInfo .profile {width: 50px;height: 50px; border-radius:50%;}
  .artInfo .profileWaper .profile_txt {margin-left: 20px;}
  .artInfo .profileWaper .profile_txt .name_2 {margin-top: 10px; }
  .artAuth {padding-left: 20px;padding-right: 20px;margin-top: 120px;}
  .artAuth .authWrapper {padding: 24px; border: 1px solid #e1e1e1; border-radius: 24px;}
  .artAuth .authWrapper .auth-infos .info{margin-top: 37px;}
  .artAuth .authWrapper .auth-infos .info .row {margin-top: 10px;}
  .artAuth .authWrapper .auth-infos .text {margin-top: 10px;}
  .artAuth .authWrapper .label{display:block; margin-top: 10px;}
  .artAuth .authWrapper .authLinks{ display: flex; flex-direction: column; margin-top: 32px;}
  .artAuth .authWrapper .authLinks .text{margin-left: 10px;}
  .artAuth .authWrapper .authLinks .scanLink {margin-bottom: 10px;}
  .artAuth .authWrapper .authLinks_img {width: 38px;display: inline-block;}
  .artAuth .authWrapper .opensea_img {width: 38px; display: inline-block;}
  .artAuth .authWrapper .price-container {margin-top: 32px; padding-top:30px; border-top: 1px solid #e1e1e1;}
  .artAuth .authWrapper .ct_img {width: 38px; display: inline-block;}
  .artAuth .authWrapper .price-container .price-content {display: flex; align-items: center;}
  .artAuth .authWrapper .price-container .price-content .price-main{margin-left:10px;}
  .artAuth .authWrapper .buy-btn-warpper{display: flex;justify-content: space-between; margin-top:20px;}
  .item-history {}
  .item-history .title{}
  

  @media only screen and (min-width: 768px){
    .artDetail .artImg a{width: 600px;height: 600px;}
  }

  ${({theme}) => {
    const {colors, fontWeight, fontSizes} = theme;
    return css`
      .artDetail .artImg{background-color: ${colors.grayF4};}
      .artInfo .title {font-weight: ${fontWeight.semiBold};}
      .artInfo .description {font-size: ${fontSizes.font12};}
      .artInfo .info {font-size: ${fontSizes.font12};}
      .artInfo .profileWaper .profile_txt {font-size: ${fontSizes.font12};}
      .artInfo .profileWaper .profile_txt .name_2 {color: ${colors.gray9e}}
      .artAuth .authWrapper .title{font-size: ${fontSizes.font18}; font-weight: ${fontWeight.semiBold}}
      .artAuth .authWrapper .auth-infos{font-size: ${fontSizes.font12};}
      .artAuth .authWrapper .label{font-weight: ${fontWeight.semiBold};}
      .artAuth .authWrapper .info .arrow-box{font-weight: ${fontWeight.semiBold};}
      .artAuth .authWrapper .authLinks .text {font-size: ${fontSizes.font12}; font-weight: ${fontWeight.semiBold};}
      .artAuth .authWrapper .price-container .price-content .price-main div:nth-child(1){color: ${colors.gray9e}}
      .artAuth .authWrapper .price-container .price-content .price-main div{font-size: ${fontSizes.font10};}
      .item-history .title{font-size: ${fontSizes.font28};}
    `;
  }}
`

export default Detail;