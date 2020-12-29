
function Show ( ID , showClass ) {   x = document.getElementById( ID ) ;  x.setAttribute( "class" ,  showClass ) ; }

function Hide ( ID ) {    y = document.getElementById( ID ) ;    y.setAttribute( "class" , 'hide'  ) ; }

function SetInnerHTML ( ID , Value ) { document.getElementById ( ID ).innerHTML = Value; }

function RenderLocation ( ID , item ) { document.getElementById( ID ).innerHTML = item ;  }

function Reset ( ID ) { document.getElementById( ID ).value = "" ; }

function SelectToValue ( IDselection , IDinputDisplay ) { 
        magnetOptionSelection = document.getElementById( IDselection ).value ; 
        document.getElementById( IDinputDisplay ).value = magnetOptionSelection ; 
}