import * as React from 'react';
import { Container } from '@app/components/Container/Container';
export function Metrics() {
  return (
    <Container>
      <div className="pf-l-gallery pf-m-gutter">

        <div className="pf-l-gallery__item">
          <div className="pf-c-card">
            <div className="pf-c-card__body">
              Five
            </div>
          </div>
        </div>

        <div className="pf-l-gallery__item">
          <div className="pf-c-card">
            <div className="pf-c-card__body">
              Six
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}
