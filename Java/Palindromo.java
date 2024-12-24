import java.util.Scanner;

public class Palindromo {

    private static String palindromo(String x){

        if (x.equals(reverseString(x, x.length() - 1))) {
            return "SIM";
        } else {
            return "NAO";
        }
    }

    private static String reverseString(String x, int pos){

        if (pos != 0) {
            
            return x.charAt(pos) + reverseString(x, --pos);

        } else {

            return x.charAt(pos) + "";

        }

    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);

        String txt = scn.nextLine();

        while (!txt.equals("FIM")) {
            
            System.out.println(palindromo(txt));
            
            txt = scn.nextLine();

        }



    }
}
