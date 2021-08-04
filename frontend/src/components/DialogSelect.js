import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Alert from '@material-ui/lab/Alert';
import './DialogSelect.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState(props.options_names[0]);
  const handleChange = (event) => {
    setOption(event.target.value || '');
    props.setSelectedOption(event.target.value || '')
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const optionsImages=[]
  const options=[]
  for(let i=0;i<props.options.length;i++){
    optionsImages.push(<div  key={i} style={{display: 'flex',
    justifyContent: 'left'}}><img src={props.options[i]} 
                                  alt={i} width='150'
                                  height='200'/>
                                                <div 
                                                  style={{display: 'flex',
                                                          justifyContent: 'center',
                                                          alignItems: 'center'}}>{props.options_names[i]}</div></div>)
    options.push(<option value={props.options_names[i]} key={i}>{props.options_names[i]}</option>)
  }

  return (
    <div className='dialog-select'>
      <Button onClick={handleClickOpen} style={{maxWidth:'fit-content', alignItems: 'center'}} className='image-button'>
        <img src={props.image} alt='collar' width='400px' height='400px'/>
      </Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <Alert severity="info">You can preview the image by right clicking on it and selecting the 'open image in new tab' option — check it out!</Alert>
        <DialogTitle>Select a option</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
             <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Select</InputLabel>
              <Select
                native
                value={option}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                {options}
              </Select>
            </FormControl>
          </form>
          {optionsImages}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}