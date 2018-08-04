//   <div>
//   <label>Company name:</label>
//   <input
//     type="text"
//     name="name"
//     value={this.state.name}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//     required
//   />
// </div>
// <div>
//   <label>Job title:</label>
//   <input
//     type="text"
//     name="title"
//     value={this.state.title}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//     required
//   />
// </div>
// <div>
//   <label>Web site:</label>
//   <input
//     type="text"
//     name="website"
//     value={this.state.website}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>Email:</label>
//   <input
//     type="email"
//     name="email"
//     value={this.state.email}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>Phone:</label>
//   <input
//     type="phone"
//     name="phone"
//     value={this.state.phone}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>Recruiter: </label>
//   <input
//     type="text"
//     name="recruiter"
//     value={this.state.recruiter}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>Post Date:</label>
//   <input
//     type="date"
//     name="postDate"
//     value={this.state.postDate}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>Applied Date: </label>
//   <input
//     type="date"
//     name="appliedDate"
//     value={this.state.appliedDate}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>Interviewed Date:</label>
//   <input
//     type="date"
//     name="interviewedDate"
//     value={this.state.interviewedDate}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>Cover letter url:</label>
//   <input
//     type="text"
//     name="coverLetterUrl"
//     value={this.state.coverLetterUrl}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>Salary:</label>
//   <input
//     type="text"
//     name="payRange"
//     value={this.state.payRange}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   />
// </div>
// <div>
//   <label>State:</label>
//   <select
//     name="state"
//     value={this.state.state}
//     onChange={this.handleChange.bind(this)}
//     onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
//   >
//     <option value="">Please choose an option</option>
//     <option value="pending">Pending</option>
//     <option value="offered">Offered</option>
//     <option value="rejected">Rejected</option>
//   </select>
// </div>

const fieldData = [
  {
    type: 'text',
    text: 'Name',
    name: 'name',
  },
  {
    type: 'text',
    text: 'Title',
    name: 'title',
  },
  {
    type: 'text',
    text: 'Website',
    name: 'website',
  },
  {
    type: 'text',
    text: 'Email',
    name: 'email',
  },
  {
    type: 'text',
    text: 'Phone',
    name: 'phone',
  },
  {
    type: 'text',
    text: 'Recruiter',
    name: 'recruiter',
  },
  {
    type: 'text',
    text: 'Post Date',
    name: 'postDate',
  },
  {
    type: 'text',
    text: 'Date Applied',
    name: 'appliedDate',
  },
  {
    type: 'text',
    text: 'Date Interviewed',
    name: 'interviewedDate',
  },
  {
    type: 'text',
    text: 'Cover Letter Url',
    name: 'coverLetterUrl',
  },
  {
    type: 'text',
    text: 'Pay Range',
    name: 'payRange',
  },
  {
    type: 'checkbox',
    text: 'Customized Fully',
    name: 'customizedFull',
  },
  {
    type: 'checkbox',
    text: 'Customized Cover Letter',
    name: 'customizedCoverLetter',
  },
  {
    type: 'checkbox',
    text: 'Customized Sotware Engineering Projects',
    name: 'customizedSotwareEngineeringProjects',
  },
  {
    type: 'checkbox',
    text: 'Customized Personal Section',
    name: 'customizedPersonal',
  },
  {
    type: 'checkbox',
    text: 'Mentioned Non-Technical Experience',
    name: 'mentionedNonTechnicalExperience',
  },
  {
    type: 'checkbox',
    text: 'Included Codebase Links',
    name: 'codeLinks',
  },
  {
    type: 'checkbox',
    text: 'Included Deployed Links',
    name: 'deployedLinks',
  },
  {
    type: 'checkbox',
    text: 'Had A Referral',
    name: 'referral',
  },
  {
    type: 'checkbox',
    text: 'Used A Recruiter',
    name: 'usedARecruiter',
  },
  {
    type: 'checkbox',
    text: 'Networked',
    name: 'networked',
  },
  {
    type: 'checkbox',
    text: 'Have A In Company Connection',
    name: 'inCompanyConnection',
  },
];

export default fieldData;
