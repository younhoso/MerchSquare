import styled, {css} from "styled-components";
import Footer from "../components/Footer";
import Hearder from "../components/Hearder";
import {apis} from '../api';
import { useState, useEffect } from "react";
import Button from "../elements/Button";


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
                      <h2 class="title">Authentification</h2>
                      <div class="auth-infos">
                        <div class="info">
                          <span class="label">ID#</span>
                          <div class="row">
                            <button type="button" aria-describedby="copy">202</button>
                            <div class="arrow-box-wrapper">
                              <span class="arrow-box">Copy</span>
                            </div>
                          </div>
                        </div>
                        <div class="info">
                          <div class="label">Contract</div>
                          <div class="text">0xF9480a8356f45fA7c0965300Fd133a88c7bD0095</div>
                        </div>
                      </div>
                      <div class="auth-links">
                        <a href="#0" target="_blank" class="scan-link">
                          <span class="text">View on klaytnscope</span>
                        </a>
                        <a href="#0" target="_blank" class="align-center">
                          <span class="text">View on Opensea</span>
                        </a>
                      </div>
                      <Button width="49%;" height="64px" color="#fff" fontSize="12px" bgColor="#16aa56" children="Buy now" />
                      <Button width="49%;" height="64px" color="#16aa56" fontSize="12px" bgColor="rgba(22,170,86,.1)" children="Wish List" />
                    </div>
                  </section>
                  <section class="item-history">
                    <h2 class="">History</h2>
                    <div class="item">
                      <div class="history-list">
                        <div class="row">
                          <div class="flexible-box">Event</div>
                          <div class="flexible-box">Price</div>
                          <div class="flexible-box">From</div>
                          <div class="flexible-box">To</div>
                          <div class="flexible-box">Date</div>
                        </div>
                        <div class="col">
                          <div class="text-left">
                            <div class="flexible-box">Minted</div>
                            <div class="flexible-box">
                              <img class="link" />  
                            </div>
                            <div class="flexible-box">000000</div>
                            <div class="flexible-box">1407a7</div>
                            <div class="flexible-box"><span>2022-08-15</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="card-list">
                    <h2 class="title">Other Items from the Artist</h2>
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
  .artImg { padding: 1.8rem; display: flex; align-items: center; justify-content: center;}
  .artImg a {width: 364px;height: 364px;}
  .artInfo {margin-top: 9rem;}
  .artInfo .title { line-height: 1.1; font-size: 3.5rem;}
  .artInfo .detailInfos { padding-left: 2.5rem; padding-right: 2.5rem;}
  .artInfo .description {margin-top: 30px;}
  .artInfo .infos{margin-top:20px;}
  .artInfo .info {margin-top:10px;}
  .artInfo .artistInfo {padding-top: 3.6rem; border-top: 1px solid #e1e1e1; margin-top: 3.6rem;}
  .artInfo .profileWaper{display:flex;align-items: center;}
  .artInfo .profile {width: 50px;height: 50px; border-radius:50%;}
  .artInfo .profileWaper .profile_txt {margin-left: 20px;}
  .artInfo .profileWaper .profile_txt .name_2 {margin-top: 10px; }
  .artAuth .authWrapper {padding-left: 2.5rem;padding-right: 2.5rem;}
  .artAuth .authWrapper .auth-infos{}
  

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
    `;
  }}
`

export default Detail;