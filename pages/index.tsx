import { GetServerSideProps } from 'next'

import { LayoutWrapper } from '@pankod/refine-core'
import dataProvider from '@pankod/refine-airtable'
// export { NextRouteComponent as default } from '@pankod/refine-nextjs-router'

import { IProgram } from '@interfaces'
import { AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID } from '@constants'
import { Box, Card, Container, Stack, styled, Typography } from '@mui/material'
import { ProgramCard } from '@components/programCard'

type HomePageProps = {
    programs: IProgram[]
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const Home: React.FC<HomePageProps> = ({ programs }) => {
    console.log(programs)
    return (
        <LayoutWrapper>
            <Offset />
            <Offset />
            <Box>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom>
                        향유록, 다시 없을 지금을 향유해요
                    </Typography>
                    <Typography
                        variant="h5"
                        gutterBottom
                        color={'GrayText'}
                        sx={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
                    >
                        똑같은 일상을 아름답게 만들어 줄 취향 모임
                        <br />
                        누구나 열고 참여할 수 있는 원데이 클래스,
                        <br />
                        취향 모임 취향이 통하는 지역사람들과 교류하는 특별한 일상을 만들어 보세요!
                    </Typography>
                </Container>

                <Box maxWidth="md" sx={{ margin: '0 auto' }}>
                    <Card sx={{ padding: 2, mt: 4, mb: 4 }}>
                        <Stack spacing={2}>
                            <ProgramCard
                                program={programs[0]}
                                imageURL="https://source.unsplash.com/collection/190327/400x300"
                            />

                            <ProgramCard
                                program={programs[1]}
                                imageURL="https://source.unsplash.com/collection/190727/400x300"
                            />
                            <ProgramCard
                                program={programs[2]}
                                imageURL="https://source.unsplash.com/random"
                            />
                        </Stack>
                    </Card>
                </Box>
                {/* <Promotional />
                <div className="rounded-lg bg-white p-4 md:p-8">
                    <div className="flex flex-wrap justify-center md:justify-between">
                        {categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                id={category.id}
                                title={category.title}
                                backgroundImg={category.cover}
                            />
                        ))}
                    </div>
                    <br />
                    <h1 className="text-3xl font-extrabold uppercase text-gray-800">Deals of the day</h1>
                    <br />
                    <div className="flex flex-wrap">
                        {dealsOfDayProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className={index === 2 ? 'w-full lg:w-1/3' : 'w-full md:w-1/2 lg:w-1/3'}
                            >
                                <ProductCard
                                    productImg={product.images[0].url}
                                    title={product.name}
                                    description={product.description}
                                    price={product.price}
                                    productId={product.id}
                                    {...getBadgeProps(index)}
                                />
                            </div>
                        ))}
                    </div>
                    <br />
                    <h1 className="text-3xl font-extrabold uppercase text-gray-800">Fast & delicious</h1>
                    <br />
                    <div className="flex flex-wrap">
                        {fastAndDeliciousProducts.map((product) => (
                            <div key={product.id} className="w-full md:w-1/2">
                                <ProductCard
                                    productImg={product.images[0].url}
                                    title={product.name}
                                    description={product.description}
                                    price={product.price}
                                    badgeTitle="taste in less than 30 minutes"
                                    productId={product.id}
                                />
                            </div>
                        ))}
                    </div>
                </div> */}
            </Box>
        </LayoutWrapper>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data: programData } = await dataProvider(AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID).getList({
        resource: 'programs',
        sort: [
            {
                field: 'updatedAt',
                order: 'asc',
            },
        ],
    })

    return {
        props: {
            programs: programData,
        },
    }
}
