/**
 * MyLassi.XYZ
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LessonPage } from './lessonPage';


export interface Lesson { 
    id: number;
    name: string;
    owner_id: number;
    pages?: Array<LessonPage>;
    public_id: string;
}

