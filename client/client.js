Template.messages.helpers({
    messages: function() {
    if(Meteor.user())
         return Messages.find({location: Meteor.user().profile.location}, {sort: {time: -1}});
    else
         return Messages.find({}, { sort: { time: -1}});
    }
});

Template.dashboard.helpers({
    loginName: function() {
        return Meteor.user().emails[0].address;
    }
});

Template.input.events = {
    'keydown input#message' : function (event) {

    if (event.which == 13) {
    if (Meteor.user()) {
           var name = Meteor.user().emails[0].address;
           var userLocation = Meteor.user().profile.location;
       }
    else {
           var name = 'Anonymous';
           var userLocation = 'unknown';
       }
           var message = document.getElementById('message');

    if (message.value != '') {
                Messages.insert({
                    name: name,
                    message: message.value,
                    time: Date.now(),
                    location: userLocation
                });

    document.getElementById('message').value = '';
    message.value = '';
            }
        }
    }
}