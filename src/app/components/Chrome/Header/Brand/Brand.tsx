import * as React from 'react';
import { NavLink } from 'react-router-dom';
const navId = 'page-layout-default-nav-primary-nav';
export class Brand extends React.Component {

  toggleNav(): void {
    (() => {
      const mq = window.matchMedia('(min-width: 768px)');
      let page = document.getElementById(navId);
      page = page && page.parentElement;
      if (mq.matches) {
          page && page.classList.remove('pf-m-expanded');
          page && page.classList.toggle('pf-m-collapsed');
      } else {
          page && page.classList.remove('pf-m-collapsed');
          page && page.classList.toggle('pf-m-expanded');
      }
      return false;
    })();
  }

  render() {
    return (
      <div className="pf-c-page__header-brand">
        <div className="pf-c-page__header-brand-toggle">
          <button
            className="pf-c-button pf-m-plain"
            id="nav-toggle"
            aria-label="Global navigation"
            aria-expanded="true"
            aria-controls={navId}
            onClick={() => { this.toggleNav(); }} // tslint:disable-line
          >
            <i className="fas fa-bars" aria-hidden="true" />
          </button>
        </div>
        <NavLink to="/" className="pf-c-page__header-brand-link"><h1>Sample</h1></NavLink>
      </div>
    );
  }
}
