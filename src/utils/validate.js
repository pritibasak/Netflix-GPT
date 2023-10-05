export const checkValidData=(email,password)=>{

    const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u.test(email) ;  //regEx pattern to check valid email

    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    //const isNameValid=/^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

    //if(!isNameValid) return "Name is not valid"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    
    return null; //if both email & passwords are correct
}
