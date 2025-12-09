const http = require("http");

let users = [
    { id: 1, name: 'Smith', age: 25 },
    { id: 2, name: 'Will', age: 22 },
    { id: 3, name: 'Will', age: 23 }
];

const server = http.createServer((request, response) => {
    const reqURL = request.url;
    const reqMethod = request.method;
    const userId = parseInt(reqURL.split("/")[4]);

    // GET method to fetch all the users
    if (reqMethod === 'GET' && reqURL === '/api/v1/users') {
        response.writeHead(200, {
            "Content-Type": "application/json",
        });
        response.end(
            JSON.stringify(users)
        );
    }

    //GET method to fetch user with specific Id
    else if (reqMethod === 'GET' && reqURL === `/api/v1/users/${userId}`) {
        const getUser = users.filter(pers => pers.id === userId);
        if (getUser.length > 0) {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(getUser))
        } else {
            response.writeHead(400, { "Content-Type": "application/json" });
            response.end(JSON.stringify(" Error: User with this id does not exist."))
        }
    }

    //POST method to create new user
    else if (reqMethod === "POST" && reqURL === '/api/v1/users') {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk.toString();
        })
        request.on("end", () => {
            const userData = JSON.parse(body)
            const newUser = {
                id: userData.id,
                name: userData.name,
                age: userData.age,
            }
            const checkUser = users.filter(pers => pers.id === userData.id)
            if (checkUser.length === 0) {
                users.push(newUser);
                response.writeHead(201, { "Content-Type": "application/json" });
                response.end(JSON.stringify("user added successful"))
            } else {
                response.writeHead(403, { "Content-Type": "application/josn" });
                response.end(JSON.stringify("user already exist"))
            }
        });
    }

    //POST method to show session log inn
    else if (reqMethod === 'POST' && reqURL === '/api/v1/sessions') {
        response.writeHead(200, {
            "Content-Type": "application/json",
        });
        response.end(
            JSON.stringify({
                message: `Session logged inn`,
            })
        );
    }

    //DELETE method to show session log out
    else if (reqMethod === 'DELETE' && reqURL === '/api/v1/sessions') {
        response.writeHead(200, {
            "Content-Type": "application/json",
        });
        response.end(
            JSON.stringify({
                message: `Session logged out`,
            })
        );
    }

    else {
        defaultHandler(request, response)
    }
});

//Default handler to throw error for incorrect api calls
const defaultHandler = (request, response) => {
    response.writeHead(404, {
        "Content-Type": "application/json",
    });
    response.end(
        JSON.stringify({
            message: `Page not found at ${request.url}`,
        })
    );
};

server.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});