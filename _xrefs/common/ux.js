function Slider ( ID , background  ) {   
        a = document.getElementById( ID ).className ;
        if ( a === 'sliderClose' + " " + background ) { CloseAllSliders () ; Show ( ID , 'sliderOpen' + " " + background ) ;  }
        if ( a === 'sliderOpen' + " " + background ) {  Show ( ID , 'sliderClose' + " " + background ) ;   }
}
function CloseCategorySlider () { Show( 'IDcategory' , 'sliderClose' + " " + 'BGRturquoise' ) ; ContractCategories (); ShowCategoryBtn (); ShowTitleInPieceSlider ();  }
function CloseAllSliders () {  Show ( "IDinvite" ,'sliderClose' + " " + 'BGRpink' ) ; Show ( "IDfilter" , 'sliderClose' + " " + 'BGRgreen'  ) ; CloseCategorySlider () ; }

function OpenInvite () { Slider ( 'IDinvite' , 'BGRpink'  ) ;  }
function OpenFilter () { Slider ( 'IDfilter' , 'BGRgreen'   ) ;  }
function OpenCreate () {  Slider  ( 'IDcategory' , 'BGRturquoise'  ) ; ContractCategories (); ShowCategoryBtn (); ShowTitleInPieceSlider ();   }



// Cancel Confirmation
function OpenCancelConfirmation () {  Show( 'IDcancelConfirmation' , 'popup' );   }
function HideCancelConfirmation () {  Hide( 'IDcancelConfirmation' );   }