const os = require('os');

console.log("Platform: " + os.platform());
console.log("Hostname: " + os.hostname());
console.log("CPU cores: " + os.cpus());
console.log("Architecture: " + os.arch());