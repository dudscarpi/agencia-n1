import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  cadastrado() {
    this.snackBar.open('Cadastrado com sucesso!', 'Ok', {
      duration: 5000,
      horizontalPosition: 'center',
    })
  }

}
