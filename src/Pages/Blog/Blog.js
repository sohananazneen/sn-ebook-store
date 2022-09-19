import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Q-1: Difference between Node.JS and Javascript</Card.Title>
                                <Card.Text> <strong>Ans:</strong>
                                    Javascript is a programming language that is used for writing scripts on the website.
                                    NodeJS is a Javascript runtime environment.

                                    Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                                    V8 is the Javascript engine inside of node.js that parses and runs Javascript.

                                    Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                                    Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.

                                    It is basically used on the client-side.	It is mostly used on the server-side.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Q-2: When should you use `nodejs` and when should you use `mongodb`</Card.Title>
                                <Card.Text> <strong>Ans:</strong>
                                    <strong>Ans:</strong>
                                    JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.

                                    JavaScript is normally following Java Programming language standard. There may have some different way of writing code, but at the same time, we can say it following the Java Programming language standard. Whereas node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Q-3: What is the purpose of `jwt` and how does it work</Card.Title>
                                <Card.Text> <strong>Ans:</strong>
                                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                                    Token-based authentication is probably the most common method for authenticating requests to REST API endpoints. It works like this:

                                    A user logs in to an application with a username and password, or otherwise proves her identity.
                                    The server confirms her identity and sends back an access token containing a reference to her identity.
                                    The client then includes this access token with every request to the server.
                                    For protected routes, REST API authentication middleware asserts the presence of a valid access token. The server can further use the identity asserted by the validated token to implement more granular permissions, such as acting on resources belonging to that particular user.

                                    A JWT’s characteristics make it a great choice for token-based authentication. We want a lightweight package, since it will be included on every single request to our REST API. It also must be tamper-proof, so that the identity claim cannot be altered in transit or spoofed outright.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Blog;