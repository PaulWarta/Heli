import java.util.HashSet;
import java.util.Scanner;

public class Coverage {
  public static void main(String[] args) {
    Scanner stdin = new Scanner(System.in);
    HashSet<String> rules = new HashSet<>();

    while(stdin.hasNextLine()) {
      rules.add(stdin.nextLine().split(" ", 2)[1].split("(not supported by)|(only partially supported)", 2)[0]);
    }

    for (String e : rules) {
      System.out.println(e);
    }
  }
}