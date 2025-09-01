interface A {
    id: number;
}

interface B {
    name: string;
}

type C = A & B; // A + B with no new fields

interface D extends A, B { // A + B + new fields
    value: string;
}

// Union type
type AlternateEnum = "active" | "inactive" | "new"; // Less code then full enum but still forces choices














type multipleOptions = string | number;
