export const emailValidator = (email, message) => {
    const emailState = {
        state: false,
        message: message
    }

    if (!email) {
        emailState.state = false;
        emailState.message = 'email_required';
        return emailState;
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {  
        emailState.state = false;
        emailState.message = "incorrect_email_format";
        return emailState;
    }

    emailState.state = true;
    emailState.message = "";
    return emailState;
}

export const passwordValidator = (password, state, message) => {
    const passwordState = {
        state: state,
        message: message
    }
    
    if(!password) {
        passwordState.state = false;
        passwordState.message = "password_required";
        return passwordState;
    } else if (password.length < 8) {
        passwordState.state = false;
        passwordState.message = "invalid_password";
        return passwordState;
    }
    passwordState.state = true;
    passwordState.message = "";
    return passwordState;
}

export const confirmPasswordValidator = (confirmPassword, form, message) => {
    const confirmPasswordState = {
        state: false,
        message: message
    }
    
    if (!confirmPassword) {
        confirmPasswordState.state = false;
        confirmPasswordState.message = "confirm_password_required";
        return confirmPasswordState; 
    } else if (confirmPassword.length < 8) {
        confirmPasswordState.state = false;
        confirmPasswordState.message = "invalid_confirm_password";
        return confirmPasswordState;
    } else if (confirmPassword !== form.password) {
        confirmPasswordState.state = false;
        confirmPasswordState.message = "incorrect_confirm_password";
        return confirmPasswordState;
    }
    confirmPasswordState.state = true;
    confirmPasswordState.message = "";
    return confirmPasswordState;
}

export const formValidator = (emailState, passwordState, confirmPasswordState) => {
       if (emailState && passwordState && confirmPasswordState){
        return true;
       } 
       return false;
}
