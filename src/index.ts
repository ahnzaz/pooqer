import { fromEvent, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AjaxResponse } from 'rxjs/ajax';
import liveList from './ajax/liveList';


((_w: Window): void => {
    const testbtn1: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#testbtn1');

    if (testbtn1) {
        fromEvent(testbtn1, 'click')
            .pipe(
                switchMap((): Observable<JSON> => liveList())
            ).subscribe((response: JSON): void => {
                const body = document.querySelector('#testbody')!

                body.innerHTML = JSON.stringify(response);
            })
    }
})(window);