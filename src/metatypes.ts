function cloneGeneric<T>(source: T): T {
    return Object.apply({}, source)
}

// Param 2 can be any type that matches the properties of param 1 (super/subclass)
function cloneGeneric2<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source)
}

let item = cloneGeneric({ id: 1 });
let item2 = cloneGeneric<string>("a"); // May have to specify type if TS can't infer

// Can use generic for interfaces too
interface NewContact<TExternalId> {
    id: number;
    externalId: TExternalId
}