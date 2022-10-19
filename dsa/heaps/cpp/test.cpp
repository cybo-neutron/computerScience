#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> v = {1, 2, 3, 4, 5};

    swap(v[0], v[2]);

    for (auto x : v)
    {
        cout << x << " ";
    }

    return 0;
}