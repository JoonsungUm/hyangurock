import React from 'react'
import { LayoutProps } from '@pankod/refine-core'

import { Header, Footer } from '@components'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
