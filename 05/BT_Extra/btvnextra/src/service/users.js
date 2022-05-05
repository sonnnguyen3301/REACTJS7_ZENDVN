import api_GitHub from "./apiGitHub";

export const UserList = {
    getList(
    //     {
    //     login
    // }
    ){
        return api_GitHub.get(`/users`
        // ,{
            // params:{
                // login: login
            // }
        // }
        )
    }
}