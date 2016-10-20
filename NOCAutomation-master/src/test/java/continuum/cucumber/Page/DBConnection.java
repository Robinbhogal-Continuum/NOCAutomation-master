package continuum.cucumber.Page;

import java.sql.Connection;

import continuum.cucumber.DatabaseUtility;
import continuum.cucumber.Utilities;

public class DBConnection {
	
	static DatabaseUtility db=new DatabaseUtility();
	
    static String DBName=Utilities.getMavenProperties("DBName");
    static String DBServerUrl=Utilities.getMavenProperties("DBName");
    static String DBUsername=Utilities.getMavenProperties("DBName");
    static String DBPwd=Utilities.getMavenProperties("DBName");
    
	public static void runQuery(){
		Connection conn=db.createConnection(DBName, DBServerUrl, DBUsername, DBPwd);
		String query="Select top 10 * from jmgttaskmanagement with(NOLOCK)";
		DatabaseUtility.executQuery(conn, query);
	}

}
