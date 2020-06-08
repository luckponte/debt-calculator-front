import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from "./configuration.service";
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private configurationService:ConfigurationService) { }
  configs:any;

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

  validateData()
  {
    for(let i in this.configs)
    {
      if(!this.configs[i] || this.configs[i] < 0 || Number.isNaN(this.configs[i]))
      {
        return false;
      }
    }


  }
}
