import java.util.ArrayList;
import java.util.Date;

class Posts {

   static ArrayList<Post> posts = new ArrayList<Post>();

    public Posts(){
       ArrayList<Post> posts = new ArrayList<Post>();
    }

    static public Post getPost(int id){

        for(int i = 0; i < Posts.posts.size(); i++) {
            if (Posts.posts.get(i).getId() == id) {
                return (new Post(Posts.posts.get(i).getId(),Posts.posts.get(i).getAva(),
                        Posts.posts.get(i).getDescription(),new Date().toString(),Posts.posts.get(i).getAuthor(),
                        Posts.posts.get(i).getPhotoLink(),Posts.posts.get(i).getHashTags(),
                        Posts.posts.get(i).getLikes()));
            }
        }

        return null;
    }
   static public ArrayList<Post> getPosts(int k)
    {
        if(k>Posts.posts.size())
            return null;
        ArrayList<Post> help= new ArrayList<Post>();
        for(int i=k;i<Posts.posts.size() || i<k+10;++i)
        {
            help.add(Posts.getPost(i));
        }
        return help;
    }
    static public boolean AddPost(Post post){

        Posts.posts.add(post);
        return true;
    }

     static public boolean editPost(String description,String url,String tags,int id){

        for(int i = 0; i < Posts.posts.size(); i++) {
            if (Posts.posts.get(i).getId() == id) {
                String[] help=tags.split(" ");
                Posts.posts.get(i).setDescription(description);
                Posts.posts.get(i).setHashTags(help);
                Posts.posts.get(i).setPhotoLink(url);
                return true;
            }
        }

        return false;
    }

     static public boolean deletePost(int id){

        for(int i = 0; i < Posts.posts.size(); i++) {
            if (Posts.posts.get(i).getId() == id) {
                Posts.posts.remove(i);
                return true;
            }
        }
        return false;
    }
}
