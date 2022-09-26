import React, { FC, useState } from 'react'

import { GetServerSideProps } from 'next'
import dataProvider from '@pankod/refine-airtable'

import { BaseKey, LayoutWrapper } from '@pankod/refine-core'
import { CardMedia, Container, styled, TextField, Typography } from '@mui/material'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

import { AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID } from '@constants'
import { IProgram } from '@interfaces/index'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

interface ProgramPageProps {
    program: IProgram
}

const ProgramPage: FC<ProgramPageProps> = ({ program }) => {
    const { id, title, description } = program

    const [date, setDate] = useState<Date>(new Date())
    return (
        <LayoutWrapper>
            <Offset />
            <CardMedia
                component="img"
                height="224"
                image="https://source.unsplash.com/random"
                alt={`program${id}`}
            />
            <Offset />

            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" gutterBottom color={'GrayText'}>
                    {description}
                </Typography>
                <Offset />

                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue || new Date())
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Container>
        </LayoutWrapper>
    )
}

export default ProgramPage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query
    const { data: programData } = await dataProvider(AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID).getOne({
        resource: 'programs',
        id: id as BaseKey,
    })

    return {
        props: {
            program: programData,
        },
    }
}
