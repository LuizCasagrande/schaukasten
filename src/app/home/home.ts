import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {Button} from 'primeng/button';
import {TitleCasePipe} from '@angular/common';
import {Repository} from '../github/repository';
import {Github} from '../github/github';
import {environment} from '../../environments/environment';
import {Seo} from '../seo/seo';

@Component({
  selector: 'app-home',
  imports: [
    Button,
    TitleCasePipe,
  ],
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {

  protected loaded = signal(false);
  protected repos: Repository[] = [];
  protected personalInfo: PersonalInfo = {
    name: environment.name,
    github: environment.github,
    linkedin: environment.linkedin,
    email: environment.email,
  };

  constructor(private github: Github,
              private seo: Seo) {
  }

  ngOnInit(): void {
    this.seo.updateMetadata(
      'Luiz Casagrande',
      'A Software Engineer from Brazil',
      'https://luizcasagrande.dev/favicon.ico',
      'https://luizcasagrande.dev/home',
    );

    this.github.getData().subscribe(r => {
      this.repos = r.filter(e => !e.isFork);
      this.loaded.update(() => true);
    });
  }

  ngOnDestroy(): void {
    this.loaded.update(() => false);
  }
}

interface PersonalInfo {
  name: string,
  github: string,
  linkedin: string,
  email: string,
}
