import axios, { AxiosResponse } from 'axios';
import { PostModel } from './models/PostModel';

const baseURL = 'http://10.0.2.2:3001';

class Api {
    async getPosts(): Promise<AxiosResponse<PostModel[]>> {
        return axios.get<PostModel[]>(`${baseURL}/posts`);
    }

    async addPostModel(
        PostModel: PostModel,
    ): Promise<AxiosResponse<PostModel>> {
        return axios.post<PostModel>(`${baseURL}/posts`, PostModel);
    }
}

export default new Api();
