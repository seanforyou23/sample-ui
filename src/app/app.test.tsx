import * as React from 'react';
import App from '.';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('App tests', () => {
  test('should render default App component', () => {
    const view = shallow(<App appName="Sample UI" />);
    expect(view).toMatchSnapshot();
  });

  test('should render the dashboard route', () => {
    const view = shallow(
      <MemoryRouter initialEntries={[{
        pathname: '/',
        key: 'dashboard'
      }]}>
        <App appName="Sample UI" />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
