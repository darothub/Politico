import dotenv from 'dotenv';

import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

import pool from '../model/database';

import Helper from '../helper/util';

dotenv.config();


class User {
  static signup(req, res) {
    const {

      userId, firstName, lastName, otherName, email, phoneNumber, passportUrl, password,
    } = req.body;
    const selQuery1 = {
      text: 'SELECT * FROM users WHERE email=$1',
      values: [email],
    };
    const selQuery2 = {
      text: 'SELECT * FROM users WHERE user_ids =$1',
      values: [userId],
    };
    const insQuery = {
      text: 'INSERT INTO users(user_ids, first_name, last_name, other_name, email, phone_number, passport_url, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      values: [userId, firstName, lastName, otherName, email, phoneNumber, passportUrl,
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

    if (!Helper.isValidUserNumber(req.body)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid user ID/phone number',
      });
    }
    return pool.query(selQuery1)
      .then((data) => {
        if (data.rowCount === 1) {
          return res.status(409).send({
            status: 409,
            message: 'Email address has already been used',
          });
        }
        return pool.query(selQuery2)
          .then((user) => {
            if (user.rowCount === 1) {
              return res.status(409).send({
                status: 409,
                message: 'User ID is invalid',
              });
            }
            return pool.query(insQuery)
              .then((userData) => {
                if (userData) {
                  const token = jwt.sign({
                    id: userData.rows[0].user_id,
                    isAdmin: userData.rows[0].is_admin,
                  }, process.env.SECRET_KEY, {
                    expiresIn: '365d',
                  });
                  res.status(201).json({
                    status: 201,
                    data: {
                      token,
                      user_ids: userData.rows[0].user_id,
                      firstName: userData.rows[0].first_name,
                      lastName: userData.rows[0].last_name,
                      otherName: userData.rows[0].other_name,
                      passport: userData.rows[0].passport_url,
                      email: userData.rows[0].email,
                    },
                  });
                }
              })
              .catch(e => res.json({ error: 'Database error', code: e.code }));
          })
          .catch(e => res.json({ error: 'Database error', code: e.code }));
      })
      .catch(e => res.json({ error: 'Database error', code: e.code }));
  }

  static signin(req, res) {
    // const { username, email, password } = req.body;
    const selQuery = {
      text: 'SELECT * FROM users WHERE email=$1',
      values: [req.body.email],
    };
    if (!Helper.isValidEmailPassword(req.body)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid email/password',
      });
    }
    return pool.query(selQuery)
      .then((data) => {
        if (data.rowCount === 0) {
          return res.status(404).json({
            status: 404,
            message: 'User not found',
          });
        }
        if (bcrypt.compareSync(req.body.password, data.rows[0].password)) {
          const token = jwt.sign({
            id: data.rows[0].id,
            is_admin: data.rows[0].is_admin,
          }, process.env.SECRET_KEY, {
            expiresIn: '365d',
          });
          return res.status(200).json({
            status: 200,
            data: {
              token,
              user_ids: data.rows[0].user_id,
              firstName: data.rows[0].first_name,
              lastName: data.rows[0].last_name,
              otherName: data.rows[0].other_name,
              email: data.rows[0].email,
            },
            message: 'You have successfully signed in',
          });
        }
        return res.status(401).json({
          status: 401,
          message: 'Unauthorised access',
        });
      })
      .catch(e => res.json({ error: 'Database error', code: e.code }));
  }
}

export default User;
