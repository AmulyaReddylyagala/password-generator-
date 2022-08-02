import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length=0;
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  password='';


  onChangeLength(data:any) {
    console.log(data.value);
    //event.value --> input 767868,8787hjgjhg
    var isNumber = false;
    if(isNaN(data.value)){
      isNumber=false;
    }
    else {
      isNumber=true;
    }
    if(isNumber){
      this.length = parseInt(data.value)
    }
    else{
      alert("Entered input is Invalid.Make sure You enter a number as a Input")
    }

    
    // const target=event.target as HTMLInputElement;
    // const parsedValue=parseInt(target.value);

  //   if (!isNaN (parsedValue)){
  //     this.length=parsedValue;
    
  // }

  }

   onChangeUseLetters() {
    this.includeLetters=!this.includeLetters;

  }

  onChangeUseNumbers() {
    this.includeNumbers=!this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols=!this.includeSymbols;

  }

  onButtonClick(){
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols='@!#$$%^&*';

    let validChars='';
    if(this.includeLetters){
      validChars +=letters;
    }

    if(this.includeNumbers){
      validChars+=numbers ;
    }
    
    if(this.includeSymbols){
      validChars+=symbols;
    }


    let generatedPassword='';
    for (let i=0; i<this.length; i++) {
      const index=Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password = generatedPassword;

  }

  func(){
    let x = "jehffe"
    let y:string = "sfdgef"
  }
}
  

