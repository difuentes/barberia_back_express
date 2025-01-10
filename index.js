import express  from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import servicesRouter from './routes/servicesRoutes.js'
import authRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {db} from './config/db.js'

// Variables de entorno
dotenv.config()

// Configurar la APP
const app = express();

//Conectar a BD
db()

//Configurar CORS
const whitelist = [process.env.FRONT_END_URL,undefined];

if(process.argv[2] === '--postman') {
    whitelist.push(undefined)
}


const corsOptios = {
    origin: function(origin,callback){
        if(whitelist.includes(origin)){
            //Permitir acceso
            callback(null,true);
        }else{
            callback(new Error("Error de CORS"));
        }


    }
}

app.use(cors(corsOptios))


//Leer datos via body
app.use(express.json())
//RUTAS 
app.use('/api/services',servicesRouter)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/users', userRoutes)

//Definir puerto
const PORT = process.env.PORT || 4600

app.listen(PORT,()=>{
    console.log('Elservidor se esta ejecuntando en el puerto',PORT);
})


//   -Demilio