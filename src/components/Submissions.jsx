import React, { Component } from 'react';
import './css/Submissions.css';

import firebase from './Firebase';

export default class Submissions extends Component {
	constructor(props) {
		super(props);
		this.ref = firebase.firestore().collection('submissions-f24');
		this.state = {
			name: '', title: '', email: '', medium: '', year: '', dateCompleted: '', school: '', websiteLink: '', artistStatement: '', link: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const state = this.state
		state[event.target.name] = event.target.value;
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		const { name, title, email, medium, year, dateCompleted, school, websiteLink, artistStatement, link } = this.state;
		this.ref.add({ name, title, email, medium, year, dateCompleted, school, websiteLink, artistStatement, link }).then((docRef) => {
			this.setState({
				name: '', title: '', email: '', medium: '', year: '', dateCompleted: '', school: '', websiteLink: '', artistStatement: '', link: ''
			});
			alert("Thanks for submitting!");
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
	}

	render() {
		return (
			<div class="container">
			<div class="submissions-header">
					SUBMIT A PIECE
					<p>Please fill out the form to submit ONE piece to potentially be featured in an issue of Roski Mag. Email us at <b>roskimag@gmail.com</b> if you have any questions or concerns.</p>
			</div>
				<div>
				<div class ="form-container">
					<form onSubmit={this.handleSubmit}>
						<input type="text" name="name" placeholder="your name" spellCheck="false" value={this.state.name} onChange={this.handleChange} className="input" required />
						<input type="text" name="title" placeholder="title of piece" spellCheck="false" value={this.state.title} onChange={this.handleChange} className="input" required />
						<input type="text" name="email" placeholder="usc email" spellCheck="false" value={this.state.email} onChange={this.handleChange} className="input" required />
						<input type="text" name="medium" placeholder="medium" spellCheck="false" value={this.state.medium} onChange={this.handleChange} className="input" required />

						<select name="year" selected="year" value={this.state.year} onChange={this.handleChange} className="input" required>
    					<option value="freshman">freshman</option>
    					<option value="sophomore">sophomore</option>
    					<option value="junior">junior</option>
    					<option value="senior">senior</option>
  					</select>

						<input type="text" name="dateCompleted" placeholder="year piece was completed" spellCheck="false" value={this.state.dateCompleted} onChange={this.handleChange} className="input" required />
						<input type="text" name="school" placeholder="school" spellCheck="false" value={this.state.school} onChange={this.handleChange} className="input" required />
						<input type="text" name="link" placeholder="link to hosted file (ensure permissions are public)" spellCheck="false" value={this.state.link} onChange={this.handleChange} className="input" required />
						<input type="text" name="websiteLink" placeholder="portfolio link (optional)" spellCheck="false" value={this.state.websiteLink} onChange={this.handleChange} className="input" />
						<input type="text" name="artistStatement" value={this.state.artistStatement} onChange={this.handleChange} placeholder="artist statement/piece description" spellCheck="false" className="input" required />
						<input className ="submit" type="submit" value="submit" />
						<p className="disclaimer">By clicking the "submit" button, you are agreeing to allow Roski Mag to potentially publish your work on its online platform(s) and/or printed magazine. Roski Mag is free to select the pieces that will be showcased (unless otherwise stated).</p>
					</form>
				</div>
				</div>
			</div>
		)
	}
}
