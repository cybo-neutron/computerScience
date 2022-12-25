public class PassingFunctions {


    public static void main(String[] args) {



        int a = 4;
        int b = 5;
        System.out.println("Before : a = "+ a + ",b: " + b);
        swap(a,b);
        System.out.println("After: a = "+ a + ",b: " + b);


        //To replicate the pass by reference thing we need to pass an array
        int[] x = {5};
        int[] y = {6};
        System.out.println("Before: a = "+ x[0] + ",b: " + y[0]);
        swap(x,y);
        System.out.println("After: a = "+ x[0] + ",b: " + y[0]);

        Integer m = 5;
        Integer n = 7;

        System.out.println("Before: a = " + m + "b = "+ n);
        swap(m,n);
        System.out.println("Before: a = " + m + "b = "+ n);

    }

    static  void swap(int a,int b)
    {
        int temp  = a;
        a = b;
        b= temp;
    }

    static  void swap(int[]a,int[]b)
    {
        int temp = a[0];
        a[0] = b[0];
        b[0] = temp;
    }

    static void swap(Integer a,Integer b)
    {
        int temp = a;
        a = b;
        b = temp;
    }
}
