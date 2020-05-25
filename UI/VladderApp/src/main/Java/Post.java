import java.util.ArrayList;
import java.util.Date;
public class Post {
        private int id ;
        private String ava;
        private String description;
        private String createdAt;
        private String author;
        private String photoLink;
        private String[] hashTags;
        private String[] likes;
        public Post(int id,String ava, String description, String createdAt, String author, String photoLink,String[] hashTags,String[] likes)
        {
            this.id = id;
            this.ava=ava;
            this.description = description;
            this.createdAt = createdAt;
            this.author = author;
            this.photoLink = photoLink;
            this.likes=likes;
            this.hashTags=hashTags;
        }

    public void setId(int id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setHashTags(String[] hashTags) {
        this.hashTags = hashTags;
    }

    public void setLikes(String[] likes) {
        this.likes = likes;
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }
    public String getAva() {
        return this.ava;
    }
    public String getCreatedAt() {
        return createdAt;
    }

    public String getAuthor() {
        return author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public String[] getHashTags() {
        return hashTags;
    }

    public String[] getLikes() {
        return likes;
    }
}
