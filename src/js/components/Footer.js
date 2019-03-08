import React, {Component} from 'react';
import style from '../../assets/styles/footer.css';
import { footerContent } from '../../services/ru_links';
import Logo from "./Logo";
import Social from "./Social";


const FooterLinksBlockSingle = (props) => {
  let { chunk } = props;
  return (
    <div>
      <div className="footer-link-block-header">
        <div className="arrow-right"></div>
        <a href={chunk.title.url} className="link-header">{chunk.title.text.toUpperCase()}</a>
      </div>
      {(chunk.subItems && chunk.subItems.length && chunk.subItems.map(({ text: subText, url }, subIndex) => (
        <div key={`subTest-${subIndex}`} className="footer-sublinks">
          <a href={url}>{subText}</a>
        </div>
      )))}
    </div>
  );
};

const FooterLinksBlockDoubled = (props) => {
  const { chunks } = props;
  return (
      <div>
        <FooterLinksBlockSingle chunk={chunks[0]}/>
        <br />
        <FooterLinksBlockSingle chunk={chunks[1]}/>
      </div>
  );
};

function chunkArray(myArray, chunkSize) {
  let arrayLength = myArray.length;
  let tempArray = [];
  for (let index = 0; index < arrayLength; index += chunkSize) {
    let myChunk = myArray.slice(index, index+chunkSize);
    tempArray.push(myChunk);
  }
  return tempArray;
}

const Footer = () => {
  return (
    <div className="App-footer">
      <div className="footer-centered">
        <div className="footer-links">
          {chunkArray(footerContent, 2).map((chunk, index) => (
            <div className="footerLinkCategory" key={`test-${index}`}>
              <FooterLinksBlockDoubled chunks={chunk}/>
            </div>
          ))}

        </div>
        <div className="footer-static-block">
          <Logo />
          <div id="footer-contacts">
            <p>вул.Василя Стуса, 35-37      </p>
            <p>03142, Київ, Україна, а/с 124</p>
            <p>Тел.:(044)450-05-00          </p>
            <p>Факс:(044)452-89-90          </p>
            <p>Email: nrs@sstc.com.ua       </p>
          </div>
          <Social />
        </div>
      </div>
      <div className="footer-centered-confidential">
        <div id="footer-copyright">Copyright &copy; 2019 sstc.com.ua
          <div className="confidential-condition-block">
            <a href="#">Политика Конфиденциальности</a>
            <a href="#">Положения и условия</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

