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
import rulerImage from '../images/ruler.png'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function SizeDialogSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState({
    normalSize : 36,
    length : 36,
    waistSize: 25,
    fitType : 'Slim',
    heightRange : "5'3' - 5'6'"
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setSelectedOption(option)
  };

  return (
    <div className='dialog-select'>
      <Button onClick={handleClickOpen} style={{maxWidth:'fit-content', alignItems: 'center'}} className='image-button' >
        <img src={rulerImage} alt='collar' width='400px' height='400px'/>
        </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Carefully Select the Options</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <div>
                <FormControl className={classes.formControl}>
                <InputLabel  htmlFor="demo-dialog-native">What size pant do you normally wear</InputLabel>
                <Select
                    native
                    value={option.normalSize}
                    onChange={(event)=>{
                        setOption({...option, normalSize: event.target.value} || '');
                        props.setSelectedOption({...option, normalSize: event.target.value} || '')
                    }}
                    input={<Input id="demo-dialog-native"
                    style={{paddingTop:'20px'}} />}
                >
                    <option value={36}>36</option>
                    <option value={37}>37</option>
                    <option value={38}>38</option>
                    <option value={39}>39</option>
                    <option value={40}>40</option> 
                    <option value={41}>41</option>
                    <option value={42}>42</option>
                    <option value={43}>43</option>
                    <option value={44}>44</option>
                    <option value={45}>45</option>
                    <option value={46}>46</option>
                    <option value={47}>47</option>
                    <option value={48}>48</option>
                    <option value={49}>49</option>
                    <option value={50}>50</option>
                    <option value={'S'}>S</option>
                    <option value={'M'}>M</option>
                    <option value={'L'}>L</option>
                    <option value={'XL'}>XL</option>
                </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-dialog-select-label">Waist Size (in Inches)</InputLabel>
                    <Select
                    native
                    value={option.waistSize}
                    onChange={(event)=>{
                        setOption({...option, waistSize: event.target.value} || '');
                        props.setSelectedOption({...option, waistSize: event.target.value} || '')
                    }}
                    input={<Input id="demo-dialog-native"
                    style={{paddingTop:'10px'}} />}
                >   
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                    <option value={32}>32</option>
                    <option value={33}>33</option>
                    <option value={34}>34</option>
                    <option value={35}>35</option>
                    <option value={36}>36</option>
                    <option value={37}>37</option>
                    <option value={38}>38</option>
                    <option value={39}>39</option>
                    <option value={40}>40</option> 

                </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-dialog-select-label">Length (in Inches)</InputLabel>
                    <Select
                    native
                    value={option.length}
                    onChange={(event)=>{
                        setOption({...option, length: event.target.value} || '');
                        props.setSelectedOption({...option, length: event.target.value} || '')
                    }}
                    input={<Input id="demo-dialog-native"
                    style={{paddingTop:'10px'}} />}
                >   
                    <option value={36}>36</option>
                    <option value={37}>37</option>
                    <option value={38}>38</option>
                    <option value={39}>39</option>
                    <option value={40}>40</option> 
                    <option value={41}>41</option>
                    <option value={42}>42</option>
                    <option value={43}>43</option>
                    <option value={44}>44</option>
                    <option value={45}>45</option>
                </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.formControl}>
                <InputLabel  htmlFor="demo-dialog-native">Fit Type</InputLabel>
                <Select
                    native
                    value={option.fitType}
                    onChange={(event)=>{
                        setOption({...option, fitType: event.target.value} || '');
                        props.setSelectedOption({...option, fitType: event.target.value} || '')
                    }}
                    input={<Input id="demo-dialog-native"
                    style={{paddingTop:'10px'}} />}
                >
                    <option value={'Slim'}>Slim</option>
                    <option value={'Regular'}>Regular</option>
                    <option value={'Baggy'}>Baggy</option>
                    <option value={'Belly'}>Belly</option>
                </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.formControl}>
                <InputLabel  htmlFor="demo-dialog-native">Height Range</InputLabel>
                <Select
                    native
                    value={option.heightRange}
                    onChange={(event)=>{
                        setOption({...option, heightRange: event.target.value} || '');
                        props.setSelectedOption({...option, heightRange: event.target.value})
                    }}
                    input={<Input id="demo-dialog-native"
                    style={{paddingTop:'10px'}} />}
                >
                    <option value={"5'3' - 5'6'"}>5'3' - 5'6'</option>
                    <option value={"5'7 - 5'10'"}>5'7 - 5'10'</option>
                    <option value={"5'11' - 6'1'"}>5'11' - 6'1'</option>
                </Select>
                </FormControl>
            </div>
          </form>
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