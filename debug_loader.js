
const Loader = require('./runtime/Loader');
const loader = new Loader();
console.log('Total commands:', Object.keys(loader.getAllCommands()).length);
console.log('/RDP_1 exists:', !!loader.getCommand('/RDP_1'));
console.log('/USA_1 exists:', !!loader.getCommand('/USA_1'));

const rdp1 = loader.getCommand('/RDP_1');
if (rdp1) {
    console.log('/RDP_1 path:', rdp1.filePath);
}

const usa1 = loader.getCommand('/USA_1');
if (usa1) {
    console.log('/USA_1 path:', usa1.filePath);
}
