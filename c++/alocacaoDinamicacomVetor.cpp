#include <iostream>
#include <stdlib.h>

using namespace std;

int main(){
	float *v;
	int i;
	int n;
	float nota;
	
	cout<<"Qual o número de notas?"<<endl;
	cin>>n;
	
	if(!(v=(float *) malloc(n*sizeof(float)))) {
		cout<<"Não foi alocado"<<endl;
		exit(0);
	}
	
	for(i = 0; i < n; i++){
		cout<<"Informe a nota"<<endl;
		cin>>v[i];
		//v[i] = nota mesma coisa da cin>>v[i]
		
	}
	
	for(int i =0; i<n; i++){
		cout<<"Nota: "<<v[i]<<endl;
	}
	
	
	
	
	
}
