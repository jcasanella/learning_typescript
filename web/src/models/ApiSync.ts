import axios, { AxiosPromise } from "axios";

export class ApiSync<T extends { id?: number }> {
    constructor(private readonly rootUrl: string) {}

    fetch(id: number): AxiosPromise<T> {
        return axios.get(`${this.rootUrl}/users/${id}`);
    }

    save(data: T): AxiosPromise<T> {
        const { id } = data;

        if (id) {
            return axios.put(`${this.rootUrl}/users/${id}`, data);
        } else {
            return axios.post(`${this.rootUrl}/users`, data);
        }
    }
}