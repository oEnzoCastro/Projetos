import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    
    System.out.println(soma(scan.nextInt(), scan.nextInt()));

    scan.close();
  }
  
  public static int soma(int a, int b) {
    return a + b;
  }
}