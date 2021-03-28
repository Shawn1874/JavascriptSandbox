$(document).ready(function () {
    $("#accordion").accordion(
        {
            //event: "mouseover",
            heightStyle: "content",
            collapsible: true
        });

    $("#submit-contact").click(submitContact);

    $("#new-contact").click(function() { 
        $("#new-contact-form").slideToggle(500);
    });

    contacts = loadContacts();
    for(c of contacts) {
        addContact(c);
    }

});

/**
 * Declaration of a class for a contact.
 */
class Contact {

    /**
     * Constrcut a contact from a JSON string.
     * @param {*} json 
     * @returns 
     */
    static from(json) {
        return Object.assign(new Contact(), json);
    }

    /**
     * Sets the value of the next numeric ID that getNextID() will return.
     * @param {*} next 
     */
    static setNextID(next) {
        Contact.nextId = next;
    }

    /**
     * Get the next available numeric ID for identifying the next contact.
     * @returns number
     */
    static getNextID() {
        return Contact.nextId++;
    }

    static nextId = 1;
/* 
    lastName = "";
    firstName = "";
    phoneNumber = "";
    email = "";
    notes = "";
    id = Contact.getNextID(); */

    constructor(lastName, firstName, phoneNumber, email, notes) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.notes = notes;
        this.id = Contact.getNextID();
    }

    /**
     * Return first and last name concatenated.
     */
    get name() {
        return `${this.firstName} ${this.lastName}`
    }

    /**
     * Return an associative array with the properties other than the name.
     */
    get info() {
        let contactInfo = [];
        contactInfo["Phone Number"] = this.phoneNumber;
        contactInfo["Email"] = this.email;
        contactInfo["Notes"] = this.notes;
        return contactInfo;
    }
}

function submitContact() {
    let contact = new Contact( $("#last-name").val(), 
        $("#first-name").val(),
        $("#phone").val(),
        $("#email").val(),
        $("#notes").val());

        addContact(contact);
        $('#new-contact-form').trigger("reset");
}

/**
 * 
 * @param {*} contact 
 */
function addContact(contact) {
    // get the div with id="accordion"
    let contactList = $("#accordion");

    //$(".contacts").append("<p>test</p>");
    // Build an h3 element with the name of the contact
    contactList.append(`<h3 id="${contact.id}">${contact.name}</h3>`);

    // Under the h3 element, add a paragraph element for each item
    let contactInfo = contact.info;
    let p = "";
    for(let i in contactInfo) {
        p += `<p>${i}: ${contactInfo[i]}</p>`;
    }
    
    let div = `<div id="${contact.id}">${p}</div>`;
    contactList.append(div);
    contactList.accordion("refresh");
    localStorage.setItem(contact.id, JSON.stringify(contact));
}

/**
 * Load contacts from storage if there are any.  Otherwise generate some canned data that can be 
 * loaded into the DOM to demonstrate the application.
 */
function loadContacts() {
    let contacts = [];
    if (localStorage.length === 0) {
        contacts = generateContacts();
    } else {
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            contacts[contacts.length] = Contact.from(JSON.parse(localStorage.getItem(key)));
        }
    }

    console.log(contacts);

    return contacts;
}

/**
 * Create and return a javascript object.
 */
function createContact(lastName, firstName, phoneNumber, email, notes) {
    let contact = new Contact(lastName, firstName, phoneNumber, email, notes);
    let contactString = JSON.stringify(contact);
    console.log(contactString);

    let contact2 = Contact.from(JSON.parse(contactString));
    console.log(JSON.stringify(contact2));
}

/**
 * Create several contacts and return the objects in an array.  The purpose of this method
 * is to generate some canned data for testing.  Until the user creates contacts this will
 * populate the DOM with a few contacts initially.  Once the program has saved contacts into
 * persistent storage, then the contacts will be loaded from storage instead of using this
 * method.
 * 
 */
function generateContacts() {
    let contacts = [];

    contacts[0] = new Contact("Venkman", "Peter", "212-745-3217", "venkman@ghostbusters.org", "In love with Dana Barret");
    contacts[1] = new Contact("Zeddemore", "Winston", "212-917-4890", "zeedemore@ghostbusters.org", "will believe anything you say if there is steady pay involved");
    contacts[2] = new Contact("Barrett", "Dana", "212-913-2117", "dana.barrett@hotmail.com", "cellist, New York Philharmonic");

    return contacts;
}


