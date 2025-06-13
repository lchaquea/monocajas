import { Box, Typography, Paper, Grid } from '@mui/material';

const Overview = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Mono Strategic Consulting Project
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Penetration Strategy for Colombian Compensation Funds
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h6" gutterBottom>
              Project Overview
            </Typography>
            <Typography variant="body1" paragraph>
              This project aims to penetrate Colombian compensation funds with Mono's product offering.
              The consulting process is divided into three main phases:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" paragraph>
                Phase 1: Product Understanding and Evaluation
              </Typography>
              <Typography component="li" paragraph>
                Phase 2: Commercial Strategy Definition
              </Typography>
              <Typography component="li" paragraph>
                Phase 3: Materials Preparation
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Total Investment: 1,000 USD
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h6" gutterBottom>
              Project Kickoff Form
            </Typography>
            <Box sx={{ mt: 2 }}>
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/app0hwDgjWEoX5fMQ/pagDpJmr6qR2R1KGf/form"
                frameBorder="0"
                width="100%"
                height="533"
                style={{ background: 'transparent', border: '1px solid #ccc' }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;