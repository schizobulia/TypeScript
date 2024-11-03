const executeCommandLine = require('./built/local/tsc');
const path = require('path');

function main() {
    executeCommandLine([path.join(__dirname, 'debug', 'test.ts')])    
}

main()