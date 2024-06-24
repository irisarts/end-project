[nodemon] starting `node src/index.js`
(node:31112) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3000
info: POST /login. Status: 200. Duration: 11 ms {"service":"bookstore-api"}
info: GET /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: PUT /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: DELETE /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms 
{"service":"bookstore-api"}
e5678901-23f0-1234-5678-9abcdef01234
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: GET /users. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /users. Status: 201. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: GET /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: PUT /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: DELETE /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 3 ms 
{"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: GET /hosts. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
we komen in de router post!!
Create host functie
we komen in de try createhost
info: POST /hosts. Status: 200. Duration: 9 ms {"service":"bookstore-api"}
Aangemaakte host:  {
  id: '4fdaab4e-7c68-4f5d-a0a3-2e3b7bc8a7ce',
  username: 'newhosty ',
  password: 'password123',
  name: 'John Doe',
  email: 'johndoe@email.com',
  phoneNumber: '+11234567890',
  profilePicture: 'https://example.com/images/johndoe.jpg',
  aboutMe: "I'm a passionate traveler who loves to share my home with fellow explorers. Welcome!"
}
newHost in hosts.js: {
  id: '4fdaab4e-7c68-4f5d-a0a3-2e3b7bc8a7ce',
  username: 'newhosty ',
  password: 'password123',
  name: 'John Doe',
  email: 'johndoe@email.com',
  phoneNumber: '+11234567890',
  profilePicture: 'https://example.com/images/johndoe.jpg',
  aboutMe: "I'm a passionate traveler who loves to share my home with fellow explorers. Welcome!"
}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: GET /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: PUT /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: DELETE /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 
3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: GET /properties. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /properties. Status: 200. Duration: 7 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
hier in put
info: PUT /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: DELETE /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
deletee amenity [AsyncFunction: deleteAmenity]
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: GET /amenities. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /amenities. Status: 200. Duration: 4 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 5 ms 
{"service":"bookstore-api"}
booking gevonden: {
  id: 'f0123456-78ab-cdef-0123-456789abcdef',
  checkinDate: 2023-03-10T18:00:00.000Z,
  checkoutDate: 2023-03-15T10:00:00.000Z,
  numberOfGuests: 2,
  totalPrice: 150,
  bookingStatus: 'confirmed',
  userId: 'a1234567-89ab-cdef-0123-456789abcdef',
  propertyId: 'g9012345-67ef-0123-4567-89abcdef0123'
}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 7 ms 
{"service":"bookstore-api"}
This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:
PrismaClientValidationError: 
Invalid `prisma.booking.update()` invocation:

{
  where: {
    id: "f0123456-78ab-cdef-0123-456789abcdef"
  },
+ data: BookingUpdateInput | BookingUncheckedUpdateInput
}

Argument `data` is missing.
    at Tn (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:115:6855)
    at In.handleRequestError (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:6533) 
    at In.handleAndLogRequestError (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:6211)
    at In.request (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:5919)
    at async l (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:127:11167)
    at async updateBookingById (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/bookings/updateBookings.js:14:19) 
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 1 
ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: GET /bookings. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /bookings. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
je komt bij router id j0123456-78f0-1234-5678-9abcdef01234
in de try statement reviews by id
in de try geteReviewById j0123456-78f0-1234-5678-9abcdef01234
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 6 ms {"service":"bookstore-api"}
review in getREviewBtId {
  id: 'j0123456-78f0-1234-5678-9abcdef01234',
  rating: 4,
  comment: 'Beautiful view! However, there were some minor issues with the bathroom.',  userId: 'd4567890-12ef-0123-4567-89abcdef0123',
  propertyId: 'j2345678-90f1-2345-6789-abcdef012345'
}
review const in reviews routes {
  id: 'j0123456-78f0-1234-5678-9abcdef01234',
  rating: 4,
  comment: 'Beautiful view! However, there were some minor issues with the bathroom.',  userId: 'd4567890-12ef-0123-4567-89abcdef0123',
  propertyId: 'j2345678-90f1-2345-6789-abcdef012345'
}
else statement in review 200
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /reviews. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /reviews. Status: 200. Duration: 7 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: GET /users/:userId. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
Error: User with d4567890-12 was not found!
    at updateUserById (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/users/updateUsers.js:7:15)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/users.js:77:25
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)    at next (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\route.js:149:13)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:19:5
    at C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:261:12
    at getSecret (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:97:14)
    at module.exports [as verify] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:101:10)
    at authMiddleware (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:13:7)
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)info: PUT /users/d4567890-12. Status: 404. Duration: 6 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: DELETE /users/d4567890-12ef-01. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
d4567890-12ef-01
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /users. Status: 400. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /hosts/:hostId. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
Error: Host with :hostId was not found!
    at updateHostById (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/hosts/updateHosts.js:9:15)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/hosts.js:87:25
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)    at next (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\route.js:149:13)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:19:5
    at C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:261:12
    at getSecret (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:97:14)
    at module.exports [as verify] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:101:10)
    at authMiddleware (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:13:7)
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)info: PUT /hosts/:hostId. Status: 404. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
Error: Host was not found
    at deleteHost (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/hosts/deleteHosts.js:7:15)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/hosts.js:107:27
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)    at next (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\route.js:149:13)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:19:5
    at C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:261:12
    at getSecret (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:97:14)
    at module.exports [as verify] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:101:10)
    at authMiddleware (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:13:7)
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)info: DELETE /hosts/:hostId. Status: 404. Duration: 8 ms {"service":"bookstore-api"}  
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
we komen in de router post!!
Create host functie
we komen in de try createhost
warn(prisma-client) This is the 10th instance of Prisma Client being started. Make sure this is intentional.
info: POST /hosts. Status: 200. Duration: 6 ms {"service":"bookstore-api"}
binnen in de catch PrismaClientValidationError: 
Invalid `prisma.host.create()` invocation:

