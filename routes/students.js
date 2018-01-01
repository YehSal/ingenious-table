const r = require('rethinkdb');
const router = require( 'express' ).Router();

const connect = require('./../services/connect');
const studentService = require('./../models/student');


router.post('/students', (req, res) => {
  let student = Object.assign( {}, {
    'email': req.body.email,
    'name': req.body.name
  });

    r.db('auth').table( 'students' )
        .insert( student )
        .run( req._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            res.send( result );
        } )
        .catch( error => res.send( error ) );
} );

router.get( '/students', ( req, res ) => {
    r.db( 'auth' ).table( 'students' )
        .run( req._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            res.send( result );
        } )
        .catch( error => res.send( error ) );
} );

router.put( '/students/:student_id', ( req, res ) => {
    let student_id = req.params.student_id;

    r.db( 'auth' ).table( 'students' )
        .get( student_id )
        .update( {
            'email': req.body.email,
            'name': req.body.name
        } )
        .run( req._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            res.send( result );
        } )
        .catch( error => res.send( error ) );
} );

router.delete( '/students/:student_id', ( req, res ) => {
    let student_id = req.params.student_id;

    r.db( 'auth' ).table( 'students' )
        .get( student_id )
        .delete()
        .run( req._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            res.send( result );
        } )
        .catch( error => res.send( error ) );
} );

module.exports = router;