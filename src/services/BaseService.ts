import axios, {  AxiosError, type AxiosResponse, type Canceler }  from 'axios';
import $http from '@/plugin/api';


export type ServiceObject<R> = [Promise<R>, Canceler | null];

export const Get = <R>(url: string = '', query?: { [key: string]: any }): ServiceObject<R> => {
    let requestCanceler: Canceler | null = null;

   
    const request = new Promise<R>((resolve, reject) => {
        $http.get(url, { params: query, cancelToken: new axios.CancelToken((c) => requestCanceler = c) })
            .then((resp: AxiosResponse<R>) => {
                resolve(resp.data);
            })
            .catch((error: AxiosError) => {
                reject(error);

            });
    });

    return [request, requestCanceler];
};


export const Post = <M, R>(url: string, model: M): ServiceObject<R> => {
    let requestCanceler: Canceler | null = null;

    const request = new Promise<R>((resolve, reject) => {
        $http.post<M, AxiosResponse<R>>(url, model, {
            cancelToken: new axios.CancelToken((c) => requestCanceler = c),
        })
            .then((resp) => {
                resolve(resp.data);
            })
            .catch((error: AxiosError) => {
                reject(error);
            });
    });

    return [request, requestCanceler];
};