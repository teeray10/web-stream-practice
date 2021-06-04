import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const classes = useStyles();

  return (
    <Grid container sm={12} spacing={1} direction="column">
      <Grid item sm={12}>
        <Paper square={true} elevation={0} className={[classes.paper, classes.header]}>A</Paper>
      </Grid>
      <Grid item container sm={12}>
        <Grid sm={4}></Grid>
        <Grid container sm={5}>
          <Grid sm={12}>
            <Typography className={[classes.paper, classes.boldTypography]} variant="h5">
              Bitcoin, the World's Reserve Currency?
            </Typography>
          </Grid>
          <Grid sm={3}>
            <Typography className={[classes.paper, classes.boldTypography, classes.italizedTypography]} variant="subtitle1">
              Peter Schiff
            </Typography>
          </Grid>
          <Grid sm={4}>
            <Typography className={[classes.paper]} variant="subtitle1">
              20 Feb 2021
            </Typography>
          </Grid>
          <Grid sm={3}>
            <Typography className={[classes.paper, classes.italizedTypography]} variant="subtitle1">
              Nocoiner
            </Typography>
          </Grid>
          <Grid sm={12}>
            <Paper elevation={0} className={classes.paper}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere, dignissim turpis eget, feugiat nulla. In hac habitasse platea dictumst. Etiam tincidunt vitae nisl congue commodo. Integer tincidunt dolor nisi, ac sollicitudin metus rutrum et.  <br></br><br></br> 
    Ut arcu magna, ultricies ut libero ut, posuere condimentum lorem. Integer eget luctus ex. Nam fermentum quis quam vel sagittis. Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem. Etiam eu lacus vitae felis dignissim tincidunt nec nec sem. Vivamus vitae varius ligula. Proin in malesuada ex. In mi mi, dictum at orci in, mattis imperdiet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br></br><br></br>
    Vestibulum lorem nibh, laoreet interdum magna pretium, laoreet faucibus mauris. Nam suscipit quam ut velit dapibus mollis. In a nunc consequat nulla sollicitudin luctus vitae a justo. Morbi id turpis dapibus, aliquam ligula in, dictum lacus. Praesent id mattis mi. Donec facilisis tristique mi eget pulvinar. Phasellus viverra vehicula ligula, nec imperdiet massa sagittis in. Sed eu leo tempor tortor elementum rutrum at at augue. Suspendisse potenti. Ut quis libero ullamcorper, consequat mauris non, egestas velit. Phasellus vitae pretium mi, non feugiat eros. Vestibulum hendrerit turpis gravida accumsan ullamcorper. Aliquam erat volutpat. Maecenas ornare velit id nisl vehicula, et auctor tellus dictum. Maecenas rhoncus orci ac dolor rhoncus tincidunt. Sed venenatis ac sapien at aliquet. Sed non nunc varius, eleifend lectus sit amet, euismod nibh. Quisque suscipit, orci eu molestie ullamcorper, nulla mi elementum lectus, a faucibus tortor massa eu turpis. <br></br><br></br>
    Fusce sollicitudin, massa eu feugiat bibendum, magna dui dictum ante, vitae dictum eros tortor sit amet nulla. Pellentesque consequat sit amet nunc id pellentesque. Praesent in libero vel justo facilisis tincidunt a vitae mi. Cras fermentum urna a orci tincidunt, vitae sollicitudin nulla euismod. Pellentesque ac leo ullamcorper, suscipit elit sed, scelerisque odio. Sed sodales dolor quis ornare pretium. Donec ut viverra nisi, in laoreet ex. Praesent ultrices augue sit amet nunc vehicula, et rutrum metus sagittis. Sed aliquam mattis dolor, a cursus risus posuere vel. <br></br><br></br>
    Suspendisse condimentum tellus dui, quis vehicula lacus tempus in. Vestibulum ac orci nec purus faucibus imperdiet. Suspendisse fringilla facilisis mauris non congue. In a ante quis velit ultricies varius a in justo. Donec tincidunt auctor egestas. Donec et felis nec nisi pharetra viverra eu ac metus. Cras euismod nibh eget nibh mollis efficitur sed pulvinar leo. <br></br><br></br>
    Aenean vel eros tristique, molestie urna sit amet, mollis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere, dignissim turpis eget, feugiat nulla. In hac habitasse platea dictumst. Etiam tincidunt vitae nisl congue commodo. Integer tincidunt dolor nisi, ac sollicitudin metus rutrum et. Ut arcu magna, ultricies ut libero ut, posuere condimentum lorem. Integer eget luctus ex. Nam fermentum quis quam vel sagittis. Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem. Etiam eu lacus vitae felis dignissim tincidunt nec nec sem. <br></br><br></br>
    Vivamus vitae varius ligula. Proin in malesuada ex. In mi mi, dictum at orci in, mattis imperdiet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum lorem nibh, laoreet interdum magna pretium, laoreet faucibus mauris. Nam suscipit quam ut velit dapibus mollis. In a nunc consequat nulla sollicitudin luctus vitae a justo. Morbi id turpis dapibus, aliquam ligula in, dictum lacus. Praesent id mattis mi. Donec facilisis tristique mi eget pulvinar. Phasellus viverra vehicula ligula, nec imperdiet massa sagittis in. Sed eu leo tempor tortor elementum rutrum at at augue. <br></br><br></br>
    Suspendisse potenti. Ut quis libero ullamcorper, consequat mauris non, egestas velit. Phasellus vitae pretium mi, non feugiat eros. Vestibulum hendrerit turpis gravida accumsan ullamcorper. Aliquam erat volutpat. Maecenas ornare velit id nisl vehicula, et auctor tellus dictum. Maecenas rhoncus orci ac dolor rhoncus tincidunt. Sed venenatis ac sapien at aliquet. Sed non nunc varius, eleifend lectus sit amet, euismod nibh. Quisque suscipit, orci eu molestie ullamcorper, nulla mi elementum lectus, a faucibus tortor massa eu turpis. Fusce sollicitudin, massa eu feugiat bibendum, magna dui dictum ante, vitae dictum eros tortor sit amet nulla. <br></br><br></br>
    Pellentesque consequat sit amet nunc id pellentesque. Praesent in libero vel justo facilisis tincidunt a vitae mi. Cras fermentum urna a orci tincidunt, vitae sollicitudin nulla euismod. Pellentesque ac leo ullamcorper, suscipit elit sed, scelerisque odio. Sed sodales dolor quis ornare pretium. Donec ut viverra nisi, in laoreet ex. Praesent ultrices augue sit amet nunc vehicula, et rutrum metus sagittis. Sed aliquam mattis dolor, a cursus risus posuere vel. Suspendisse condimentum tellus dui, quis vehicula lacus tempus in. Vestibulum ac orci nec purus faucibus imperdiet. Suspendisse fringilla facilisis mauris non congue. In a ante quis velit ultricies varius a in justo. Donec tincidunt auctor egestas. Donec et felis nec nisi pharetra viverra eu ac metus. <br></br><br></br>
    Cras euismod nibh eget nibh mollis efficitur sed pulvinar leo. Aenean vel eros tristique, molestie urna sit amet, mollis urna.</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
  },
  header: {
    backgroundColor: '#2F4F4F'
  },
  boldTypography: {
    fontWeight: 'bold'
  },
  italizedTypography: {
    fontStyle: 'italic'
  }
}));

export default App;