#include <iostream>
#include <vector>
#include <algorithm>

template <typename T>
class Heap
{
    std::vector<T> harr;
    int size;

    void max_heapify(int i)
    {
        auto left = 2 * i + 1;
        auto right = 2 * i + 2;

        auto greatest = i;
        if (left <= size && harr[greatest] < harr[left])
        {
            greatest = left;
        }
        if (right <= size && harr[greatest] < harr[right])
        {
            greatest = right;
        }

        if (greatest != i)
        {
            std::swap(harr[greatest], harr[i]);
            max_heapify(i);
        }
    }

    void min_heapify(int i)
    {

        auto left = 2 * i + 1;
        auto right = 2 * i + 2;

        auto smallest = i;
        if (left <= size && harr[smallest] > harr[left])
        {
            smallest = left;
        }
        if (right <= size && harr[smallest] > harr[right])
        {
            smallest = right;
        }

        if (smallest != i)
        {
            std::swap(harr[smallest], harr[i]);
            min_heapify(i);
        }
    }

    void percolateUp_max(int i)
    {
        int parent = (i - 1) / 2;

        if (i > 0 and harr[parent] < harr[i])
        {
            std::swap(harr[i], harr[parent]);
            percolateUp_max(parent);
        }
    }

public:
    Heap()
    {
        size = 0;
    }

    Heap(const std::vector<T> &v)
    {
        harr = v;
        buildHeap();
    }

    void buildHeap()
    {
    }

    void push(T elem)
    {

        harr.push_back(elem);
        percolateUp_max(size);

        ++size;
    }

    T pop()
    {
        if (empty())
            return -1;

        T maxElem = harr[0];
        harr[0] = harr[size - 1];
        harr.pop_back();
        max_heapify(0);

        size--;
        return maxElem;
    }

    T top()
    {
        return harr[0];
    }

    bool empty()
    {
        return size == 0;
    }

    int Size()
    {
        return size;
    }

    void print()
    {
        for (auto x : harr)
        {
            std::cout << x << " ";
        }
        std::cout << "\n";
    }
};

int main()
{
    Heap<int> h;
    h.push(1);
    h.push(4);
    h.push(6);
    h.push(0);
    h.push(9);
    h.push(0);

    std::cout << h.top() << std::endl;
    h.pop();

    h.print();
}