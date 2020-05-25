import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;

@WebServlet(name = "Likes")
public class Likes extends HttpServlet {
    final String URL = "jdbc:mysql://localhost:3306/u_pe";
    final  String USERNAME="root";
    final String PASSWORD="4420002915s";
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
          int id=Integer.parseInt(request.getParameter("id"));
          String name=request.getParameter("name");
        Connection connection=null;
        ResultSet res=null;
        PreparedStatement statement = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/u_pe?serverTimezone=UTC",
                    "root", "4420002915s");
            statement=connection.prepareStatement("select LIKES from u_pe.post where POST_ID='"+id+"'");
            res=statement.executeQuery();
            int wow=-1;
            res.next();
            String[] likes=res.getString(1).split(",");
            for(int i=0;i<likes.length;++i)
            {
                if(likes[i].equals(name))
                {
                    wow=i;
                    break;
                }
            }
            String result = "";
            if(wow!=-1)
            {
                for(int i=0;i<likes.length;++i)
                {
                    if(i!=wow)
                    {
                        result=result.concat(likes[i]);
                        if(i!=likes.length-1)
                           result=result.concat(",");
                    }
                }
                connection.prepareStatement("update u_pe.post set LIKES='"+result+"' where POST_ID='"+id+"'").executeUpdate();
                likes=result.split(",");

                Posts.getPost(id).setLikes(likes);
            }
            else
            {
                for(int i=0;i<likes.length;++i)
                {
                        result=result.concat(likes[i]);
                        result=result.concat(",");
                }
                result=result.concat(name);
                connection.prepareStatement("update u_pe.post set LIKES='"+result+"' where POST_ID='"+id+"'").executeUpdate();
                likes=result.split(",");
                Posts.getPost(id).setLikes(likes);
            }
            statement=connection.prepareStatement("select POST_ID,ava,name,CREATED_AT,DESCRIPTION,PHOTO_LINK,LIKES,TAGS from  u_pe.user inner join u_pe.post on u_pe.user.USER_ID=u_pe.post.USER_ID where POST_ID='"+id+"'");
            res=statement.executeQuery();
            res.next();
            String[] hashtags;
            String[] like;
            hashtags=res.getString(8).split(" ");
            like=res.getString(7).split(",");
           Post post=new Post(res.getInt(1),res.getString(2),res.getString(5),
                   res.getDate(4).toString(),res.getString(3),res.getString(6),hashtags,like);
            response.getWriter().write(new Gson().toJson(post));
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error");
        }
    }

}
