let someAnswer = 'c';

switch (someAnswer){
    case 'a':
        console.log('a was selected');
        // notice this one doesn't have a break, so chosing a will show both options
    case 'b':
        console.log('b was selected');
        break;
    default :
        console.log('something ele was selected');        

}

// don't foghet the breaks, the default case needs it as well
switch (someAnswer){
    default :
        console.log('something ele was selected');     
    case 'a':
        console.log('a was selected');       
    case 'b':
        console.log('b was selected');
        break;     
}