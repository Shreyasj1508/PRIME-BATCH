//
//
// #include <bits/stdc++.h>
// using namespace std;
// void f(int x)
// {
//     cout << x << " " << endl;

// if (x >= 3)
//     return;
// f(x + 1);
// f(x + 2);
// }

// int main()
// {
//      f(0);
// }
//
//
//  




#include <bits/stdc++.h>
using namespace std;

int cnt = 0;
void f(int i,int j,int m , int n)
{   cnt++;
    if(i>=m || j>=n) return;
    if(i==m-1 && j==n-1) return;


f(i,j + 1,m,n);
f(i+1,j,m,n);
}

int main()
{
     f(0,0,3,3);
     cout << cnt << endl;
}


 

