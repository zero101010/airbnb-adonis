'use strict'

const UserController = require('../app/Controllers/Http/UserController')
const SessionController = require('../app/Controllers/Http/SessionController')
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/user',"UserController.create")
Route.get('/user',"UserController.find")
Route.post('/auth',"SessionController.auth")