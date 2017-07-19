import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';
 
import './task.js';
import './body.html';

Template.body.helpers({
  tasks() {
    // Show newest tasks at the top by sorting
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});
Template.body.events({
	'submit form':function(event){
		event.preventDefault();
		const target = event.target;
		const text = target.text.value;
		createdAt = new Date();
	//insert into collection named Tasks
		Tasks.insert({text :text ,createdAt:createdAt});
		target.text.value = '';
	}
});