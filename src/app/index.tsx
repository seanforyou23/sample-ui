import React, { Component } from 'react';
import { Alert, AlertActionCloseButton, BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';
import { Chrome } from '@app/components/Chrome/Chrome';
import { Header } from '@app/components/Chrome/Header/Header';
import { Sidebar } from '@app/components/Chrome/Sidebar/Sidebar';
import { Routes } from '@app/routes';
import '@patternfly/patternfly/patternfly.css';
// import '@patternfly/patternfly/patternfly-addons.css';
import '@app/app.css';
import xs from '@assets/images/pfbg_576.jpg';
import xs2x from '@assets/images/pfbg_576@2x.jpg';
import sm from '@assets/images/pfbg_768.jpg';
import sm2x from '@assets/images/pfbg_768@2x.jpg';
import lg from '@assets/images/pfbg_1200.jpg';
import filter from '@assets/images/background-filter.svg';

const images = {
  [BackgroundImageSrc.xs]: xs,
  [BackgroundImageSrc.xs2x]: xs2x,
  [BackgroundImageSrc.sm]: sm,
  [BackgroundImageSrc.sm2x]: sm2x,
  [BackgroundImageSrc.lg]: lg,
  [BackgroundImageSrc.filter]: `${filter}#image_overlay`
};

interface IApp {
  appName: string;
}

export default class App extends Component<IApp> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <>
        <BackgroundImage src={images} />
        <Chrome header={<Header />} sidebar={<Sidebar />}>
          <Routes />
        </Chrome>
      </>
    );
  }
}
