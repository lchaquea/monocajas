import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Phase3 = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Phase 3: Materials Preparation
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h6" gutterBottom>
              Session 3: Materials Development
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Chip 
                icon={<ScheduleIcon />} 
                label="Duration: 2 hours" 
                variant="outlined" 
              />
              <Chip 
                icon={<CheckCircleOutlineIcon />} 
                label="Status: Pending" 
                color="primary" 
                variant="outlined" 
              />
            </Box>

            <Typography variant="body1" paragraph>
              <strong>Objective:</strong> Develop and finalize all necessary presentation materials and pitch decks for approaching compensation funds.
            </Typography>

            <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
              Materials to be Prepared
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" paragraph>
                Executive presentation deck
              </Typography>
              <Typography component="li" paragraph>
                Technical integration overview
              </Typography>
              <Typography component="li" paragraph>
                Partnership proposal document
              </Typography>
              <Typography component="li" paragraph>
                ROI and business case analysis
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
              Key Elements
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" paragraph>
                Clear value proposition for compensation funds
              </Typography>
              <Typography component="li" paragraph>
                Integration process and timeline
              </Typography>
              <Typography component="li" paragraph>
                Success metrics and KPIs
              </Typography>
              <Typography component="li" paragraph>
                Case studies and testimonials
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Phase3;