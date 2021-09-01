console.log('start');
// func 1
function loginUser(email,password ,callback){
setTimeout(()=>{
    
    callback({
        userEmail:email
    });
},3000);
}
// func 2
function userVideos(email,callback)
{
    setTimeout(()=>{

        callback(
            ['video1','video2','video3','video4']
        );
    },2000);

}
const user= loginUser('salman@abc.com' ,'pass1234');
 console.log(user);
userVideos('abc', videos =>{
console.log(videos);
});


console.log('finish');