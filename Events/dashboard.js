if (Meteor.isClient) {
    Template.dashboard.events({
        'submit form': function (event) {
            event.preventDefault();
            var nameVar = event.target.updateName.value;
            var lastNameVar = event.target.updateLastName.value;
            var locationVar = event.target.updateLocation.value;
            Meteor.users.update({_id: Meteor.userId()}, {
                $set: {
                    profile: {
                        'firstname': nameVar,
                        'lastName': lastNameVar,
                        'location': locationVar
                    }
                }
            })
            console.log(Meteor.user());
        }
    });

    Template.dashboard.events({
        'click .logout': function(event){
            event.preventDefault();
            Meteor.logout();
        }
    });
}