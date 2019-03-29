import * as React from 'react';
import avatarImg from '@assets/images/img_avatar.svg';
export const HeaderTools: React.FunctionComponent<{}> = () => {

  return (
    <div className="pf-c-page__header-tools">
      <div className="pf-c-toolbar">

      <div className="pf-c-page__header-tools-group pf-m-icons pf-screen-reader">
        <button className="pf-c-button pf-m-plain" aria-label="Alerts">
          <i className="fas fa-bell" aria-hidden="true"></i>
        </button>
        <button className="pf-c-button pf-m-plain" aria-label="Settings">
          <i className="fas fa-cog" aria-hidden="true"></i>
        </button>
      </div>

      <div className="pf-c-page__header-tools-group">

        <div className="pf-c-dropdown">
          <button className="pf-c-dropdown__toggle pf-m-mobile  pf-m-plain" id="dropdown-kebab-right-aligned-1-button" aria-expanded="false" aria-label="Actions">
            <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul className="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="dropdown-kebab-right-aligned-1-button" hidden>
            <li>
              <a className="pf-c-dropdown__menu-item" href="#">Link</a>
            </li>
            <li>
              <button className="pf-c-dropdown__menu-item">Action</button>
            </li>
            <li>
              <a className="pf-c-dropdown__menu-item pf-m-disabled" aria-disabled="true" href="#">Disabled Link</a>
            </li>
            <li>
              <button className="pf-c-dropdown__menu-item" disabled>Disabled Action</button>
            </li>
            <li className="pf-c-dropdown__separator" role="separator"></li>
            <li>
              <a className="pf-c-dropdown__menu-item" href="#">Separated Link</a>
            </li>
          </ul>
        </div>

        <div className="pf-m-user pf-screen-reader">
          <div className="pf-c-dropdown">
            <button className="pf-c-dropdown__toggle pf-m-plain" id="page-layout-default-nav-dropdown-button" aria-expanded="false">
              <span className="pf-c-dropdown__toggle-text">Citizen User</span>
              <i className="fas fa-caret-down pf-c-dropdown__toggle-icon" aria-hidden="true"></i>
            </button>
            <div className="pf-c-dropdown__menu" hidden>
              <span className="pf-c-dropdown__toggle-text">John Smith</span>
            </div>
          </div>
        </div>

      </div>

      <span className="pf-c-avatar" dangerouslySetInnerHTML={{__html: avatarImg}}></span>

      </div>
    </div>
  );
}
