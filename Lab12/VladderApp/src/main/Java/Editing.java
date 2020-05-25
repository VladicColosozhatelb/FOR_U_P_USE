import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@WebServlet(name = "Editing")
public class Editing extends HttpServlet {
    final String URL = "jdbc:mysql://localhost:3306/u_pe";
    final  String USERNAME="root";
    final String PASSWORD="4420002915s";
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Connection connection=null;
        PreparedStatement statement = null;
      String description=request.getParameter("description");
      int id=Integer.parseInt(request.getParameter("id"));
      String photo=request.getParameter("Url");
      String tags=request.getParameter("tags");
        try {
            System.out.println(id);
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/u_pe?serverTimezone=UTC",
                    "root", "4420002915s");
            connection.prepareStatement("update u_pe.post set DESCRIPTION='"+description+"',PHOTO_LINK='"+photo+"'," +
                    "CREATED_AT=now(), TAGS='"+tags+"' where POST_ID='"+id+"'").executeUpdate();
            Posts.editPost(description,photo,tags,id);
            response.getWriter().write(new Gson().toJson(Posts.getPost(id)));
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error");
        }
    }
}
