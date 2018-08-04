import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import createJobInputCreator from './CreateJobInputCreator.jsx';
import createJobData from './createJobData.js';

// This is the component for creating a new job. Since we need to host a form in the component, follow
// the React Design Patterns rules, we are using a stateful component with local states to dynamically
// take care of the events.

const CreateJobInputFields = createJobInputCreator(createJobData);

class CreateJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.user,
      name: '',
      title: '',
      website: '',
      email: '',
      phone: '',
      recruiter: '',
      postDate: '',
      appliedDate: '',
      interviewedDate: '',
      coverLetterUrl: '',
      payRange: '',
      state: '',
      open: true,
      jobImportURL: '',
      missingFields: false,
      analytics: {
        customizedFull: false,
        customizedPersonal: false,
        customizedSotwareEngineeringProjects: false,
        customizedCoverLetter: false,
        mentionedNonTechnicalExperience: false,
        codeLinks: false,
        deployedLinks: false,
        referral: false,
        usedARecruiter: false,
        networked: false,
        inCompanyConnection: false,
      },
    };

    this.handleClose = this.handleClose.bind(this);
    this.createNewJob = this.createNewJob.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  /**
   * @description button that checks key press for enter and if it is it runs the function it is passed
   * @param { { } } event the event being checked for enter
   * @param { Function } callback the function to run if enter was pressed
   *
   * @return { undefined } undefined
   */
  handleEnter(event, callback) {
    if (event.key === 'Enter') {
      callback();
    }
  }
  // Here is only close the modal when click the button.
  // Eventally, we should handle when click the outside of the modal, still close the modal.
  handleClose() {
    this.setState({ open: false });
    this.props.onClose();
  }

  // Follow the React Best Practice Design Patterns to dynamiclly updates the state
  handleChange(event) {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleCheck({ target }) {
    let analyticsCopy = this.state.analytics;
    if (target.name === 'customizedFull') {
      Object.keys(analyticsCopy).forEach(key => {
        analyticsCopy[key] = target.checked;
      });
    } else {
      if (analyticsCopy.customizedFull === true) {
        analyticsCopy.customizedFull = false;
      }
      analyticsCopy[target.name] = target.checked;
    }
    this.setState({ analytics: analyticsCopy });
  }

  // Event listener for create a new job, and bubble the event back to trigger the
  // Ajax call from the main component.
  // Eventually, we should have form validation for this part.
  createNewJob() {
    this.state.missingFields = false;
    if (
      (this.state.name === '' ||
        this.state.title === '' ||
        this.state.website === '' ||
        this.state.email === '' ||
        this.state.phone === '' ||
        this.state.recruiter === '' ||
        this.state.postDate === '' ||
        this.state.appliedDate === '' ||
        this.state.interviewedDate === '' ||
        this.state.coverLetterUrl === '' ||
        this.state.payRange === '' ||
        this.state.state === '') &&
      this.state.jobImportURL === ''
    ) {
      this.setState({ missingFields: true });
    } else {
      this.props.onSubmit(this.state);
    }
  }

  getJobInfoFromURL() {
    axios
      .get('/joburl', {
        params: {
          url: this.state.jobImportURL,
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
    // axios
    //   .get(endpoint, params, callback)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => console.log(err));
  }

  // JSX renders html elements
  render() {
    return (
      <div>
        <Dialog
          open={!!this.props.view}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Create a new job'}</DialogTitle>

          <DialogContent>
            <div style={this.state.missingFields ? { color: 'red' } : { display: 'none', fontSize: '1.5em' }}>
              <a>{'You must fill in either the Job Listing'}</a>
              <br />
              <a> {'URL or all the fields in the form'}</a>
              <br />
            </div>
            <DialogContentText id="alert-dialog-description">
              <div>
                <label>Job Listing URL</label>
                <input
                  type="text"
                  name="jobImportURL"
                  value={this.state.jobImportURL}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  required
                />
              </div>
            </DialogContentText>
          </DialogContent>

          <Button
            variant="outlined"
            onClick={e => {
              this.getJobInfoFromURL();
            }}
          >
            Import from URL
          </Button>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <CreateJobInputFields analytics={this.state.analytics} handleCheck={this.handleCheck} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.createNewJob} color="primary">
              Create
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Exit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreateJob;
