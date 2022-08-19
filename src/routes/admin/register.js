const express=require('express');

const { Registercontroller } = require('../../controllers/admin/Registercontroller');

const RegisterRoute=express.Router();

RegisterRoute.post('/get_student',Registercontroller)

exports.RegisterRoute=RegisterRoute