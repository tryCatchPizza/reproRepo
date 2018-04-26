import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// shared services
export { TitleService } from './src/app/shared/services/title.service';

// shared component
export { TestComponent } from './src/app/shared/test-component/test.component';

// shared modules
export { SharedModule } from './src/app/shared/shared.module';
