import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import BatteryStdIcon from '@mui/icons-material/BatteryStd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Battery2BarIcon from '@mui/icons-material/Battery2Bar';



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Img1 from './imgs/test.png';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (

    <>

      <AppBar position="static" style={{ background: '#1f1f1f', boxShadow: '  7px 7px 14px #000000db,-7px -7px 14px #ffffff' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
 
            {/*MenuIcon />*/}
            <p> <ArrowForwardIosIcon/> collapse</p>

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: 'center' }}>
            Dashbord
          </Typography>
          <Button color="inherit">...</Button>
        </Toolbar>
      </AppBar>

      <Container style={{ paddingTop: '25px' }}>
        <div>
          <h5 style={{  color: '#fff'}}>total people-4 <span style={{ padding: '50px 80px' }}> ⏱️00:34:45</span></h5>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* {[...Array(4)].map((e) => {
          return (<>
            <Grid item xs={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </>)
        })} */}
          <Grid item xs={12} sm={6}>
            <Accordion style={{ background: '#1f1f1f', color: '#fff', border: '1px solid gray' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ textDecoration: 'underline' }}>Engagement</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '50%' }}>
                    <div style={{ padding: '5px', width: '100%' }}>
                      <h4 style={{ margin: 0, paddding: 0 }}>Most Interactive</h4>
                      <div style={{ display: 'flex', paddingTop: '10px' }}>
                        <Avatar >R</Avatar>
                        <Avatar >H</Avatar>
                        <Avatar >RT</Avatar>
                      </div>
                    </div>
                    <div style={{ padding: '5px', width: '100%' }}>
                      <div style={{ padding: '5px', width: '100%' }}>
                        <h4 style={{ margin: 0, paddding: 0 }}>Less Interactive</h4>
                        <div >
                          <Avatar >R</Avatar>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '5px', width: '50%', textAlign: 'center' }}>
                    <img src={Img1} alt='' style={{ height: "120px", width: '220px' }} />
                    <h3 style={{ color: '#00d9a4' }}>Engagement Meter</h3>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Accordion style={{ background: '#1f1f1f', color: '#fff', border: '1px solid gray' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ textDecoration: 'underline' }}>Current Speaker</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                  <div style={{ display: 'flex', width: '80%' }}>
                    <div style={{  paddingTop: '30px' }}>
                      <Avatar style={{ alignItems: 'center'}} >R</Avatar>
                    </div>
                    <div>
                      <div>
                        <h4 style={{ display: 'flex', paddingLeft:'20px'}}>Farrokh Rastegar</h4>
                      </div>
                      <div>
                        <Typography>
                        <p style={{display:'flex',paddingLeft:'20px'}}>You seemed tired! Take time re-energize yourself.A good snack,coffee,or a short walk can refresh you.</p>

                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderLeft: '1px solid white', width: '30%' }}>
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    
                      <div>
                        <p> <Battery2BarIcon style={{color:'red', transform:'rotate(-90deg)'}} />  Energy Levels</p>
                      </div>
                      
                    </div>
                    <div>
                      <p> 😓 Fatigued</p>
                      

                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Accordion style={{ background: '#1f1f1f', color: '#fff', border: '1px solid gray' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ textDecoration: 'underline' }}>My Participation</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                  <div style={{ display: 'flex', width: '80%' }}>
                    <div style={{paddingTop: '30px' }}>
                      <Avatar>R</Avatar>
                    </div>
                    <div>
                      <div>
                        <h4 style={{ display: 'flex', paddingLeft:'20px'}}>Gaurav(Participant)</h4>
                      </div>
                      <div>
                        <Typography>
                        <p style={{display:'flex',paddingLeft:'20px'}}>You seemed tired! Take time re-energize yourself.A good snack,coffee,or a short walk can refresh you.</p>

                        </Typography>
                      </div>
                      
                    </div>
                  </div>
                  <div style={{ borderLeft: '1px solid white', width: '30%' }}>
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    
                    <div>
                        <p> <Battery2BarIcon style={{color:'red', transform:'rotate(-90deg)'}} />  Energy Levels</p>
                      </div>
                      
                    </div>
                    <div>
                      <p> 😓 Fatigued</p>
                      

                    </div>
                  </div>
                </div>
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <p>Your engagement</p>
                        <p>OtherParticipants</p>
                      </div>
                      <div>
                        <p>Tip: You are showing signs of fatigue,try to more energy and smile will interacting with others</p>
                      </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Accordion style={{ background: '#1f1f1f', color: '#fff', border: '1px solid gray' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >

                <Typography style={{ textDecoration: 'underline' }}>Previous Speaker</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                  <div style={{ display: 'flex', width: '80%' }}>
                    <div style={{  paddingTop: '30px' }}>
                      <Avatar style={{ alignItems: 'center'}} >M</Avatar>
                    </div>
                    <div>
                      <div>
                        <h4 style={{ display: 'flex', paddingLeft:'20px'}}>Monica Ribeiro</h4>
                      </div>
                      <div>
                        <Typography>
                        <p style={{display:'flex',paddingLeft:'20px'}}>You have their attension.keep it up.</p>

                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderLeft: '1px solid white', width: '30%' }}>
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    
                      <div>
                        <p> <BatteryStdIcon  style={{color:'green', transform:'rotate(-90deg)'}}/>  Energy Levels</p>
                      </div>
                      
                    </div>
                    <div>
                      <p> 🙂 Engaging</p>

                    </div>
                  </div>
                </div>

                
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </>

  );
}
