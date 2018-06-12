import { Directive,Input } from '@angular/core';
import { Validator,  NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateEqual]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomValidator, multi: true}]
})

export class CustomValidator implements Validator {
 
    @Input() validateEqual : string;
  validate(confirmemail: AbstractControl): {[key: string]: any} | null{
    if(confirmemail.value == null)
      return null;
const email = confirmemail.parent.get(this.validateEqual);
    if(email && email.value !== confirmemail.value){
      return {"pattern": true};
    }else  return null;
  }
}