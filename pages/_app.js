import React from 'react'
import App from 'next/app'
import MainLayout from './pages/main-layout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
}
