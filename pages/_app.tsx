import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Refine } from '@pankod/refine-core'
import routerProvider from '@pankod/refine-nextjs-router'
import dataProvider from '@pankod/refine-airtable'
import { Partytown } from '@builder.io/partytown/react'

import { Layout } from '@components'
import { AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID } from '@constants'
import { ThemeProvider } from '@mui/material'
import { theme } from 'src/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID)}
            Layout={Layout}
            resources={[{ name: 'programs' }]}
        >
            <Head>
                {/* <Partytown debug={true} forward={['dataLayer.push']} /> */}
                <title>향유록</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <link rel="icon" type="image/png" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Refine>
    )
}

export default MyApp
