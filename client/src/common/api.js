const baseUrl = location.origin
const serverPath = "api"

const api = axios.create({
    baseURL: baseUrl + '/' +serverPath
})

export {
    api
}