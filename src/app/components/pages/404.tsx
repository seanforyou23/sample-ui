import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Alert } from '@patternfly/react-core';
import { Container } from '@app/components/Container/Container';
export function NotFound() {
  return (
    <Container subHeader={false}>
      <Alert variant="danger" title="404! This view hasn't been created yet." />
      <NavLink to="/" className="pf-c-nav__link">Back to Dashboard</NavLink>
    </Container>
  );
}
