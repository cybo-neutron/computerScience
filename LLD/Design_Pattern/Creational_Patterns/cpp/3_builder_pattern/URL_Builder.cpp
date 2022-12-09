#include <iostream>
using namespace std;

class URL
{
    string protocol;
    string hostname;

public:
    URL *setProtocol(string protocol)
    {
        this->protocol = protocol;
        return this;
    }

    URL *setHostName(string hostname)
    {
        this->hostname = hostname;
        return this;
    }

    void showURL()
    {
        cout << this->protocol << "://" << this->hostname << endl;
    }
};

int main()
{
    URL *u = new URL();

    u = u->setProtocol("https")->setHostName("dude");
    u->showURL();
    return 0;
}