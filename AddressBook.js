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
