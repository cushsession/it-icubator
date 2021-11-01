
function likes(names) {
2
  // TODO
3
  let len = names.length;
4
  if(len == 0){
5
    return "no one likes this";
6
  }else if(len === 1){
7
    return names[0] + " likes this";
8
  }else if(len === 2){
9
    return names[0]+" and "+ names[1] + " like this"
10
  } else if(names.length === 3){
11
    return names[0]+", "+ names[1] + " and " + names[2] + " like this"
12
  } else {
13
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
14
  }
15
}
 
