import Link from 'next/link';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ purpose, title1, title2, description1, description2, buttonText, linkName }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}<br />{title2}
      </Text>
      <Text color="gray7500" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">
        {description1}<br />{description2}
      </Text>
      <Button fontSize='xl' bg="blue.300">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div>
      <h1>
        WRI Real Esate
      </h1>
      <Banner
        purpose={'RENT A HOME'}
        title1="Rental Homes for"
        title2="Everyone"
        description1="Explore Apartments, Homes"
        description2='and more'
        buttonText='Explore Renting'
        linkName="/search?purpose=for-rent" />
      <Banner
        purpose={'BUY A HOME'}
        title1="Find, Buy, & Own Your"
        title2="Dream Home"
        description1="Explore Buying"
        description2="and more"
        buttonText='Explore Buying'
        linkName="/search?purpose=for-sale" />
    </div>
  )
}
