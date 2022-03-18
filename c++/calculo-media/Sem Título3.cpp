#include <iostream>

using namespace std;

int main(){
	
	int notas[5], soma = 0;
	
	for(int i=0; i<4; i++){
		cout<<"Informe a nota "<<i + 1<<endl;
		cin>>notas[i];
		soma += notas[i];
	}
	
	notas[4] = (notas[0]);
	
}
