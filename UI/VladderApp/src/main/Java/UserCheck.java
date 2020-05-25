import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;

@WebServlet(name = "UserCheck")
public class UserCheck extends HttpServlet {
    final String URL = "jdbc:mysql://localhost:3306/u_pe";
    final  String USERNAME="root";
    final String PASSWORD="4420002915s";
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Connection connection=null;
        PreparedStatement statement = null;
        ResultSet res=null;
        String name=request.getParameter("name");
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/u_pe?serverTimezone=UTC",
                    "root", "4420002915s");
            statement=connection.prepareStatement("select ava from u_pe.user where name='"+name+"'");
            res=statement.executeQuery();
            res.next();
            String[] tags = new String[0];
            String[] likes=new String[0];
            Post post=new Post(0,res.getString(1),"1","1",name,"1",tags,likes);
            response.getWriter().write(new Gson().toJson(post));
        } catch (SQLException | ClassNotFoundException e) {
            response.setStatus(400);
        }
    }
}
