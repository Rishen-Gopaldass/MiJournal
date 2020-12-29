const express = require( "express" ) ;
const app = express ();
const port = 5000;
const router = require( './_routes/routes' );
const mongoose = require( 'mongoose' );
const methodOverride = require( 'method-override' );


mongoose.connect( 'mongodb://localhost:27017/MiJournal' , { useNewUrlParser: true , useUnifiedTopology: true } )
app.set( 'view engine' , 'ejs' );
app.use(express.urlencoded({ extended: false } ));
app.use( methodOverride( '_method' ) );
app.use( router );
app.use( '/_css' , express.static( __dirname + '/_css' ) );
app.use( '/_xrefs' , express.static( __dirname + '/_xrefs' ) );
app.use( '/_media' , express.static( __dirname + '/_media' ) );


app.listen( port , () => console.log( `Listening on port ${port}` ) ) ;