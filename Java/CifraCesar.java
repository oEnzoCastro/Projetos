import java.util.Scanner;

public class CifraCesar {

    public static String cifraCesar(String txt) {
        
        return cifraCesar(txt, txt.length()-1);
        
    }

    private static String cifraCesar(String txt, int pos) {

        if (pos >= 0) {
            if (txt.charAt(pos) == 65533) {
                return cifraCesar(txt, pos-1) + (char)(txt.charAt(pos));
            }
            return cifraCesar(txt, pos-1) + (char)(txt.charAt(pos) + 3);
        } else {
            return "";
        }

    }

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        String text = scan.nextLine();
        
        while (!text.equals("FIM")) {
            
            System.out.println(cifraCesar(text));
            
            text = scan.nextLine();

        }
        
        scan.close();
    }
}
