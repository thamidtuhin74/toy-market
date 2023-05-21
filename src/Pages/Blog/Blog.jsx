import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto '>
            
            <div className='container mx-auto grid md:grid-cols-2 p-4 gap-6 py-16'>
            <div className="qun-ans bg-yellow-100 p-5 rounded-lg">
                <h2 className='pb-4'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>
                    <span>Answer: </span>
                    <b>Access Token:</b> An access token is a credential that represents the authorization to access a protected resource. <b>Ex: Passport</b> <br/>

                    <b>Refresh Token:</b> A refresh token is a credential that is used to obtain a new access token without requiring the user to re-authenticate.<b>Ex: NID</b>

                    workflow typically involves the following steps:
                    <ol>
                        <li>User Authentication</li>
                        <li>Access Token Issuance</li>
                        <li>Accessing Protected Resources</li>
                        <li>Access Token Expiration:</li>
                        <li>Token Refresh</li>
                        <li>Access Token Renewal</li>
                        <li>Repeat Steps 3-6</li>

                    </ol>
                    
                </p>
            </div>
            <div className="qun-ans bg-pink-100 p-5 rounded-lg">
                <h2 className='pb-4'>Compare SQL and NoSQL databases.</h2>
                <p>
                    <span>Answer: </span>
                    SQL Databases: SQL databases, based on the relational model, organize data using predefined schemas and tables. They ensure data integrity, enforce relationships through constraints, and support complex queries, joins, and transactions. Examples include MySQL, PostgreSQL, and Oracle. SQL databases are ideal for structured and consistent data in applications like traditional business systems.
                    <br/>

                    NoSQL databases are designed to handle unstructured, semi-structured, and rapidly changing data. They offer flexible schemas or no schemas at all, enabling dynamic and scalable data storage. These databases are horizontally scalable, making them capable of handling large data volumes and high traffic loads. They achieve high performance and scalability by distributing data across multiple nodes. NoSQL databases encompass various types like key-value stores, document databases, columnar databases, and graph databases. Popular examples include MongoDB, Cassandra, Redis, and Neo4j. NoSQL databases are well-suited for applications dealing with diverse, evolving, and unstructured data, such as social networks, content management systems, and real-time analytics.
                </p>
            </div>
            <div className="qun-ans bg-blue-100 p-5 rounded-lg">
                <h2 className='pb-4'>What is express js? & Next js?</h2>
                <p>
                    <span>Answer: </span>
                    Express.js is a lightweight and flexible web application framework that simplifies the process of building server-side applications and APIs using Node.js.
                    Express.js is a popular web application framework for Node.js. It provides a set of features and tools to simplify the process of building web applications and APIs. 

                    <br/>
                    Next.js is a popular React framework for building server-rendered, static, and hybrid web applications. It is built on top of React and Node.js, providing a powerful set of features and conventions to streamline the development process.
                    Next.js is widely used for building complex web applications, static sites, and e-commerce platforms, combining the benefits of server-side rendering, static site generation, and modern frontend development with React.
                </p>
            </div>
            <div className="qun-ans bg-green-100 p-5 rounded-lg">
                <h2 className='pb-4'>What is a custom hook, and why will you create a custom hook?</h2>
                <p>
                    <span>Answer: </span>
                    The aggregate function in MongoDB is used for advanced data processing operations on collections, enabling tasks such as filtering, grouping, sorting, and data transformation. By utilizing a pipeline of stages, each stage performs a specific operation on the data and passes the result to the next stage. This pipeline-based approach allows for complex queries and aggregations, facilitating the extraction of meaningful insights from the data. The aggregate function provides a powerful and flexible means of analyzing and manipulating MongoDB data. Understanding the different stages and their capabilities empowers users to harness the full potential of the aggregate framework for advanced data processing.<br/>

                    <span>How It Works: </span> The aggregate function in MongoDB processes data through a pipeline of stages. Each stage performs specific operations on the data, and the result is passed to the next stage. The stages are defined as objects in an array and can include operations like filtering, grouping, sorting, projecting, joining, and array manipulation. The output of one stage becomes the input for the next stage, and the final result is returned after all stages are executed. Common stages include $match, $group, $sort, $project, $lookup, and $unwind. This pipeline-based approach enables advanced data processing and aggregation in MongoDB.
                </p>
            </div>
        </div>

        </div>
    );
};

export default Blog;