import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  City()
  {
    let cities= ["MUMBAI","DELHI","BANGLORE","CHENNAI","KOLKATA",'AHMEDABAD'];
    var flag = 0;
    var jason;
    var i;
    var val = "mumbai";
    if(val == "")
      alert("Mention city");
    
      val = val.toUpperCase();
    for(i=0;i<cities.length;i++)
    {
         if(val == cities[i])
            {
               flag = 1;
               jason = {"City": val};
               jason = JSON.stringify(jason);
               alert("Yes availabe");
               
            }
    }  
    if(flag != 1)
       alert("Sorry we don't have any outlets in your city");
       
  }
}

