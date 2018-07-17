import { Component, OnInit, NgZone } from '@angular/core';
import { PlaygroundService } from './../playground.service';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'tcb-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

    public foods;
    formControls: { [key: string]: FormControl } = {};
    newFoodForm: FormGroup;

    constructor(private _playgroundService: PlaygroundService, private zone: NgZone) {
        this.formControls = {
            'name': new FormControl('', Validators.compose([Validators.required]))
        };
        this.newFoodForm = new FormGroup(this.formControls);
    }

    ngOnInit() {
        this.getFoods();
    }

    getFoods() {
        this._playgroundService.getFoods().subscribe(
            data => {this.foods = data; },
            err => console.error(err),
            () => console.log('done loading foods')
        );
    }

    postFood() {
        this._playgroundService.postFoods(this.newFoodForm.value.name).subscribe(
            data => {console.log(data); },
            err => console.log(err),
            () => console.log('new food added')
        );
    }
}
