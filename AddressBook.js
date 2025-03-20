// UC 1

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        const addressRegex = /^[a-zA-Z0-9\s]{4,}$/;
        const zipRegex = /^\d{6}$/;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9])*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!nameRegex.test(firstName)) throw "Invalid First Name";
        if (!nameRegex.test(lastName)) throw "Invalid Last Name";
        if (!addressRegex.test(address)) throw "Invalid Address";
        if (!addressRegex.test(city)) throw "Invalid City";
        if (!addressRegex.test(state)) throw "Invalid State";
        if (!zipRegex.test(zip)) throw "Invalid Zip Code";
        if (!phoneRegex.test(phoneNumber)) throw "Invalid Phone Number";
        if (!emailRegex.test(email)) throw "Invalid Email Address";

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city}, 
        State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}


let contact = new Contact("Sample", "User", "MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "sample@example.com");
console.log(contact.toString());

// UC 2

try {
    contact = new Contact("Dhairya", "Pandey", "MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "dhairya@example.com");
    console.log(contact.toString());
} catch (error) {
    console.error(error);
}

try {
    contact = new Contact("dhairya", "pa", "abc", "xyz", "MH", "123", "98765", "invalid-email");
    console.log(contact.toString());
} catch (error) {
    console.error("Error Occurred: " + error);
}

// UC 3

let addressBookArr = [];

try {
    let contact1 = new Contact("Dhairya", "Pandey", "MG Road", "Mumbai", "Maharashtra", "400001", "9876543210", "dhairya@example.com");
    let contact2 = new Contact("Aryan", "Sharma", "Park Street", "Delhi", "Delhi", "110001", "9123456789", "aryan@example.com");

    addressBookArr.push(contact1);
    addressBookArr.push(contact2);

    console.log("Contacts in Address Book:");
    addressBookArr.forEach(contact => console.log(contact.toString()));
} catch (error) {
    console.error("Error Occurred: " + error);
}

// UC 4

function editContact(name, updatedDetails) {
    let contact = addressBookArr.find(contact => contact.firstName === name);

    if (contact) {
        Object.assign(contact, updatedDetails);
        console.log(`Contact Updated Successfully: \n${contact.toString()}`);
    } else {
        console.log(`Contact with name '${name}' not found.`);
    }
}

// Sample Contact Edit
editContact("Dhairya", { address: "Linking Road", city: "Bangalore", state: "Karnataka" });
