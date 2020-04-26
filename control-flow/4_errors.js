/**
 * Again it's the usual here
 * try {} catch (err) {} finally {}
 */

 try {
    console.log('prearing to throw');
    throw {'message' : 'throw'};
    //  object.forEach(() => {});  // to test with a bigger exception message
 } catch (err) {
    //notice how we can do a comma and give the exception to see the full stacktrace othewise it's going to be a single line
    
    console.log('we messed up', err)
 } finally {
    console.log('cleaning up');
 }

//
 try {
    console.log('prearing to throw');
    throw {'message' : 'throw'}; // throw 'some helpful message';
 } catch { // notice, we can even ignore the exception here
    console.log('we messed up')
 } finally {
    console.log('cleaning up');
 }
  