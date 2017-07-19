import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
	tasks() {
		return Tasks.find({});
	},
});
Template.body.events({
	'submit form':function(event){
		event.preventDefault();
		const target = event.target;
		const text = target.text.value;
		createdAt = new Date();

		Tasks.insert({text :text ,createdAt:createdAt});
		target.text.value = '';
	}
})