#include <iostream>



using namespace std;



int main(){

int *p;
int vetor[10];

p = &vetor[0]; // p = vetor

cout<<"\n"<< p << "\n";

p = &vetor[1];

cout<<"\n"<< p << "\n";

p = &vetor[2];

cout<<"\n"<< p << "\n";

p = &vetor[3];

cout<<"\n"<< p << "\n";

*(p += 1);
cout<<"\n"<< p << "\n";

*p = 10;
cout<<"\n"<< vetor[4] << "\n";

*(p += 1);
*p = 30;
cout<<"\n"<< *(p -= 1) << "\n";

return 0;

}
