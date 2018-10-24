function saveUser(user, callback){
    jQuery.post('/users',{
        first:user.firstname,
        last:user.lastname
    },callback)
}