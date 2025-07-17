# KATA - SweetShop
# Sweet Shop Management System – MERN Stack

A full-fledged **Sweet Shop Management System** built using the **MERN stack** (MongoDB, Express, React, Node.js). This project supports CRUD operations, inventory tracking, category-based filtering, and cart functionality. It includes full CRUD operations for sweets and is developed using **Test-Driven Development (TDD)** with **Jest** and **Supertest**.


## Project Purpose

The goal of this backend is to:
- Provide REST APIs for managing sweets
- Allow users to **add sweets to cart** while decreasing stock in real-time
- Prevent adding to cart if the item is **out of stock**
- Validate data before saving
- Enable backend testing using Jest



## Key Functionalities

- Full CRUD for Sweets
- Add to Cart (with stock decrease logic)
- Disable Add to Cart if stock = 0
- Unit & Integration Testing (Jest + Supertest)
- MongoDB schema design using Mongoose
- Error handling and validations
- Environment-based configuration
- Postman Tested APIs (screenshots included)  



## Technology Stack

| Purpose       | Tech Used        |
|---------------|------------------|
| Runtime       | Node.js          |
| Server        | Express.js       |
| Database      | MongoDB          |
| ODM           | Mongoose         |
| Testing       | Jest, Supertest  |
| API Tool      | Postman          |
| Frontend UI   |React.js(Tailwind)|




## API Endpoints

| Method | Endpoint          | Description            |
|--------|-------------------|------------------------|
| GET    | `/api/sweets`     | Fetch all sweets       |
| GET    | `/api/sweets/:id` | Fetch sweet by ID      |
| POST   | `/api/sweets`     | Add a new sweet        |
| PUT    | `/api/sweets/:id` | Update a sweet         |
| DELETE | `/api/sweets/:id` | Delete a sweet         |



**Demo Video **:- 
https://drive.google.com/file/d/1TOj4Z87S9SPEqKYCprCan47RR9a64vdL/view?usp=drive_link



**Few Screenshots** :-

**1. Fetch All Available Sweets**

<img width="1919" height="1024" alt="image" src="https://github.com/user-attachments/assets/d349184a-1414-4850-9bdf-7da424b8e4da" />


**2. Get Details of a Single Sweet**

<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/0d1c1ac0-a414-48b3-bf33-018761a89bf9" />


**3. Add a New Sweet to Inventory**

<img width="1918" height="1024" alt="image" src="https://github.com/user-attachments/assets/d233fe10-e8b3-4945-aa96-d05818175ebf" />


**4. Update Sweet Information**

<img width="1919" height="1026" alt="image" src="https://github.com/user-attachments/assets/6d9b5783-e9c8-49bc-9cad-aaf71ddde7ce" />


**5. Delete Sweet by ID**

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/2705144a-beff-432f-a397-7a4bd5859971" />


**6. Simulate "Add to Cart" – Reduce Stock**

<img width="1919" height="1022" alt="image" src="https://github.com/user-attachments/assets/6279fdeb-1c97-4786-baee-11d91c0f759b" />
