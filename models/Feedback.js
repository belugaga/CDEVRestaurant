class Feedback { //class MUST BE IN CAPITAL LETTERS
    constructor(id, usernameFK2, email, contactNumber, feedback, datePosted) {
        this.id = id; //to differentiate the two id
        this.usernameFK2 = usernameFK2;
        this.email = email;
        this.contactNumber = contactNumber;
        this.feedback = feedback;
        this.datePosted = datePosted;
    }
//add the set and get methods here
    getId() {
        return this.id;
    }
    getUsernameFK2() {
        return this.usernameFK2;
    }
    getEmail() {
        return this.email;
    }
    getContactNumber() {
        return this.contactNumber;
    }
    getFeedback() {
        return this.feedback;
    }
    getDatePosted() {
        return this.datePosted;
    }

}

module.exports = Feedback;