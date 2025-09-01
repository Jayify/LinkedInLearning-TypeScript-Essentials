// Define decorator
function authorise(target: any, property: string, descriptors: PropertyDescriptor) {
    const wrapped = descriptors.value; // Origional method

    descriptors.value = function () {
        // Make check, throw error if needed or run origional method
        if (!currentUser.isAuthenticated()) {
            throw Error("User is not authenticated");
        }

        return wrapped.apply(this, arguments) // Run origional method
    }
}

// To use
@authorise
getContactById(id: number): Contact | null {
    // ...
}


// Factory decorator (for decorator with parameter)
function authoriseFactory(role: string) {
    return function authorise(target: any, property: string, descriptors: PropertyDescriptor) {
    const wrapped = descriptors.value; // Origional method

    descriptors.value = function () {
        // Make check, throw error if needed or run origional method
        if (!currentUser.isAuthenticated()) {
            throw Error("User is not authenticated");
        }
        if (!currentUser.isInRole(role)) {
            throw Error("User is not authorised to execute this action");
        }

        return wrapped.apply(this, arguments)
    }
}

// To use
@authorise("ContactViewer")
getContactById(id: number): Contact | null {
    // ...
}


// Class decorator
function freeze(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

// Property decorator
function auditable(target: object, key: string | symbol) {
    // Get initial value before decorator
    let val = target[key];

    // Overwrite property with custom getter and setter
    Object.defineProperty(target, key, {
        get: () => val,
        set: (newVal) => {
            console.log(`${key.toString()} changed: `, newVal);
            val = newVal;
        },
        enumerable: true,
        configurable: true
    })

}


@freeze // Applies to constructor
class ContactRepository {
    @auditable
    private contacts: Contact[] = [];
}