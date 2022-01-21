export * from './aPI.service';
import { APIService } from './aPI.service';
export * from './files.service';
import { FilesService } from './files.service';
export * from './images.service';
import { ImagesService } from './images.service';
export * from './lessonPage.service';
import { LessonPageService } from './lessonPage.service';
export * from './lessonPageElements.service';
import { LessonPageElementsService } from './lessonPageElements.service';
export * from './lessons.service';
import { LessonsService } from './lessons.service';
export * from './resultStorage.service';
import { ResultStorageService } from './resultStorage.service';
export const APIS = [APIService, FilesService, ImagesService, LessonPageService, LessonPageElementsService, LessonsService, ResultStorageService];
