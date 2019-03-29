import * as React from 'react';
import { Container } from '@app/components/Container/Container';
export class Dashboard extends React.Component {

  state = {
    searchValue: ''
  };

  handleSearchInputChange = (value: any) => {
    this.setState({
      searchValue: value
    });
  }

  public render() {
    return (
      <Container>
        <div className="pf-l-gallery pf-m-gutter">

          <div className="pf-l-gallery__item">
            <div className="pf-c-card">
              <div className="pf-c-card__body">
                <span>One</span>
              </div>
            </div>
          </div>

          <div className="pf-l-gallery__item">
            <div className="pf-c-card">
              <div className="pf-c-card__body">
                Two
              </div>
            </div>
          </div>

          <div className="pf-l-gallery__item">
            <div className="pf-c-card">
              <div className="pf-c-card__body">
                Three
              </div>
            </div>
          </div>

          <div className="pf-l-gallery__item">
            <div className="pf-c-card">
              <div className="pf-c-card__body">
                Four
              </div>
            </div>
          </div>

        </div>
      </Container>
    );
  }

}
