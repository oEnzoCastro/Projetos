package app;

import java.sql.Connection;
import java.sql.SQLException;


import dao.DAO;
import dao.UserDAO;

public class app {
    public static void main(String[] args) throws SQLException {

        
        Connection connection = DAO.getConnection();

        UserDAO.createTable();

        UserDAO.insertUser();

        connection.close();

    }
}
