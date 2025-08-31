interface Person {
    id: number;
    name: string;
    cloneTs(): Person;
}

// JS
function clone(source) {
    return Object.apply({}, source)
}

// TS
function cloneTs(source: Person): Person {
    return Object.apply({}, source)
}