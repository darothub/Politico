import dotenv from 'dotenv';

import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

import pool from '../model/database';

import Helper from '../helper/util';

dotenv.config();

class User {
  static signup(req, res) {
    const {
      firstName, lastName, otherName, email, phoneNumber, passportUrl, password,
    } = req.body;
    const reqQuery = {
      text: 'SELECT * FROM users WHERE email=$1',
      values: [email],
    };
    const insQuery = {
      text: 'INSERT INTO users(first_name, last_name, other_name, email, phone_number, passport_url, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      values: [firstName, lastName, otherName, email, phoneNumber, passportUrl,
        bcrypt.hashSync(password, 10)],
    };
    if (!Helper.isValidEmailPassword(req.body)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid email/password',
      });
    }
    if (!Helper.isValidName(req.body)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid firstName/lastName/otherName',
      });
    }
    if (!Helper.isValidPhoneNumber(req.body)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid phone number',
      });
    }
    return pool.query(reqQuery)
      .then((data) => {
        if (data.rowCount === 1) {
          return res.status(409).send({
            status: 409,
            message: 'Email address has already been used',
          });
        }
        return pool.query(insQuery)
          .then((user) => {
            if (user) {
              const token = jwt.sign({
                id: user.rows[0].id,
                email: user.rows[0].email,
                isAdmin: user.rows[0].isAdmin,
              }, process.env.SECRET_KEY, {
                expiresIn: '24h',
              });
              res.status(201).send({
                status: 201,
                data: [token, user.rows[0].first_name, user.rows[0].last_name,
                  user.rows[0].other_name, user.rows[0].passport_url, user.rows[0].email],
              });
            }
          })
          .catch(e => res.send(e));
      })
      .catch(e => res.send(e));
  }
}

export default User;
