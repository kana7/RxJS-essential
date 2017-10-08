import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// PART 1
/* const simple$ = new Rx.Observable(observer => {
    console.log("Generating observable");
    setTimeout(function() {
        observer.next("an item!");
        setTimeout(function() {
            observer.next("an other item!");
            observer.complete();
        }, 1000);
    }, 1000);
});

const error$ = new Rx.Observable(observer => {
    observer.error(new Error("DANG!"));
});

error$.subscribe(
    item => console.log(`one.next ${item}`),
    error => console.log(`one.error ${error}`),
    () => console.log("one.complete")
);

setTimeout(function() {
    simple$.subscribe({
        next: item => console.log(`two.next ${item}`),
        error(){
            console.log(`two.error ${error}`);
        },
        complete: function() {
            console.log("two.complete"); 
        }
    });
}, 3000); */

// PART 2


function createInterval$(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`);
            observer.next(index++);
        }, time);

        return () => {
            clearInterval(interval);
        }
    });
}

function take$(sourceObservable$, amount) {
    return new Rx.Observable(observer => {
        let count = 0;
        const subscription = sourceObservable$.subscribe({
                next(item){
                    if (count < amount) {
                        observer.next(item);
                        count++;
                    }else {
                        observer.complete();
                    }
                },
                error(error){ observer.error(error);},
                complete(){ observer.complete();}
            });

            return () => subscription.unsubscribe();
    });
}

const everySecond$ = createInterval$(1000);
const eachFive$ = take$(everySecond$, 5);
const subscription = eachFive$.subscribe(createSubscriber("one"));