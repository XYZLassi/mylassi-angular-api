/**
 * MyLassi.XYZ
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.19.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LessonInfo } from './lessonInfo';
import { LessonPageElement } from './lessonPageElement';


export interface LessonPage { 
    elements?: Array<LessonPageElement>;
    id: number;
    lesson: LessonInfo;
    note: string | null;
    order: number;
}

