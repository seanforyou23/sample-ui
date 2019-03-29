import * as React from 'react';
// import { SearchForm } from '@app/components/search/searchForm.component';
// import { ProgressMeter } from '@app/components/progress/progressbar.component';
import { Container } from '@app/components/Container/Container';
import { SubHeader } from '@app/components/Chrome/SubHeader/SubHeader';
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
      <Container subHeader={<SubHeader />}>
        <div className="pf-l-gallery pf-m-gutter">

          <div className="pf-l-gallery__item">
            <div className="pf-c-card">
              <div className="pf-c-card__body">
                <span id="simple-form-name-helper-1">Search by Genre</span>
                {/* <SearchForm /> */}
              </div>
            </div>
          </div>

          <div className="pf-l-gallery__item">
            <div className="pf-c-card">
              <div className="pf-c-card__body">
                Artists
                {/* <GenreDonut /> */}
              </div>
            </div>
          </div>

          <div className="pf-l-gallery__item">
            <div className="pf-c-card">
              <div className="pf-c-card__body">
                Albums
                {/* <ProgressMeter /> */}
              </div>
            </div>
          </div>

          <div className="pf-l-gallery__item">
            <div className="pf-c-card">
              <div className="pf-c-card__body">
                Causes
              </div>
            </div>
          </div>

        </div>
      </Container>
    );
  }

}
