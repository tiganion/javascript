/**
 * Nothing fancy here, it seems to have the usual behaviour
 */
let initialCondition = true;

while(initialCondition){
    console.log('In the while body, as the condition is true');
    initialCondition = false;
}

do {
    console.log('In the do-while body, because it\'s ok ');
} while (initialCondition);


do {
    console.log('In the second do-while body, because it\'s ok ');
    break; // <==
} while (true);
