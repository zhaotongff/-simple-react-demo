import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/*import Home from './Home';
var {
    Router,
    Route,
    IndexRoute,
    IndexLink,
    Link,
    hashHistory

}=ReactRouter;*/

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ReactRouter.Router history={ReactRouter.hashHistory}>
          <ReactRouter.Route path="/" component={App}/>
           <ReactRouter.IndexRoute component={Home}></ReactRouter.IndexRoute>
      </ReactRouter.Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});*/
