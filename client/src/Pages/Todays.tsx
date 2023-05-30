import { Box, Typography } from '@mui/material';
import CardGrid from '../components/CardGrid';
import SubBar from '../components/SubBar';
export default function Index() {

    return (
        // The Today's page which shows all todo's due today
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
                Todos Due Today
            </Typography>
            <CardGrid />
        </Box>

    );
}
