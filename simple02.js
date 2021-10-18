const SyslogServer = require("syslog-server");


const address = '' ; // Any
const port = 888 ;

const listen = {address: address, port: port,exclusive: true } ;
const server = new SyslogServer();

server.on("message", (value) => {

console.log("on message nih");
	    console.log(value.date);     // the date/time the message was received
	    console.log(value.host);     // the IP address of the host that sent the message
	    console.log(value.protocol); // the version of the IP protocol ("IPv4" or "IPv6")
	    console.log(value.message);  // the syslog message
});

server.on("listening", () =>{

console.log("on linten nih");

});

server.start(listen);


