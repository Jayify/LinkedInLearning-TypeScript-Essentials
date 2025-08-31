interface Contact {
    id: number;
    name: string;
    birthDate?: Date; // Optional field
    address?: AddressErrors;
    status: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    region: string;
    postcode: string;
}

let primaryAddress: Address = { 
    line1: "10 Coding Lane",
    line2: "Area, Place",
    region: "Location", 
    postcode: "1000",
}

let primaryContact: Contact = { 
    id: 1, 
    name: "John", 
    birthDate: new Date("1/1/2000"),
    address: primaryAddress,
    status: ContactStatus.Active
}

let secondaryContact: Contact = { 
    id: 2, 
    name: "Jane",
    status: ContactStatus.Inactive
}