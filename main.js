const promiseWifeBringingTicks = new promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('ticket');
    } , 3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) =>{
    console.log('husband: we should go in');
    console.log('wife: no i am hungary');
    return new promise((resolve,reject) => resolve('${t} popcorn'));
});
  
const getButter= getPopcorn.then((t) =>{
    console.log('husband: we should go in');
    console.log('wife: no i am hungary');
    return new promise((resolve,reject) => resolve('${t} popcorn'));
});
getButter.then((t)=> console.log(t))
 console.log('person1: shows ticket');
 console.log('person2 : shows ticket');

 const preMovie = async () => 'preMovie';

 preMovie().then((m) => console.log(m));

  
  const getColdDrinks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Husband: I got the cold drinks");
        resolve("cold drinks");
      }, 2000);
    });
}


