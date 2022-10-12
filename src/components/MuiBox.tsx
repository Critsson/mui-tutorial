import { Box, Stack, Divider, Grid, Paper } from "@mui/material"

export default function MuiBox() {
    return (
        <Paper sx={{padding: "2vw"}} elevation={10}>
            <Stack sx={{ border: "1px solid" }} direction="row" gap="1vw" divider={<Divider orientation="vertical" flexItem />}>
                <Box sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "100px",
                    width: "100px",
                    padding: "16px",
                    "&:hover": { backgroundColor: "primary.light" }
                }}>Codevolution</Box>
                <Box sx={{
                    backgroundColor: "secondary.main",
                    color: "white",
                    height: "100px",
                    width: "100px",
                    padding: "16px",
                    "&:hover": { backgroundColor: "primary.light" }
                }}>Codevolution</Box>
            </Stack>
            <Grid container my="2vw">
                <Grid item xs><Box bgcolor="primary.light" padding="2vw">Item 1</Box></Grid>
                <Grid item xs={6}><Box bgcolor="primary.light" padding="2vw">Item 2</Box></Grid>
                <Grid item xs><Box bgcolor="primary.light" padding="2vw">Item 3</Box></Grid>
                <Grid item xs><Box bgcolor="primary.light" padding="2vw">Item 4</Box></Grid>
            </Grid>
        </Paper>
    )

}