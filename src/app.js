// MCP ADC Setup
var mcpadc = require('mcp-spi-adc');

// GPIO Setup
var rpio = require('rpio');
rpio.init({gpiomem: false}); /* Use /dev/mem */

// Initial console log
console.log('Application running...');