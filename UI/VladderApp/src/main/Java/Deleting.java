import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;

@WebServlet(name = "Deleting")
public class Deleting extends HttpServlet {
    final String URL = "jdbc:mysql://localhost:3306/u_pe";
    final  String USERNAME="root";
    final String PASSWORD="4420002915s";
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
             int id=Integer.parseInt(request.getParameter("id"));
             Connection connection=null;
             PreparedStatement statement = null;
        ResultSet res=null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/u_pe?serverTimezone=UTC",
                    "root", "4420002915s");
            connection.prepareStatement("delete from u_pe.post where POST_ID='"+id+"'").executeUpdate();
            response.getWriter().write(new Gson().toJson(id));
            Posts.deletePost(id);
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error");
        }
    }
}
