import { Box } from '@mui/material';
import SubBar from '../components/SubBar';
import Form from '../components/Form';
import CardGrid from '../components/CardGrid';
export default function Index() {

    return (
        // This is the main page that will be rendered at '/'
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <SubBar />
            <Form />
            <CardGrid />
        </Box>

    );
}
