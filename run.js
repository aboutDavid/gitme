function command(cmd, args){
const { spawn } = require("child_process");
var cmd = spawn(cmd, args);

cmd.stdout.on("data", data => {
    console.log(data);
});

cmd.stderr.on("data", data => {
    console.error(data);
});

cmd.on('error', (error) => {
    console.error(error.message);
});

cmd.on("close", code => {
    console.log(`child process exited with code: ${code}`);
});
}
module.exports = {command}