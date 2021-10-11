import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  scriptBoolean = false;

  constructor() { }
  Load(files: string[]) {
    if (this.scriptBoolean == false) {
      console.log(this.scriptBoolean)
      for (let file of files) {
        this.scriptBoolean = true;
        let script = document.createElement("script");
        script.src = "./assets/js/" + file + ".js";
        let body = document.getElementsByTagName("body")[0];
        // body.appendChild(script);
        body.insertBefore(script, body.children[1])
      }
    } else {

      console.log(this.scriptBoolean)

    }

  }
}
