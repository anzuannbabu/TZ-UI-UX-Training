var marks = new Array();
var rolls = ['E111','E108','E103','E107','E106'];
rolls[5] = 'E109';
marks.push(88);
marks.push(81);
marks.push(76);
marks.push(65);//Add at the end

marks.unshift(90);//Add at the begining
marks[marks.length] = 59;

marks.splice(1,1,30);
rolls.splice(1,1);

marks.pop();
rolls.pop();//Remove last element

rolls.sort();//Sort contents of given data

for(var i=0;i<marks.length;i++){
	console.log(rolls[i] + "->" + marks[i]);
}

console.log("Scores are: " + marks.join()) //Converts array to a string

console.log("Scores are: ")
marks.forEach(function(value){
	console.log(value);
});

console.log("Is Marks is an Array? " + Array.isArray(marks))