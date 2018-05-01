import * as express from "express";
import * as http from "http";

async function main() {
    const expressApp = express();
    const portNumber = 3000;
    const hostName = 'localhost';
    const myUrl = `http://${hostName}:${portNumber}`;

    expressApp.set('port', portNumber);

    ['src/main/browser/public', 'node_modules', 'dist'].forEach(
        i => expressApp.use(express.static(i))
    );

    http.createServer(expressApp).listen(
        portNumber,
        (error:any) => {
            if(error) {
                console.log(error);
                process.exit(1);
            }
            else console.log(`web server is running at ${myUrl}`);
        }
    );
}

main();