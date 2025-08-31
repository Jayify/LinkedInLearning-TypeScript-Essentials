enum ContactStatus {
    Active,
    Inactive,
    New
}

// Stores values as number (0, 1, 2)
// Alternatively assign custom values
enum ContactStatus2 {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}
// Can then do status: "new"