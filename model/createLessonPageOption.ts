/**
 * MyLassi.XYZ
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.19.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CreateLessonPageElementOption } from './createLessonPageElementOption';


export interface CreateLessonPageOption { 
    elements?: Array<CreateLessonPageElementOption>;
    note?: string | null;
    previous_page?: number | null;
}

