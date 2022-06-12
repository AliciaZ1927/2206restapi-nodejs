import express from "express";
import session from "express-session";
import {expressCspHeader, INLINE, NONE, SELF } from 'express-csp-header';
import cors from "cors";

///////////////////seba RWD////////////////////

import zhouRoutes from './routes/rwd/Zhous.routes.js'
import miURoutes from './routes/rwd/miUs.routes.js'
import miORoutes from './routes/rwd/miOs.routes.js'
import miCRoutes from './routes/rwd/miCs.routes.js'
import authRoutes from './routes/rwd/auth.routes.js'


////////////////dyson////////////////

import UsersRoutes from './routes/Users.routes.js'
import OrdersRoutes from './routes/Orders.routes.js'
import VCRoutes from './routes/Vacuumcleaners.routes.js'
import ProductsRoutes from './routes/Products.routes.js'

////////////////////////////////////////////////////////////////////////////////////

const app = express();



//middleware
app.use(express.json());

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({ 
	secret: 'sessionToken',  // 加密用的字串
	resave: false,   // 沒變更內容是否強制回存
	saveUninitialized: false ,  // 新 session 未變更內容是否儲存
	cookie: {
		maxAge: oneDay // session 狀態儲存多久？單位為毫秒
	}
})); 

app.use(expressCspHeader({
  directives: {
      'default-src': [SELF, 'http://localhost:8080/'],
  }
}));
const corsOptions = {
  // origin: [
  //   'http://localhost:8080/', 'http://localhost:8081', 'http://localhost:8082', 'http://localhost:80'
  // ],
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
};

app.use(cors(corsOptions));


/////////////////////////220516RWD//////////////////////////

app.use(zhouRoutes);
app.use(miURoutes);
app.use(miORoutes);
app.use(miCRoutes);
app.use("/api", authRoutes);


/////////////////220620dyson////////////////
app.use(UsersRoutes);
app.use(OrdersRoutes);
app.use(VCRoutes);
app.use(ProductsRoutes);


export default app;