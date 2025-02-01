import { Component, inject } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { List } from '../../models/list.model';
import { ToDo } from '../../models/todo.model';
import { BtnComponent } from '../../components/btn/btn.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DialogModule, Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, BtnComponent, NavbarComponent, DialogModule],
  templateUrl: './board.component.html',
  styles: [
    `
        /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  allList: List[] = [
    {
      title: 'To do',
      todos: [
        { id: 1, title: 'Research Angular' },
        { id: 2, title: 'Implement a POC with Angular' },
        { id: 3, title: 'Create a project with Angular' }
      ]
    },
    {
      title: 'In progress',
      todos: [
        { id: 4, title: 'Implement a board page' },
        { id: 5, title: 'Create a new service' },
        { id: 6, title: 'Create a new component' }
      ]
    },
    {
      title: 'Done',
      todos: [
        { id: 7, title: 'Implement a landing page' },
        { id: 8, title: 'Create a new directive' },
        { id: 9, title: 'Create a new pipe' }
      ]
    },
    {
      title: 'Testing',
      todos: [
        { id: 10, title: 'Test the board page' },
        { id: 11, title: 'Test the service' },
        { id: 12, title: 'Test the component' }
      ]
    }

  ];

  dialog = inject(Dialog);
  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo,
      },
    });
    dialogRef.closed.subscribe((output) => {
      console.log(output);
    });
  }

  drop (event: CdkDragDrop<ToDo[], ToDo[], any>) {
    if (event.previousContainer === event.container) {
      // move the item in the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      // Move the item from the previous list to the new list
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

  }

  addList () {
    this.allList.push({
      title: 'New List',
      todos: []
    });
  }
}
