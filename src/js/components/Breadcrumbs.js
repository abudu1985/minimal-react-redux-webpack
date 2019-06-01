import React from "react";
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

const userNamesById = { '1': 'John' };

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

const routes = [
 // { path: '/users/:userId', breadcrumb: DynamicUserBreadcrumb },
  { path: '/', breadcrumb: 'Custom Example' },
];

const divStyle = {
  color: 'red',
};

// map & render your breadcrumb components however you want.
const Breadcrumbs = ({ breadcrumbs }) => (
  <div>
    {console.log(breadcrumbs)}
    {breadcrumbs.map(({
                        match,
                        breadcrumb,
                       path
                        // other props are available during render, such as `location`
                        // and any props found in your route objects will be passed through too
                      }) => (
      <span key={match.url}>
        <NavLink to={match.url} style={divStyle}>{breadcrumb}{match.path}</NavLink>
      </span>
    ))}
  </div>
);

export default withBreadcrumbs(routes)(Breadcrumbs);