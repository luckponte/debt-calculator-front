import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from "./configuration.service";
import { of } from 'rxjs';
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private configurationService:ConfigurationService) { }
  configs:any;
  error:any = {
    maxParcels:false,
    comission:false,
    interestRate:false
  };

  ngOnInit(): void
  {
    this.getConfs()
  }

  getConfs()
  {
    this.configurationService.getConf().toPromise().then((conf)=>{
        this.configs = conf[0];

        console.log("configs: ",this.configs);
      }).catch((err)=>{
        console.error("[configuration.component.ts] Error: ", err);
      });
  }

  updateConfs()
  {
    this.configurationService.updateConf(this.configs).toPromise().then((response)=>{
      console.log("Sucessful Update: ", response)
    }).then((err)=>{
      console.error("[configuration.component.ts] Error: ", err);
    })
  }

  validateData()
  {
    this.error = {
      maxParcels:false,
      comission:false,
      interestRate:false
    };

    for(let i in this.configs)
    {
      if(!this.configs[i] || this.configs[i] < 0 || Number.isNaN(this.configs[i]))
        this.error[i] = true;
    }

    for(let i in this.error)
      if(this.error[i])
        return false;

    this.updateConfs()
  }
}