{
  data: {
    password: undefined,
    name: undefined,
    email: undefined,
    phoneNumber: undefined,
    profilePicture: undefined,
    aboutMe: undefined,
+   username: String
  }
}

Argument `username` is missing.
    at Tn (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:115:6855)
    at In.handleRequestError (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:6533) 
    at In.handleAndLogRequestError (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:6211)
    at In.request (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:5919)
    at async l (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:127:11167)
    at async createHost (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/hosts/createHosts.js:16:29)
    at async file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/hosts.js:53:21 {
  clientVersion: '5.15.0'
}
newHost in hosts.js: null
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: GET /properties/h0123456-789f0-1234-5678-9abcdef01234. Status: 200. Duration: 0 
ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
Error: Property with h0123456-789f0-1234-5678-9abcdef01234 was not found!
    at updatePropertyById (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/properties/updateProperties.js:9:15)   
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/properties.js:88:29
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)    at next (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\route.js:149:13)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:19:5
    at C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:261:12
    at getSecret (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:97:14)
    at module.exports [as verify] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:101:10)
    at authMiddleware (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:13:7)
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)info: PUT /properties/h0123456-789f0-1234-5678-9abcdef01234. Status: 404. Duration: 6 
ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
Error: index was not defined
    at deleteProperties (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/properties/deleteProperties.js:7:15)     
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/properties.js:110:31
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)    at next (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\route.js:149:13)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:19:5
    at C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:261:12
    at getSecret (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:97:14)
    at module.exports [as verify] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:101:10)
    at authMiddleware (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:13:7)
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)info: DELETE /properties/h0123456-789f0-1234-5678-9abcdef01234. Status: 404. Duration: 7 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /properties. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: GET /amenities/t2345678-90qr-stu. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
hier in put
Error: Amenity with t2345678-90qr-st was not found
    at updateAmenityById (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/amenities/updateAmenities.js:7:15)      
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/amenities.js:58:28
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)    at next (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\route.js:149:13)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:19:5
    at C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:261:12
    at getSecret (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:97:14)
    at module.exports [as verify] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:101:10)
    at authMiddleware (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:13:7)
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)info: PUT /amenities/t2345678-90qr-st. Status: 404. Duration: 7 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: DELETE /amenities/bc-def012345678. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /amenities. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 4 ms 
{"service":"bookstore-api"}
booking gevonden: {
  id: 'f0123456-78ab-cdef-0123-456789abcdef',
  checkinDate: 2023-03-10T18:00:00.000Z,
  checkoutDate: 2023-03-15T10:00:00.000Z,
  numberOfGuests: 2,
  totalPrice: 150,
  bookingStatus: 'confirmed',
  userId: 'a1234567-89ab-cdef-0123-456789abcdef',
  propertyId: 'g9012345-67ef-0123-4567-89abcdef0123'
}
info: POST /login. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 5 ms 
{"service":"bookstore-api"}
This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:
PrismaClientValidationError: 
Invalid `prisma.booking.update()` invocation:

