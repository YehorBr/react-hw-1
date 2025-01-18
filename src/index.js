import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// Д/З №1

const name = 'Yehor'

const title = <h1>{name}</h1>
const greeting = <p>Ласкаво просимо до нашого сайту!</p>
const imgSource = 'https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png'

const image = <img src={imgSource} alt='apple' width="500"/>

const favoriteSiteObj = {
  siteName: "Google",
  url: "https://www.google.com/"
}

const favoriteSite = <a href={favoriteSiteObj.url}>{favoriteSiteObj.siteName}</a>

const num1 = 4;
const num2 = 2;
const sum = num1+num2

const resultOfNum = <p>Сума {num1} та {num2} дорівнює {sum}</p>

const arrOfColors = ["Червоний", "Синій", "Зелений"]


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {title}
  {greeting}
  {image}
  {favoriteSite}
  {resultOfNum}
  {<ul>
      {arrOfColors.map((color, index)=>{
        return <li key={index}>
          <p>{color}</p>
        </li>
      })}
    </ul>
}
{/* 2 */}
  <App />
  </>
);
