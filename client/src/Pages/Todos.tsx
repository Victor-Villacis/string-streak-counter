import { Box, Typography } from '@mui/material';
import CardGrid from '../components/CardGrid';
import SubBar from '../components/SubBar';
export default function Index() {

    return (
        // The Todo page which shows all todo's
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <SubBar />
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="secondary.main"
                gutterBottom
            >
                All Todos
            </Typography>
            <CardGrid />
        </Box>

    );
}
