package dao;

import java.sql.Statement;

public class UserDAO {

        public static boolean createTable() {

        boolean status = false;

        try {

            Statement st = DAO.connection.createStatement();
            String sql = "CREATE TABLE users(id_user serial primary key, name VARCHAR(50), email VARCHAR(100), password VARCHAR(50));";

            st.executeUpdate(sql);

            st.close();

            status = true;
            System.out.println("Table criada!");
        } catch (Exception e) {
            System.err.println("Table NAO criada! = " + e.getMessage());
        }
        
        return status;
    }

    public static boolean insertUser() {
        
        boolean status = false;
        
        try {
            
            Statement st = DAO.connection.createStatement();
            String sql = "INSERT INTO users (name, email, password) VALUES ('Enzo', 'enzocastru@gmail.com', '123456')";
            
            st.executeUpdate(sql);
            
            st.close();
            
            System.out.println("Usuario inserido!");
            status = true;
        } catch (Exception e) {
            System.err.println("Usuario não inserido! = " + e.getMessage());
        }

        return status;
    }

}
