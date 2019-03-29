import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';

export class Sidebar extends React.Component {

  outputNavLinks() {
    return routes.map(route => {
      return (
        <li key={route.path}>
          <NavLink to={route.path} className="pf-c-nav__link">{route.label}</NavLink>
        </li>
        // <span>test</span>
      );
    });
  }

  render() {
    return (
      <aside className="pf-c-page__sidebar">
        <nav className="pf-c-nav" id="page-layout-default-nav-primary-nav" aria-label="Primary Nav Default Example">
          <ul className="pf-c-nav__list">
            {this.outputNavLinks()}
          </ul>
        </nav>
      </aside>
    );
  }
}
