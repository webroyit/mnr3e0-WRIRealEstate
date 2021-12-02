import Link from 'next/link';
import Image from 'next/image';   // This is an image coming from next.js
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({ purpose, title1, title2, description1, description2, buttonText, linkName, imageUrl  }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}<br />{title2}
      </Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">
        {description1}<br />{description2}
      </Text>
      <Button fontSize='xl' bg="blue.300">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log( propertiesForSale, propertiesForRent);
  return (
    <Box>
      <Banner
        purpose={'RENT A HOME'}
        title1="Rental Homes for"
        title2="Everyone"
        description1="Explore Apartments, Homes"
        description2='and more'
        buttonText='Explore Renting'
        linkName="/search?purpose=for-rent"
        imageUrl="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <Flex flexWrap="wrap">

      </Flex>
      <Banner
        purpose={'BUY A HOME'}
        title1="Find, Buy, & Own Your"
        title2="Dream Home"
        description1="Explore Buying"
        description2="and more"
        buttonText='Explore Buying'
        linkName="/search?purpose=for-sale"
        imageUrl="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Flex flexWrap="wrap">
      
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    // Next.js wil adds these to the props of the component
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}