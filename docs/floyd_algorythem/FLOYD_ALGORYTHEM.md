# Floyd Algorythm

`Floyd's cycle finding algorithm` or `Hare-Tortoise algorithm` is a pointer algorithm that uses only two pointers, moving through the sequence at different speeds. 

This algorithm is used to find a loop in a linked list. It uses `two pointers` one moving twice as fast as the other one. 

The faster one is called the fast pointer and the other one is called the slow pointer.

While traversing the linked list one of these things will occur,

- The Fast pointer may reach the end (NULL) which shows that there is no loop in the linked list.
- The Fast pointer again catches the slow pointer at some time therefore a loop exists in the linked list.

## How does Floyd's Algorithm works?

The algorithm is to start two pointers, slow and fast from head of linked list. We move slow one node at a time and fast two nodes at a time. If there is a loop, then they will definitely meet.

This approach works because of the following facts :

```text
When slow pointer enters the loop, the fast pointer must be inside the loop. 
if we consider movements of slow and fast pointers, we can notice that distance between them (from slow to fast) increase by one after every iteration.
```
