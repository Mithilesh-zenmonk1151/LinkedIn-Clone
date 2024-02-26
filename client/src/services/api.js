const BaseUrl= "http://localhost:4000/api"

export const endPoints={
    signupApi: BaseUrl + "/user/signup",
    loginApi: BaseUrl + "/user/login",
}
export const profileApis = {
    updateProfileApi: BaseUrl + "/users/:id",
    getProfileApi: BaseUrl + "/auth/users",
    getPostsApi: BaseUrl + "/posts",
}
export const postApis ={
    createPostApi: BaseUrl + "/posts",
    editPostApi: BaseUrl + "",
    getAllPostsApis: BaseUrl + "",
    deletePostApis: BaseUrl + "",
    createCommentApi: BaseUrl + "",
    deleteCommentApi: BaseUrl + "",
    editCommentApi: BaseUrl + "",
    createReactionApi: BaseUrl + "",
    updateReactionApi: BaseUrl +"",
    getReactionApi: BaseUrl + "",
    deleteReactionApi: BaseUrl +"",
}
