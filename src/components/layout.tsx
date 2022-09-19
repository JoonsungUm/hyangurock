import React from 'react'
import { LayoutProps } from '@pankod/refine-core'

import { Header, Footer } from '@components'
import { styled } from '@mui/material'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Offset />
            <Offset />

            <main>{children}</main>
            <Footer />
        </>
    )
}
