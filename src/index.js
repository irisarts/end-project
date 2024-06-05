import express from "express";
import 'dotenv/config';
import log from './middleware/logMiddleware.js';
import loginRouter from './routes/login.js';
import userRouter from './routes/users.js'
import reviewRouter from './routes/reviews.js'
import propertyRouter from './routes/properties.js'
import hostRouter from './routes/hosts.js'
import bookingRouter from './routes/bookings.js'
import amenityRouter from './routes/amenities.js'
import errorHandler from "./middleware/errorHandler.js";
import * as Sentry from "@sentry/node";


const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({tracing: true}),
    new Sentry.Integrations.Express({app})
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());

app.use(log);

app.use('/login', loginRouter)
app.use('/users', userRouter)
app.use('/reviews', reviewRouter)
app.use('/properties', propertyRouter)
app.use('/hosts', hostRouter)
app.use('/bookings', bookingRouter)
app.use('/amenities', amenityRouter)

app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
