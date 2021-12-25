import { Box } from '@chakra-ui/layout';


import { baseUrl, fetchApi } from '../../utils/fetchApi';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <Box maxWidth="1000px" margin="auto" p="4">
        
    </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id }}) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  
    return {
        props: {
            propertyDetails: data,
        },
    }
}