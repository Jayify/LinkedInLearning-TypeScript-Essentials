class TempData {
    private filePath: string;

    constructor(id?: string) {
        this.filePath = `${id || new Date().toISOString()}.txt`;
    }

    write(data: string) {
        // FileSystem.writeFileSync(this.filePath, data);
    }
    clear() {
        // fs.unlinkSync(this.filePath);
    }

    [Symbol.dispose]() {
        this.clear();
    }
}

function writeTempData() {
    // const temp = new TempData(); 
    // If not cleared or error interrupts program, data still in memory
    // Can causes issues or memeory leaks

    using temp = new TempData(); // Automaticall handles
    try {
        temp.write("Hello");
    } finally {
        temp.clear(); // Using puts code in try catch automatically to clear memory
    }

}