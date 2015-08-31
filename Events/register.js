if (Meteor.isClient) {
    Template.register.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            var nameVar = event.target.registerName.value;
            var lastNameVar = event.target.registerLastName.value;
            var locationVar = event.target.selectLocation.value;

            Accounts.createUser({
                email: emailVar,
                password: passwordVar,
                profile: {
                    firstname: nameVar,
                    lastName: lastNameVar,
                    location: locationVar
                }
            });
        }
    });

}