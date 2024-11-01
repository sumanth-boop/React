import { GoogleOAuthProvider } from "@react-oauth/google"
import GoogleLoginComponent from "./GoogleLoginComponent"

function Home(){
    return(
        <>
         <GoogleOAuthProvider clientId='926605457285-8jegqt48gsli4r0e8hgejeen6d9k13li.apps.googleusercontent.com'>

<GoogleLoginComponent />
</GoogleOAuthProvider>
        <h1>This is Home page</h1>

        
        </>



    )
}
export default Home