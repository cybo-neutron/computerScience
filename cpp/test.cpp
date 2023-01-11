#include<bits/stdc++.h>
using namespace std;
int main(){

    tuple<int, int> t = {1, 2};

    cout << get<0>(t)<< endl;
    get<0>( t) += 50;
    cout << get<0>(t)<< endl;


    return 0;
}