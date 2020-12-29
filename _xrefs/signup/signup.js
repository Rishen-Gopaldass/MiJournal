
function OpenSignup () { Show ( 'IDsignUpPrompt' , 'popup' );  }

function OpenSignUpPrompt () {  
        ServerEmail = document.getElementById( 'IDemail' ).value ; 
        if ( ServerEmail === ""  ) { OpenCreatePro ();  }   
        VerifyAccount () ;
}

function GetAccountDetails () {  
        UserProTypeCreated = document.getElementById( 'IDprofileTypeCreateNew' ).value ; 
        UserNameCreated = document.getElementById( 'IDnameCreateNew' ).value ; 
        UserEmailCreated = document.getElementById( 'IDemailCreateNew' ).value ; 
        UserPasswordCreated = document.getElementById( 'IDpasswordCreateNew' ).value ; 
        UserRememberCreated = document.getElementById( 'IDrememberCreateNew' ).value ; 
        UserAddressCreated = document.getElementById( 'IDaddressCreateNew' ).value ; 
}

function VerifyAccount () {  
        GetAccountDetails () ;
        if ( UserProTypeCreated === "" ) { VerifyAccount ();  }
        if ( UserNameCreated.length < 4 ) { VerifyAccount ();   }
        if ( UserNameCreated.length > 20 ) { VerifyAccount ();   }
        if ( UserEmailCreated  === "" ) { VerifyAccount ();   }
        if ( UserPasswordCreated  === "" ) { VerifyAccount ();   }
        if ( UserPasswordCreated.length < 8 ) { VerifyAccount ();  }
        if ( UserRememberCreated  === "" ) { VerifyAccount ();   }
        if ( UserAddressCreated  === "" ) { VerifyAccount ();   }
        SaveCreateProfileDetailsToServer ();
        DisplayInUserInfo ();
}

function SaveCreateProfileDetailsToServer () {  
        GetAccountDetails () ;
        ServerProType = document.getElementById( 'IDproType' ).value = UserProTypeCreated ; 
        ServerUserName = document.getElementById( 'IDuserName' ).value = UserNameCreated ; 
        ServerEmail = document.getElementById( 'IDemail' ).value = UserEmailCreated ; 
        ServerPassword = document.getElementById( 'IDpassword' ).value = UserPasswordCreated ; 
        ServerRemember = document.getElementById( 'IDremember' ).value = UserRememberCreated ; 
        ServerAddress = document.getElementById( 'IDaddress' ).value = UserAddressCreated ; 
        CloseSignUpPrompt () ; 
}

function DisplayInUserInfo () { 
        SetInnerHTML ( 'IDuserName@home' , ServerUserName ) ;
        SetInnerHTML ( 'IDuserName1' , ServerUserName ) ;
        SetInnerHTML ( 'IDuserName2' , ServerUserName ) ;
        SetInnerHTML ( 'IDuserName3' , ServerUserName ) ;
}
