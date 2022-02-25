const os = require("os");

// OS 플랫폼.

// Platform
console.log(os.platform());

//CPU Architecutre
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());