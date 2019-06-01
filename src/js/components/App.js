import React from "react";
import List from "./List";
import Form from "./Form";
import Footer from "./Footer";
import { footerContentUA } from '../../services/ua_links';
import { footerContentRU } from '../../services/ru_links';
import Slider from "./Slider";
import Breadcrumbs from "./Breadcrumbs";
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { subscribeToTimer } from '../../api';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      timestamp: 'no timestamp yet',
      err: ''
    };
  }

  componentWillMount() {
    this.setLanguage('ru');
  }

  componentDidMount() {
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp, err
    }));
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

    const {timestamp, err} = this.state;
    return (
      <BrowserRouter>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <Form />
            {
              err ?
                <div>
                  Some error here {err}
                </div>
                :
                <div>
                  This is the timer value: {timestamp}
                </div>
            }
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <List />
          </div>
          {
            /**
             *         <Breadcrumbs />
             <div>
             <div>
             <button  onClick={this.setLanguage.bind(this, 'ua')}>Українська</button>
             <button onClick={this.setLanguage.bind(this, 'ru')}>Русский</button>
             </div>
             </div>
             <Footer footerContent={this.state.content}/>
             <Slider />
             * **/
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
