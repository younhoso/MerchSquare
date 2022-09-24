import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset};

  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  * {
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  img {
    width: 100%;
  }
  button, 
  input,
  textarea {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    background-color: transparent;
    border: none;
    outline: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    @media screen and (max-width: 400px){
      font-size: 14px;
      &::placeholder{
        font-size: 14px;
      }
    }
  }
  textarea {
    resize: none;
  }
  button {
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;