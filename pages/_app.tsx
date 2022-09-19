import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Refine } from '@pankod/refine-core'
import routerProvider from '@pankod/refine-nextjs-router'
import { Partytown } from '@builder.io/partytown/react'
import dataProvider from '@pankod/refine-airtable'

const API_TOKEN = 'your-airtable-api-token'
const BASE_ID = 'your-airtable-base-id'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Refine routerProvider={routerProvider} dataProvider={dataProvider(API_TOKEN, BASE_ID)}>
            <Head>
                <Partytown debug={true} forward={['dataLayer.push']} />
            </Head>

            <Component {...pageProps} />
        </Refine>
    )
}

export default MyApp
