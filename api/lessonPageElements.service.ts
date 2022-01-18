/**
 * MyLassi.XYZ
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.19.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { CreateLessonPageElementOption } from '../model/models';
import { LessonPageElement } from '../model/models';
import { PatchLessonPageElementOption } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class LessonPageElementsService {

    protected basePath = 'https://api.mylassi.xyz';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param lessonId 
     * @param pageId 
     * @param elementId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2LessonsLessonIdPagesPageIdElementsElementIdDelete(lessonId: number, pageId: number, elementId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any>;
    public apiV2LessonsLessonIdPagesPageIdElementsElementIdDelete(lessonId: number, pageId: number, elementId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<any>>;
    public apiV2LessonsLessonIdPagesPageIdElementsElementIdDelete(lessonId: number, pageId: number, elementId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<any>>;
    public apiV2LessonsLessonIdPagesPageIdElementsElementIdDelete(lessonId: number, pageId: number, elementId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (lessonId === null || lessonId === undefined) {
            throw new Error('Required parameter lessonId was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsElementIdDelete.');
        }
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsElementIdDelete.');
        }
        if (elementId === null || elementId === undefined) {
            throw new Error('Required parameter elementId was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsElementIdDelete.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (ApiKeyAuth) required
        localVarCredential = this.configuration.lookupCredential('ApiKeyAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Key', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/v2/lessons/${encodeURIComponent(String(lessonId))}/pages/${encodeURIComponent(String(pageId))}/elements/${encodeURIComponent(String(elementId))}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param lessonId 
     * @param pageId 
     * @param elementId 
     * @param patchLessonPageElementOption 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2LessonsLessonIdPagesPageIdElementsElementIdPatch(lessonId: number, pageId: number, elementId: number, patchLessonPageElementOption: PatchLessonPageElementOption, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<LessonPageElement>;
    public apiV2LessonsLessonIdPagesPageIdElementsElementIdPatch(lessonId: number, pageId: number, elementId: number, patchLessonPageElementOption: PatchLessonPageElementOption, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<LessonPageElement>>;
    public apiV2LessonsLessonIdPagesPageIdElementsElementIdPatch(lessonId: number, pageId: number, elementId: number, patchLessonPageElementOption: PatchLessonPageElementOption, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<LessonPageElement>>;
    public apiV2LessonsLessonIdPagesPageIdElementsElementIdPatch(lessonId: number, pageId: number, elementId: number, patchLessonPageElementOption: PatchLessonPageElementOption, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (lessonId === null || lessonId === undefined) {
            throw new Error('Required parameter lessonId was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsElementIdPatch.');
        }
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsElementIdPatch.');
        }
        if (elementId === null || elementId === undefined) {
            throw new Error('Required parameter elementId was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsElementIdPatch.');
        }
        if (patchLessonPageElementOption === null || patchLessonPageElementOption === undefined) {
            throw new Error('Required parameter patchLessonPageElementOption was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsElementIdPatch.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (ApiKeyAuth) required
        localVarCredential = this.configuration.lookupCredential('ApiKeyAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Key', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.patch<LessonPageElement>(`${this.configuration.basePath}/api/v2/lessons/${encodeURIComponent(String(lessonId))}/pages/${encodeURIComponent(String(pageId))}/elements/${encodeURIComponent(String(elementId))}`,
            patchLessonPageElementOption,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param lessonId 
     * @param pageId 
     * @param createLessonPageElementOption 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2LessonsLessonIdPagesPageIdElementsPost(lessonId: number, pageId: number, createLessonPageElementOption: CreateLessonPageElementOption, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<LessonPageElement>;
    public apiV2LessonsLessonIdPagesPageIdElementsPost(lessonId: number, pageId: number, createLessonPageElementOption: CreateLessonPageElementOption, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<LessonPageElement>>;
    public apiV2LessonsLessonIdPagesPageIdElementsPost(lessonId: number, pageId: number, createLessonPageElementOption: CreateLessonPageElementOption, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<LessonPageElement>>;
    public apiV2LessonsLessonIdPagesPageIdElementsPost(lessonId: number, pageId: number, createLessonPageElementOption: CreateLessonPageElementOption, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (lessonId === null || lessonId === undefined) {
            throw new Error('Required parameter lessonId was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsPost.');
        }
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsPost.');
        }
        if (createLessonPageElementOption === null || createLessonPageElementOption === undefined) {
            throw new Error('Required parameter createLessonPageElementOption was null or undefined when calling apiV2LessonsLessonIdPagesPageIdElementsPost.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (ApiKeyAuth) required
        localVarCredential = this.configuration.lookupCredential('ApiKeyAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Key', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<LessonPageElement>(`${this.configuration.basePath}/api/v2/lessons/${encodeURIComponent(String(lessonId))}/pages/${encodeURIComponent(String(pageId))}/elements`,
            createLessonPageElementOption,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
