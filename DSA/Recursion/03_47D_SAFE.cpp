#include <bits/stdc++.h>
using namespace std;

void change(string &s, int i)
{
    if (s[i] == '0')
    {
        s[i] = '1';
    }
    else
    {
        s[i] = '0';
    }
}

void generate(string &s, int same, int i, vector<string> &ans)
{

    if (i == s.size())
    {
        if (same == 0)
        {
            ans.push_back(s);
        }
        return;
    }
    if (same > 0)
    
        generate(s, same - 1, i + 1, ans);
        change(s, i);
        generate(s, same, i + 1, ans);
        change(s, i);
    
}

bool verify(string &s1, string &s2, int same)
{
    int p = 0;
    for (int i = 0; i < s2.size(); i++)
    {
        if (s1[i] == s2[i])
            p++;
    }
    return p == same;
}

vector<string> to_filter(string s, int same, vector<string> &ans)
{
    vector<string> tmp;

    for (int i = 0; i < ans.size(); i++)
    {
        if (verify(s, ans[i], same))
        {
            tmp.push_back(ans[i]);
        }
    }
    return tmp;
}

int main()
{
    int n, m;
    cin >> n >> m;

    string s1;
    int same;
    cin >> s1;
    cin >> same;

    vector<string> ans;
    int i = 0;
    generate(s1, same, 0 , ans);
    m--;
   while(m--){
        cin >> s1 >> same;
        ans = to_filter(s1, same, ans);
   }
    cout << ans.size();
    return 0;
}
