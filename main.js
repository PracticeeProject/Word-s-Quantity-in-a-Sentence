// =================================================
//  কিভাবে Sentence এর মধ্যে একটি Word কয়বার 
//  ব্যবহৃত হয়েছে তা বের করবো ।
// =================================================
const sentence = "Sumit 5 Lorem ipsum dolor, sit amet consectetur sumit adipisicing elit. Eaque impedit tempora ullam Sumit culpa autem maxime labore eos. Repellat ratione odit nobis voluptate optio sumit voluptatum laborum quaerat, Sumit dolores aliquid culpa nam!";

let matches = sentence.match(/Sumit/ig); //comment:If you change the name sumit it able to give valu result
if(matches){
    occurance =  matches.length;
}
else{
    occurance =  0;
}


console.log(occurance);

// =================================================
//         Same Solving By Ternary Oparator
// =================================================

const sentencee = "Sumit 5 Lorem ipsum dolor, sit amet consectetur sumit adipisicing elit. Eaque impedit tempora ullam Sumit culpa autem maxime labore eos. Repellat ratione odit nobis voluptate optio sumit voluptatum laborum quaerat, Sumit dolores aliquid culpa nam!";

const matchesw = sentencee.match(/Sumits/ig);  //comment:If you change the name sumit it able to give valu result

let occuranceTOW = matchesw ? matchesw.length : 0;

console.log(occuranceTOW);

