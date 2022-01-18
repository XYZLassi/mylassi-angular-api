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
import { LessonPageElementStyle } from './lessonPageElementStyle';


export interface CreateLessonPageElementOption { 
    content?: string;
    style?: LessonPageElementStyle;
    type: CreateLessonPageElementOption.TypeEnum;
}
export namespace CreateLessonPageElementOption {
    export type TypeEnum = 'TextElement' | 'MarkdownElement' | 'ImageElement' | 'YoutubeElement';
    export const TypeEnum = {
        TextElement: 'TextElement' as TypeEnum,
        MarkdownElement: 'MarkdownElement' as TypeEnum,
        ImageElement: 'ImageElement' as TypeEnum,
        YoutubeElement: 'YoutubeElement' as TypeEnum
    };
}


