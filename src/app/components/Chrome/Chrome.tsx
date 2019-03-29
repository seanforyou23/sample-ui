import * as React from 'react';

interface IChrome {
  header: React.ReactNode;
  sidebar: React.ReactNode;
}

// export class Chrome extends React.Component<IChrome> {

//   constructor(props: IChrome) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="pf-c-page" id="page">
//         {this.props.header}
//         {this.props.sidebar}
//         {this.props.children}
//       </div>
//     );
//   }
// }

export const Chrome: React.FunctionComponent<IChrome> = (props) => {
  return (
    <div className="pf-c-page" id="page">
      <a className="pf-c-skip-to-content pf-c-button pf-m-primary" href="#main-content">
        Skip to content
      </a>
      {props.header}
      {props.sidebar}
      {props.children}
    </div>
  );
}
