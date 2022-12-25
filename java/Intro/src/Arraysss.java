import java.lang.reflect.Array;
import java.util.Arrays;

public class Arraysss {
    public static void main(String[] args) {
        int[] arr = new  int[5];
        for(int item:arr)
        {
            System.out.print(item + " ");
        }
        System.out.println();

        int[] a1 = {1,2,3,4,5};
        System.out.println(Arrays.toString(a1));

        System.out.println(Arrays.toString(retArr()));
    }

    static int[] retArr(){
        return new int[]{1,2,3};
    }
}
