/**
 * This code executes after the document is fully loaded. It initializes the accordion control,
 * registers click handlers that need to be registered, and loads contacts from storage if there
 * are any to load.  If none to load, then the program will simply generate some contacts for
 * demo purposes.
 */
$(document).ready(function () {
    $("#accordion").accordion(
        {
            heightStyle: "content",
            collapsible: true
        });

    $("#submit-contact").click(submitContact);

    $("#new-contact").click(function () {
        $("#new-contact-form").slideToggle(500);
    });

    contacts = loadContacts();
    for (c of contacts) {
        addContact(c);
    }
});

/**
 * Declaration of a class for a contact. The static ID methods are needed to uniquely 
 * identify contacts, and this identifer is generated automatically.  The ID does not 
 * need to be specified by the code the builds a contact.
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

    isValid() {
        let isValid = this.lastName != undefined &&
            this.firstName != undefined && 
            this.phoneNumber != undefined && 
            this.email != undefined && 
            this.notes != undefined;

        return isValid;
    }
}

/**
 * Event handler for the submit contact button.
 */
function submitContact(evt) {
    let isValid = false;
    
    // Select all text and text area elements
    let textControls = $("input[type='text']");
    let allValid = true;

    textControls.each(function (index, control) {
        console.log("text control: " + index);
        let spanText = '';
        if( $(control).val() === '' ) {
            spanText = $(control).attr("id") + " is required!";
            allValid &= false;
        }
        $(control).siblings("span").text(spanText);
    });

    let email = $("#email");
    let phone = $("#phone");
    console.log(email.val());
    console.log(phone.val());
    if(email.val() === "" && phone.val() === "") {
        email.siblings("span").text("Either an email address or phone number is required!");
        allValid = false;
    }
    else {
        email.siblings("span").text("");
    }

    if(phone.val() != "") {
        let myRegEx = new RegExp("^([(][0-9]{3}[)]|[0-9]{3}-)[0-9]{3}-[0-9]{4}$");
        let myArray = myRegEx.exec(phone.val());
        if(myArray == null) {
            phone.siblings("span").text("The phone number is not valid!");
            allValid = false;
        } 
        else {
            phone.siblings("span").text("");
        }
    }


    if(allValid) {
        let contact = new Contact($("#last-name").val(),
        $("#first-name").val(),
        $("#phone").val(),
        $("#email").val(),
        $("#notes").val());

        addContact(contact);

        let form = $("#new-contact-form");
        form.trigger("reset");
        form.slideToggle(500);
    }
        
    evt.preventDefault();
}

/**
 * Adds the contact to the DOM and to the localStorage, then refreshes the accordion control.
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
    for (let i in contactInfo) {
        p += `<p>${i}: ${contactInfo[i]}</p>`;
    }
    let buttons = getButtonText(contact.id);
    let div = `<div id="${contact.id}">${p}${buttons}</div>`;
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

            // Keys of contacts are expected to be numbers so skip anything in web storage with a non-numeric key
            if(isNaN(key)) {
                continue;
            }

            // It is still possible that a numeric key could be something other than a contact.  in a real world project
            // contacts would be stored in something like an SQL database.  There are some limitations of web storage that
            // I must work around in this sample project.
            try {
                let contactJSON = JSON.parse(localStorage.getItem(key));
                let contact = Contact.from(contactJSON);
                if(contact.isValid()) {
                    contacts[contacts.length] = contact;
                }
            }
            catch(exception) {
                console.log("skipping storage item that couldn't be parsed");
            }
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

/**
 * Constructs a string with the HTML for a remove button.  
 * @returns HTML which can be adde dto the DOM
 */
function getButtonText(id) {
    //let edit = `<input id="${id}" class="edit-contact ui-button ui-widget ui-corner-all" type="button" value="Edit" onClick="editHandler(this)"><span>  </span>`;
    let remove = `<input  id="${id}" class="delete-contact ui-button ui-widget ui-corner-all" type="button" value="Delete" onClick="deleteHandler(this)">`;
    return remove;  // concatenate remove and edit button text when edit functionality is working.
}

/**
 * Delete handler for a contact which removes the contact that the button is associated with.
 * The contact is removed from the DOM and the local storage.
 * 
 * @param {*} button 
 */
function deleteHandler(button) {
    console.log("deleteHandler");
    console.log(button.id);

    let contactH3 = $(`h3#${button.id}`);
    if (contactH3.length == 1) {
        contactH3.remove();
    }

    // Get the previous div element id
    let contactDiv = $(`div #${button.id}`);
    localStorage.removeItem(button.id);
    contactDiv.remove();

    // Refresh the accordian.
    let contactList = $("#accordion");
    contactList.accordion("refresh");
}

/**
 * TBD - Didn't get to this yet.  The idea is that it should slide out the form and load the 
 * existing contact into the form.  Somehow when the contact form is submitted, it would have 
 * to know to update the existing contact.  Some design work is needed to change the 
 * submit handler to handle both editing and creating contacts.
 * @param {*} button 
 */
function editHandler(button) {
    console.log("editHandler");
    console.log(button.id);
}


