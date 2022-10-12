import { Box, Card, CardContent, CardActions, Button, CardMedia } from "@mui/material"

export default function MuiCard() {
    return (
        <Box width="300px">
            <Card elevation={10}>
                <CardMedia component="img" height="140" image="https://source.unsplash.com/random" alt="Unsplash Image"/>
                <CardContent>
                    <h5>This is a test</h5>
                    <p>This is a test for the Card component</p>
                </CardContent>
                <CardActions>
                    <Button>Share</Button>
                    <Button>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}