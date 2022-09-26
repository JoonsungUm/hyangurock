import React from 'react'
import Link from 'next/link'
import { Box, Card, CardMedia, Typography } from '@mui/material'

import { IProgram } from '@interfaces/index'

interface ProgramCardProps {
    program: IProgram
    imageURL: string
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, imageURL }) => {
    const { id, title, description } = program
    return (
        <Link href={`/programs/${id}`}>
            <Card sx={{ position: 'relative' }}>
                <CardMedia component="img" height="224" image={imageURL} alt={`program ${id}`} />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    }}
                />
                <Typography
                    variant="h3"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'whitesmoke',
                    }}
                >
                    {title}
                </Typography>
            </Card>
        </Link>
    )
}
