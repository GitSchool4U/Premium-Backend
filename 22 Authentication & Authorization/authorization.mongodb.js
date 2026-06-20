// // to enable authorization (go to mongod.cfg)
// security:
//     authorization: enabled

// // create User
// db.createUser({
//     user: 'admin',
//     pwd:'admin',
//     roles: [
//         {
//             role: 'root',
//             db:'admin',
//         }
//     ]
// })

// db.getUsers()

// db.auth('admin','admin')