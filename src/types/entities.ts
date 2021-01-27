export type PostType = {
  id: number
  name: string
  message: string
  likesCount: number
};

export type PostsType = {
  profilePage:{
    posts: Array<PostType>,
    newPostText:string
  }

}

