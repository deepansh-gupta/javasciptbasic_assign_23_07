//assignment-1 

var jeff_h = 180/100;       //  1
var todd_h = 200/100;       

var jeff_m = 52                 
var todd_m = 60

 var jeff_bmi =  jeff_m/Math.pow(jeff_h , 2 )   // 2

 var todd_bmi = todd_m/Math.pow(todd_h , 2 )
console.log("jeff bmi is "+ jeff_bmi);
console.log("todd bmi is "+ todd_bmi);
                                                    // 3
function myfunction(name1 , name2){                 
    return name1>name2
}
var greater_bmi = myfunction(jeff_bmi , todd_bmi);
console.log(greater_bmi)

console.log(greater_bmi=== true? "jeff bmi higher than todd": "todd bmi higher than jeff")      // 4

//assignment-2

var heath_team = [89 , 120 , 103]  
            //1
var zane_team = [116 , 94, 123]
var avg1 = (heath_team[0] + heath_team[1] + heath_team[2])/3
var avg2 = (zane_team[0] + zane_team[1] + zane_team[2])/3
console.log(avg1)
console.log(avg2)
console.log((avg1>avg2)? "heath_team "+ avg1 : "zane_team " + avg2) // 2

// heath_team[0]= 108

var Newavg1 = heath_team.map(item => {
    if(item === 89) {
      heath_team[0] = 111;
    }
    return item;
});
console.log(Newavg1)

var Newavg1 = (heath_team[0] + heath_team[1] + heath_team[2])/3   
console.log(heath_team[0])
                                            // 3
var newValues = (Newavg1, avg2) => {
    if(Newavg1==avg2){
        console.log("match tie" + Newavg1)
    }
    else if(Newavg1>avg2){
        console.log("heath winner"+ Newavg1)
    }
    else
        console.log("zane winner"+avg2)
};
newValues(Newavg1, avg2)
