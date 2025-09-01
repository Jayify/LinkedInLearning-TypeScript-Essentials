type ContactField = keyof Contact; 
// Value type must be one of the field keys in Contact
// Useful for getting property name and value of specific value

const field: ContactField = "address";