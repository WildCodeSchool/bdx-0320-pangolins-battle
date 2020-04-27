import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewAlgo } from '../../../classes/new-algo';
import { AlgorithmService } from '../../../shared/services/algorithm/algorithm.service';

@Component({
  selector: 'btd-algo-form',
  templateUrl: './algo-form.component.html',
  styleUrls: ['./algo-form.component.scss']
})
export class AlgoFormComponent implements OnInit {

  display = true;
  algos: NewAlgo [] = [];

  @Input() isHidden;

  @Input() editedAlgo;

  // en attende de solution avec Hugo
  // @Output() changedAlgo = new EventEmitter();

  // finalAlgo = {};
  constructor(private editAlgoService: AlgorithmService) { }

  initializeAlgoList(){
    const algos$ = this.editAlgoService.getAllAlgo();
    algos$.subscribe((algos: NewAlgo[]) => this.algos = algos);
  }

  ngOnInit(): void {
  }


  displayForm(){
    this.display = this.isHidden;
    console.log(this.display);
  }

  //   donneesFormVersParent(){
  //   // Manque le level dans l'API + Title inutile + Manque skeleton
  //   const finalAlgo = {
  //     id: this.editedAlgo.id,
  //     title: this.editedAlgo.skeleton,
  //     solution: this.editedAlgo.solution,
  //     instructions: this.editedAlgo.instructions};

  //   console.log(typeof finalAlgo.id);
  //   console.log(this.editAlgoService.BASE_URL);
  //   console.log(finalAlgo.id.toString());
  //   console.log(this.editAlgoService.BASE_URL + finalAlgo.id.toString());

  //   this.editAlgoService.editAlgo(finalAlgo).subscribe(() => {
  //     this.initializeAlgoList();
  //   });
  //   console.log(finalAlgo);
  //   this.displayForm();
  // }
  // en attente de solution avec Hugo
  // donneesFormVersParent(){
  //   // Manque le level dans l'API + Title inutile + Manque skeleton
  //   this.finalAlgo = {
  //     id: this.editedAlgo.id,
  //     title: this.editedAlgo.skeleton,
  //     solution: this.editedAlgo.solution,
  //     instructions: this.editedAlgo.instructions};
  //   this.changedAlgo.emit(this.finalAlgo);
  //   console.log(this.finalAlgo);
  //   this.displayForm();
  // }
}
