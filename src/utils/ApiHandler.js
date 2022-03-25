import { AxiosHandler } from "./AxiosHandler";
// calling al the api in one place
export class ApiHandler {
    static getLatetstNews(country = 'in', page = 1) {
        return AxiosHandler.get(`/trending?country=${country}&page=${page}`)
    }

    static searchNews(keywords) {
        return AxiosHandler.get(`/search?keywords=${keywords}`)
    }

    static getCategoryNews(category, country = 'in', page = 1) {
        return AxiosHandler.get(`/category-news?category=${category}&country=${country}&page=${page}`)
    }
}