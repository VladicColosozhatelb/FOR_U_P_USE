
import com.google.gson.Gson;
import com.mysql.cj.xdevapi.JsonParser;
import com.mysql.cj.xdevapi.JsonValue;
import javafx.scene.control.Alert;
import jdk.nashorn.internal.ir.debug.JSONWriter;
import jdk.nashorn.internal.parser.JSONParser;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import java.util.ArrayList;
import java.util.Date;

@WebServlet(name = "Initialization")
public class Initialization extends HttpServlet {

    final String URL = "jdbc:mysql://localhost:3306/u_pe";
    final  String USERNAME="root";
    final String PASSWORD="4420002915s";
     protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,
             IOException {
         Connection connection=null;
         PreparedStatement statement = null;
         ResultSet res=null;
         Posts.posts.clear();
         try {
             Class.forName("com.mysql.cj.jdbc.Driver");
             connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/u_pe?serverTimezone=UTC",
                     "root", "4420002915s");
             statement = connection.prepareStatement("select POST_ID,DESCRIPTION,CREATED_AT,PHOTO_LINK," +
                     "LIKES,TAGS,ava,name from u_pe.user inner join u_pe.post on u_pe.post.USER_ID = u_pe.user.USER_ID order by CREATED_AT");
             res = statement.executeQuery();
             String[] hashTags;
             String[] likes;
while(res.next()) {

    hashTags = res.getString(6).split(" ");
    likes = res.getString(5).split(",");
    Posts.posts.add(new Post(res.getInt(1), res.getString(7)
            , res.getString(2), res.getDate(3).toString(),
            res.getString(8), res.getString(4), hashTags, likes));
}
             response.getWriter().write(new Gson().toJson(Posts.posts));
        } catch (SQLException | ClassNotFoundException e) {
             System.out.println("Error");
        }

    }
}