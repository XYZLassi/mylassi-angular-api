/**
 * MyLassi.XYZ
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.21.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface LessonPageElementStyle { 
    font_size?: string | null;
    height?: number | null;
    left?: number | null;
    text_align?: LessonPageElementStyle.TextAlignEnum | null;
    top?: number | null;
    width?: number | null;
}
export namespace LessonPageElementStyle {
    export type TextAlignEnum = 'left' | 'right' | 'center' | 'justify';
    export const TextAlignEnum = {
        Left: 'left' as TextAlignEnum,
        Right: 'right' as TextAlignEnum,
        Center: 'center' as TextAlignEnum,
        Justify: 'justify' as TextAlignEnum
    };
}


