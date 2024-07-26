import Chance from "chance";

const chance=Chance();
export const fakeUserData=()=>{
    
    console.log(chance.name({middle:true}))
    return chance.name({middle:true});  // Note : chance.name({middle:true})   this give fake data  just 
}
