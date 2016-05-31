if (Meteor.isServer) {
    if (Resume.find().count() === 0) {
        Meteor.call('insertResume');
        console.log('It was empty, inserting...')
    } else {
        if (Resume.find().count() > 4) {
            Meteor.call('resetResume');
            console.log('Too many entries, resetting...')
        } else {
            console.log("everything is fine");
        }
    }
}