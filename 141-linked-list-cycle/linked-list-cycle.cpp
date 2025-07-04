/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if(head==nullptr)return false;
        unordered_map<ListNode* ,int>mp;
        ListNode *nw=head;
        while(nw!=nullptr){
          if (mp.find(nw) != mp.end()) {
            return true;
          }
          else{
            mp[nw]=1;
          }
          nw=nw->next;
        }
        return false;
    }
};