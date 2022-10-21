import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export const Header: React.FC = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Link href="/">
                        <Box sx={{ display: 'inherit' }}>
                            <Image alt="logo" src="/logo.png" width={40} height={30} />
                            <Typography variant="h6" sx={{ ml: 2 }}>
                                향유록
                            </Typography>
                        </Box>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}
