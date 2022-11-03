import java.io.*;
 
public class browseGames {
 
    public static void main(String[] args) throws Exception
    {
        File file = new File(
            "/Users/zacpalmer1/Desktop/games.txt");
 
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String event;
  
            while ((event = br.readLine()) != null)
                System.out.println(event);
        }
    }
}