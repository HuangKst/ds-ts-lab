import {Friend, Colleague,EmailContact} from './myTypes'
import { friends,colleagues } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}
function allOrder(friends : Friend[]) : string[] {
    return friends.map(f=>{
        f.age += 1;
        return `${f.name} is now ${f.age}`
    })
}  

// console.log(allOrder(friends))
// console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}


function addColleague (cs: Colleague[], name:string,department:string,email:string): void{
    const maxExtension = highestExtension(cs).contact.extension;
    const newColleague: Colleague = {
        name,
        department,
        contact:{
            email,
            extension:maxExtension+1,
        }
    };
    cs.push(newColleague);
}

function addInterest(f:Friend,interest:string):string[]{
    if(!f.interests){
        f.interests=[];
    }
    f.interests.push(interest);
    return f.interests;
}
console.log(addInterest(friends[1], 'Politics'))




function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
//   // Test invocations
//   console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
//   console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
//   console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  

function findFriends(
    friends:Friend[],
    criterion:(friend:Friend)=>boolean
): string[]{
    return friends.filter(criterion).map(friend => friend.name)

}
// console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
// console.log(findFriends(friends, (friend) => friend.age < 35));

