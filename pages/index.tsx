import { GetServerSideProps } from 'next'
import { LayoutWrapper, useTranslate } from '@pankod/refine-core'
import dataProvider from '@pankod/refine-airtable'
// export { NextRouteComponent as default } from '@pankod/refine-nextjs-router'

import { IProgram } from '@interfaces'
import { AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID } from '@constants'
import { Box, Card, CardMedia, Container, Stack, Typography } from '@mui/material'
import { ProgramCard } from '@components/programCard'

type HomePageProps = {
    programs: IProgram[]
}

const Home: React.FC<HomePageProps> = ({ programs }) => {
    return (
        <LayoutWrapper>
            <Box>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom>
                        끝내주는 타이틀
                    </Typography>
                    <Typography variant="h5" gutterBottom color={'GrayText'}>
                        어쩌구 저쩌구..
                    </Typography>
                </Container>

                <Box maxWidth="md" sx={{ margin: '0 auto' }}>
                    <Card sx={{ padding: 2, mt: 4, mb: 4 }}>
                        <Stack spacing={2}>
                            <ProgramCard
                                name="프로그램 이름"
                                imageURL="https://source.unsplash.com/collection/190327/400x300"
                            />
                            <ProgramCard
                                name="프로그램 이름"
                                imageURL="https://source.unsplash.com/collection/190727/400x300"
                            />
                            <ProgramCard name="프로그램 이름" imageURL="https://source.unsplash.com/random" />
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
    })

    return {
        props: {
            programs: programData,
        },
    }
}
