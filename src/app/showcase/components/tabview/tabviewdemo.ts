import {Component} from '@angular/core';
import {MessageService} from '@nanitor/primeng/api';

@Component({
    templateUrl: './tabviewdemo.html',
    providers: [MessageService]
})
export class TabViewDemo {
    
    constructor(private messageService: MessageService) {}
    
    onTabChange(event) {
        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
}
