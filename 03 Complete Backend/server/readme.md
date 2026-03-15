1. Understand Basics
<!-- Small Break -->
2. Installation Of Express
3. Create a basic server (get api) using express
4. Why to use express instead of core node.js
<!-- Small Break -->
5. How to use postman?
6. postman vs postman agent
7. Understand data flow
<!-- Small Break -->
8. MondoDB
9. Basic Terms Of MongoDB
10. MondoDB Connection
<!-- Small Break -->
11. Do CRUD Operation

# understand Basic Concepts:

Node.js JavaScript nahi hai ❌
Node.js = runtime environment ✅

JavaScript (language)
↓
Node.js (runtime)
↓
Express (framework)

# difference between node and express

| Node.js (http) | Express.js       |
| -------------- | ---------------- |
| Manual routing | Built-in routing |
| Headers khud   | Auto handled     |
| More code      | Less code        |
| Hard to scale  | Easy to scale    | 
| Low-level      | High-level       |   

Low-level = machine ke zyada paas, control zyada, kaam zyada
High-level = human ke zyada paas, control kam, ease zyada 

Node.js se server possible hai, lekin Express usko human-friendly bana deta hai

# postman vs desktop agent

Postman ek API testing tool
Postman Desktop Agent ek helper app hai jo local APIs ko access karne deta hai

Agent akela kuch nahi karta ❌
Postman ke saath milke kaam karta hai ✅

# Basic MongoDB Terms

SQL -> Table , MongoDB -> Collection, code -> Model
SQL -> Row, MongoDB -> document, code -> Instance (or Object)

<!-- RECAP -->
express use karenge taki aasani se server bana paaye, halaki node js se bhi bnaya ja skta tha lekin thoda complex ho jata

express ka use karke basic apis waigera create karte hai, jaise ki get, put, post, etc

un apis ko test karne ke liye postman ka use kar skte hai joki ek api testing tool hai, lekin local api ko test karne ke liye ek helper app ki jarurat hoti hai joki hai postman agent.

apke pass req, res cycle bht imp hota hai, hota kuch aaisa hai ki req frontend se aa rhi hoti hai with some data or without some data, us data ko manupulate karke uspe kuch logic perform karke badle me backend se res send kar diya jata hai, and cycle complete ho jati hai


sath hi sath kuch middlewares ka bhi dhyan rakhna hota hai, middlewares ke through req pahunchne ke pahle hi data ko manupulate kiya ja skta hai...!!!




