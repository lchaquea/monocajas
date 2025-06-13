import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Phase1 = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Phase 1: Product Understanding and Evaluation
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h6" gutterBottom>
              Session 1: Product Understanding
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
              <strong>Objective:</strong> Validate if Mono's product offering can meet the needs of Colombian compensation funds.
              This session will determine whether it's worthwhile to pursue this market segment.
            </Typography>

            <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
              Key Discussion Points
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" paragraph>
                Analysis of current compensation fund operations and pain points
              </Typography>
              <Typography component="li" paragraph>
                Evaluation of Mono's product features against market needs
              </Typography>
              <Typography component="li" paragraph>
                Identification of potential integration points
              </Typography>
              <Typography component="li" paragraph>
                Assessment of market opportunity and potential challenges
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
              Expected Outcomes
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" paragraph>
                Clear understanding of market fit
              </Typography>
              <Typography component="li" paragraph>
                Go/No-go decision for pursuing compensation funds
              </Typography>
              <Typography component="li" paragraph>
                Initial list of potential target funds
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Phase1;