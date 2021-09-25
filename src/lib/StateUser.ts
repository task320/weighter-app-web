import {CognitoUserInterface} from "@aws-amplify/ui-components";

export default interface StateUser {
    signinFlg:boolean;
    sub:string | undefined;
    
}