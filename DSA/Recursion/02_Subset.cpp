
// #include <bits/stdc++.h>
// using namespace std;

// void f(int i, vector<int> arr, vector<vector<int>> &ans, vector<int> &subset)
// {
//     if (i == arr.size()){
//         ans.push_back(subset);
//         return;
//     }
//     // include
//     subset.push_back(arr[i]);
//     f(i + 1, arr, ans, subset);

//     // exclude
//     subset.pop_back();
//     f(i + 1, arr, ans, subset);
// }

// int main()
// {
//     vector<int> arr = {1, 2, 3};
//     vector<vector<int>> ans;
//     vector<int> subset;
//     f(0, arr, ans, subset);

//     for (int i = 0; i < ans.size(); i++)
//     {   cout << "[";
//         for (int j = 0; j < ans[i].size(); j++)
//         {
//             cout << ans[i][j] << " ";
//         } 
//         cout << "]" << endl;
//     }
//     return 0;
// }

//
//

#include <iostream>
#include <bits/stdc++.h>
using namespace std;
void flip(string& original, int idx) {
	if (original[idx] == '0')
		original[idx] = '1';	
	else
		original[idx] = '0';
}
void generate(string& original, int same, int i, vector<string>& ans) {
	if (i == original.length()) {
		if (same == 0) {
			ans.push_back(original);
		}
		return;
	}
	if (same > 0)
		generate(original, same-1, i+1, ans);
	flip(original, i);
	generate(original, same, i+1, ans);
	flip(original, i);
}
bool verify(string& s1, string& s2, int k) {
	int same = 0;
	for (int i = 0; i < s1.length(); i++) {
		if (s1[i] == s2[i])
			same++;
	}
	return same==k;
}
vector<string> filter(vector<string>& allPoss, string curr, int same) {
	vector<string> tmp;
	for (int i = 0; i < allPoss.size(); i++) {
		if (verify(allPoss[i],curr,same)) {
			tmp.push_back(allPoss[i]);
		}
	}
	return tmp;
}
int main() {
	// your code goes here
	int n, m;
	cin >> n >> m;
	string s;
	int c;
	cin >> s >> c;
	vector<string> allPoss;
	generate(s,c,0,allPoss);
	m--;
	while(m--) {
		cin >> s >> c;
		allPoss = filter(allPoss, s, c);
	}
	cout << allPoss.size();
	return 0;
}