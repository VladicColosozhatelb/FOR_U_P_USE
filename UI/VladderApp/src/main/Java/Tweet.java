import com.google.gson.Gson;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Result;
import java.io.IOException;
import java.sql.*;

@WebServlet(name = "Tweet")
public class Tweet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,
            IOException {
       String photo=request.getParameter("Url");
       String description=request.getParameter("description");
       String hashTags=request.getParameter("Tags");
       String name=request.getParameter("name");

            Connection connection=null;
            PreparedStatement statement = null;
        ResultSet res=null;
        String likes="";
        PreparedStatement statement1 = null;
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/u_pe?serverTimezone=UTC",
                        "root", "4420002915s");
                statement=connection.prepareStatement("select USER_ID from u_pe.user where name='"+name+"'");
                res=statement.executeQuery();
                res.next();
                int id=res.getInt(1);
                connection.prepareStatement("insert into post (USER_ID,DESCRIPTION,CREATED_AT,PHOTO_LINK,LIKES,TAGS)" +
                        " values ('" + id + "','" + description + "',now(),'" + photo + "','" +likes+ "','" + hashTags + "')").executeUpdate();
                statement = connection.prepareStatement("select POST_ID,ava,name,CREATED_AT from  u_pe.user inner" +
                        " join u_pe.post on u_pe.user.USER_ID=u_pe.post.USER_ID order by CREATED_AT");
                res = statement.executeQuery();
                String[] hashtags;
                String[] like;

                int k=0;
                String ava=null;
                String author=null;
                String date=null;
                while (res.next()) {
                    k = res.getInt(1);
                ava = res.getString(2);
                author = res.getString(3);
                 date=res.getDate(4).toString();
            }

                hashtags = hashTags.split(" ");
                like=likes.split(",");
                Post post=new Post(k,ava,description,date
                        ,author,photo,
                        hashtags,like);
                response.getWriter().write(new Gson().toJson(post));
            } catch (SQLException | ClassNotFoundException e) {
                System.out.println("Error");
            }


        }


}
