import * as React from 'react';

interface ContainerProps {
  subHeader?: React.ReactNode;
}

export class Container extends React.Component<ContainerProps> {
  constructor(props: ContainerProps) {
    super(props);
  }

  render() {
    let subHeader;
    if (this.props.subHeader) {
      subHeader = this.props.subHeader;
    } else if (this.props.subHeader === false) {
      subHeader = null;
    }

    return (
      <main role="main" className="pf-c-page__main" id="main-content">
        {subHeader}
        <section className="pf-c-page__main-section">
          {this.props.children}
        </section>
      </main>
    );
  }
}
