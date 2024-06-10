
const validation = (values) => {
 let errors={};
 if(!values.username){
    errors.username="name is required"
 }
 if(!values.email){
    errors.email ="email is required"
 }
 if(values.password){
    errors.password="password is needed"
 }else if(values.password.lenght < 5){
    errors.password=" password must be more than 5 characters"
 }
 if(!values.confirmpassword){
    errors.confirmpassword="password must be more than 5 characters"
 }
 return errors
}

export default validation