{
  where: {
    id: "f0123456-78ab-cdef-0123-456789abcdef"
  },
+ data: BookingUpdateInput | BookingUncheckedUpdateInput
}

Argument `data` is missing.
    at Tn (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:115:6855)
    at In.handleRequestError (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:6533) 
    at In.handleAndLogRequestError (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:6211)
    at In.request (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:122:5919)
    at async l (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\@prisma\client\runtime\library.js:127:11167)
    at async updateBookingById (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/bookings/updateBookings.js:14:19) 
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 0 
ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /bookings. Status: 200. Duration: 8 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
je komt bij router id j0123456-78f0-1234-5678-9abcdef01234
in de try statement reviews by id
in de try geteReviewById j0123456-78f0-1234-5678-9abcdef01234
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
review in getREviewBtId {
  id: 'j0123456-78f0-1234-5678-9abcdef01234',
  rating: 4,
  comment: 'Beautiful view! However, there were some minor issues with the bathroom.',  userId: 'd4567890-12ef-0123-4567-89abcdef0123',
  propertyId: 'j2345678-90f1-2345-6789-abcdef012345'
}
review const in reviews routes {
  id: 'j0123456-78f0-1234-5678-9abcdef01234',
  rating: 4,
  comment: 'Beautiful view! However, there were some minor issues with the bathroom.',  userId: 'd4567890-12ef-0123-4567-89abcdef0123',
  propertyId: 'j2345678-90f1-2345-6789-abcdef012345'
}
else statement in review 200
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
Error: Review with j0123456-78f0-1234-5678-9abcdef01234 was not found!
    at updateReviewById (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/reviews/updateReviews.js:7:15)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/reviews.js:63:27
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)    at next (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\route.js:149:13)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:19:5
    at C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:261:12
    at getSecret (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:97:14)
    at module.exports [as verify] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:101:10)
    at authMiddleware (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:13:7)
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 404. Duration: 6 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
Error: index was not defined
    at deleteReview (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/services/reviews/deleteReviews.js:7:15)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/routes/reviews.js:80:29
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)    at next (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\route.js:149:13)
    at file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:19:5
    at C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:261:12
    at getSecret (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:97:14)
    at module.exports [as verify] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\jsonwebtoken\verify.js:101:10)
    at authMiddleware (file:///C:/Users/irisa/Desktop/winc/exercises/end-project/bed-final-project-boilerplate-main/src/middleware/auth.js:13:7)
    at Layer.handle [as handle_request] (C:\Users\irisa\Desktop\winc\exercises\end-project\bed-final-project-boilerplate-main\node_modules\express\lib\router\layer.js:95:5)info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 404. Duration: 7 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /reviews. Status: 200. Duration: 5 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 401. Duration: 1 ms {"service":"bookstore-api"}
