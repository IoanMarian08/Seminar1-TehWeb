import { createServer, request } from 'http';

const server = createServer((request, response) => {
    response.end("Hello world\n");
})

//trebuie sa ii alocam un port
server.listen(8000, () => { //   ()inseamna ca nu are parametru
    console.log("Server is running...")
});
