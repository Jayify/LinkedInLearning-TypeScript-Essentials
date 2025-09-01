interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

type ContactQueryErr = Record<keyof Contact, Query> // Requires all properties to be in data
type ContactQuery = Partial<Record<keyof Contact, Query>> // Partial wrapper makes all properties optional
type ContactQueryRestrict = Omit<
    Partial<
        Record<keyof Contact, Query>
    >, "address"
> // Omit wrapper removes properties from query
type ContactQueryPick = Partial<
    Pick<
        Record<keyof Contact, Query>, "id" | "name"
    >
> // Can only use the selected fields (no matter what other fields are added)
type ContactQueryReqr = Required<ContactQuery> // All properties are required


function searchContacts(contacts: Contact[], query: ContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
    }
);