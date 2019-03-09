import React from "react";
import List from "./List";
import Form from "./Form";
import Footer from "./Footer";
import { footerContentUA } from '../../services/ua_links';
import { footerContentRU } from '../../services/ru_links';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  componentWillMount() {
    this.setLanguage('ru');
  }

  setLanguage(language) {
    if(language === "ru"){
      this.setState({content: footerContentRU});
    }
    if(language === "ua"){
      this.setState({content: footerContentUA});
    }
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <Form />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <List />
        </div>

        <div>
          <div>
            <button  onClick={this.setLanguage.bind(this, 'ua')}>Українська</button>
            <button onClick={this.setLanguage.bind(this, 'ru')}>Русский</button>
          </div>
        </div>
        <Footer footerContent={this.state.content}/>
      </div>
    );
  }
}

export default App;
