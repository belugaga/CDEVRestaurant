"use strict";

class Restaurant { //class MUST BE IN CAPITAL LETTERS
    constructor(id, name, address, contact_number, contact_email, operating_hours, about, allergies, halal, pictures, category, region) {
        this.id = id; //to differentiate the two id
        this.name = name;
        this.address = address;
        this.contact_number = contact_number;
        this.contact_email = contact_email;
        this.operating_hours = operating_hours;
        this.about = about;
        this.allergies = allergies;
        this.halal = halal;
        this.pictures = pictures;
        this.category = category;
        this.region = region;
    }
//add the set and get methods here
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getContact_number() {
        return this.contact_number;
    }
    getContact_email() {
        return this.contact_email;
    }
    getOperating_hours() {
        return this.operating_hours;
    }
    getAbout() {
        return this.about;
    }
    getAllergies() {
        return this.allergies;
    }
    getHalal() {
        return this.halal;
    }
    getPictures() {
        return this.pictures;
    }
    getCategory() {
        return this.category;
    }
    getRegion() {
        return this.region;
    }

}

module.exports = Restaurant;