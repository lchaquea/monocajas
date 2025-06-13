import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Phase2 = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Phase 2: Commercial Strategy
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h6" gutterBottom>
              Session 2: Strategy Definition
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
              <strong>Objective:</strong> Define the positioning and Go-to-Market (GTM) strategy for approaching compensation funds.
            </Typography>

            <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
              Strategy Components
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" paragraph>
                Market positioning and value proposition
              </Typography>
              <Typography component="li" paragraph>
                Target fund segmentation and prioritization
              </Typography>
              <Typography component="li" paragraph>
                Sales approach and engagement strategy
              </Typography>
              <Typography component="li" paragraph>
                Partnership model and revenue structure
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
              Deliverables
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" paragraph>
                Detailed GTM strategy document
              </Typography>
              <Typography component="li" paragraph>
                Target fund list with prioritization
              </Typography>
              <Typography component="li" paragraph>
                Initial outreach plan and timeline
              </Typography>
              <Typography component="li" paragraph>
                Partnership framework and terms
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Phase2;