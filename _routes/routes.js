const express = require( "express" ) ;
const router = express.Router() ;
const Entry = require( '../_entry/schema' )





router.get( '/' , async  (req, res) => { 
        const note = await Entry.find().sort( { createdAt: 'desc' } ) ;
        res.render( '../_pages/public.ejs' , { content: note }  ) 
})

router.get ( '/Create' ,  (req , res) => {    
        res.render( '../_entry/create.ejs' , { note: new Entry() } )    
} )

router.get ( '/Edit/:id' , async (req , res) => {    
        const noteID = await Entry.findById(req.params.id)
        res.render( '../_entry/edit.ejs' , { note: noteID } )    
} )

router.get( '/:id' , async (req, res) => { 
        try{
                const noteID = await Entry.findById(req.params.id)
                if ( noteID == null ) res.redirect( '/' );
                res.render( '../_entry/show.ejs' , { content: noteID } ) 
        }
        catch ( e ) { e }        
} )









router.post( '/' , async (req, res , next ) => {
        req.note = new Entry();  next();        
} , SaveAndRedirect( '/' ) )

router.put( '/:id' , async (req, res , next ) => {
        try { req.note = await Entry.findById(req.params.id) ; next() ; }
        catch (e) { e }
} , SaveAndRedirect( '/' ) )

router.delete( '/:id' , async ( req , res ) =>{
        await Entry.findByIdAndDelete(req.params.id) ; 
        res.redirect( '/' ) ;
} )




function SaveAndRedirect ( path ) {
        return async (req , res) => {
                let  note = req.note ;
                note.title = req.body.title ;
                note.summary = req.body.summary ;
                note.description = req.body.description ;
                try { note = await note.save();  res.redirect( `/${note.id}` );  } 
                catch (e) { res.render( `/${path}` , { note: note } )   }
        }
}



module.exports = router ;