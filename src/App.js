import React from 'react';
import Helmet from "react-helmet";
import {Switch, Route} from 'react-router-dom';
import Homepage from "./components/Homepage";

function App () {
  return (
      <div>
          <Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
              titleTemplate="%s | React App"
              titleAttributes={{itemprop: "name", lang: "en"}}
              meta={[
                  {name: "description", content: "Server side rendering example"},
                  {name: "viewport", content: "width=device-width, initial-scale=1"},
              ]}
          />
          <Switch>
              <Route exact path='/' component={Homepage}/>
          </Switch>
      </div>
  );
}

export default App
