import java.util.Random;
import java.util.Scanner;

public class Aleatorio {

    public static String change(char char1, char char2, String txt, int pos){
        

        //System.out.println(char1 + " + " + char2);

        if(pos < 0){
            return "";
        }

        if(txt.charAt(pos) == char1){
            return  change(char1, char2, txt, pos-1) + char2;
        } else {
            return change(char1, char2, txt, pos-1) + txt.charAt(pos);
        }
        
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        String txt = scan.nextLine();

        Random rand = new Random();
        rand.setSeed(4);
        char char1;
        char char2;
        while (!txt.equals("FIM")) {
            
            char1 = (char) ('a' + (Math.abs(rand.nextInt()) % 26));
            char2 = (char) ('a' + (Math.abs(rand.nextInt()) % 26));
            
            System.out.println(change(char1, char2, txt, (txt.length()-1)));

            txt = scan.nextLine();
        }
        scan.close();
    }
}
