import React from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header: React.FC = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">향유록 로고</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
