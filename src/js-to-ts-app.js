/** 
 * Set types for a JavaScript function using JSDoc comments
 * @param {number} contactId
 * @returns {Promise<{id: number, name: string, birthDate: Date}>}
 */ 


async function getContact(contactId) {
  const resp = await $.ajax({
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

getContact(1).then((contact) => {
  // contact.id = "1234" // Error: Type 'string' is not assignable to type 'number'.
  contact.id = 1234
  // contact.birthDate = "12/12/1990"; // Error: Type 'string' is not assignable to type 'Date'.
  contact.birthDate = new Date("12/12/1990");
});

getContact(2).then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});