import * as React from 'react';
import { Container } from '@app/components/Container/Container';
import { SubHeader } from '@app/components/Chrome/SubHeader/SubHeader';
export function Metrics() {
  return (
    <Container subHeader={<SubHeader />}>
      <div className="pf-l-gallery pf-m-gutter">

        <div className="pf-l-gallery__item">
          <div className="pf-c-card">
            <div className="pf-c-card__body">
              Thingie 1
            </div>
          </div>
        </div>

        <div className="pf-l-gallery__item">
          <div className="pf-c-card">
            <div className="pf-c-card__body">
              Thingie 2
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}
