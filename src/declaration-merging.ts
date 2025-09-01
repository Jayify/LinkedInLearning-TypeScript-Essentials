class Customer {} // Previous existing class or non-modifiable class (e.g. in 3rd party library)

interface Customer {
    save(): void;
} // Declaration merging, create new interface extending class with new functionality


const customer = new Customer();
customer.save = function() {}