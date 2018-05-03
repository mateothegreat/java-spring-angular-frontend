import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CakesService} from '../_lib/cakes.service';
import {Cake} from '../_lib/Cake';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-cakes-manage',
    templateUrl: './cakes-manage.component.html',
    styleUrls: ['./cakes-manage.component.scss']
})
export class CakesManageComponent implements OnInit {

    private cakeId: number;
    private cake: Cake;

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }, {

        path: '/cakes',
        title: 'Cakes'

    }];

    public formGroup: FormGroup = new FormGroup({

        title: new FormControl('', Validators.required),
        description: new FormControl(),
        image: new FormControl()

    }, {updateOn: 'blur'});

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private cakesService: CakesService,
                       private toastr: ToastrService) {

        this.route.params.subscribe((params) => {

            if (params.cakeId) {

                this.cakesService.getById(params.cakeId).subscribe((cake: Cake) => {

                    this.cake = cake;

                    this.formGroup.controls['title'].setValue(cake.title);
                    this.formGroup.controls['description'].setValue(cake.description);
                    this.formGroup.controls['image'].setValue(cake.image);

                });

            }

        });

    }

    public ngOnInit() {
    }

    public onButtonDeleteClick(e: any): void {

        this.cakesService.deleteById(this.cake.id).subscribe(() => {

            this.toastr.success(`The cake "${this.cake.title}" has been deleted!`);

            this.router.navigate(['/cakes']);

        });

    }

    public onButtonSaveClick(e: any): void {

        if (this.cake && this.cake.id) {

            this.cakesService.updateById(this.cake.id, this.formGroup.value).subscribe((e: any) => {

                this.toastr.success(`Your changes have been saved!'`);

            });

        } else {

            this.cakesService.create(this.formGroup.value).subscribe((cake: Cake) => {

                this.toastr.success(`The cake "${cake.title}" has been created!`);
                this.router.navigate([`/cakes/${cake.id}`]);

            });

        }

    }

}
