declare global {
    /** Formats a date into human-readable format */ // Docstring
    function formatDate(date: Date): string;
} // Delare in global namespace, still needs implementation linked elsewhere e.g. html script tag

export {} // Empoty export so TS treats file as a module