

//
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    cin >> n;

    vector<int> nums(n);
    unordered_map<int, int> freq;
    map<int, vector<int>> idxMap;

    for (int i = 0; i < n; i++)
    {
        cin >> nums[i];
    }
    for (int i = 0; i < n; i++)
    {
        freq[nums[i]]++;
        idxMap[nums[i]].push_back(i);
    }

    vector<pair<int, int>> sortedFreq;
    for (auto &p : freq)
    {
        sortedFreq.push_back({p.second, p.first});
    }

    sort(sortedFreq.begin(), sortedFreq.end(), [](pair<int, int> a, pair<int, int> b)
         {
        if (a.first != b.first) 
            return a.first > b.first;  
        return a.second < b.second; });

    for (auto p : sortedFreq)
    {
        for (int i : idxMap[p.second])
        {
            cout << i << " ";
        }
        cout << endl;
    }

    return 0;
}
