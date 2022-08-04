import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message:string | undefined;
  constructor(private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver){ }

  ngOnInit(): void {
  }
  async loadGreetComponent(){
    
    this.vcref.clear();
    const { WelcomeComponent } = await import('../welcome/welcome.component');
    let greetcomp = this.vcref.createComponent(
      this.cfr.resolveComponentFactory(WelcomeComponent)
    );
    greetcomp.instance.greetMessage = "Data Passed from Parent";
        greetcomp.instance.sendMessageEvent.subscribe(data => {
          this.message = data;
        });
  
  }

}
