#include <iostream>
#include <stdlib.h>

using namespace std;

int main(){
	int vetor[3] = {157,2,5};
	int *ponteiro =  vetor;
	
	

	
		
	cout<<"O valor de vetor[0] eh "<<*ponteiro<<endl; //Como fazer impress�o do valor de um ponteiro
	cout<<"O endere�o do ponteiro *ponteiro na memoria eh "<<&ponteiro<<endl;//Como acessar o endere�o
	cout<<" "<<ponteiro<<endl; //Como acessar o endere�o do vetor
	cout<<" "<<&vetor<<endl; //Endere�o do vetor em memoria
	cout<<" "<<vetor<<endl; // Lenght do vetor
	

	
	
	
	
	

	cout<<" "<<vetor[1]<<endl; //valor
	
	for(int i = 0; i < 3; i++){
		cout<<"Informe o valor  "<<i+1<<endl;
		cin>>*(ponteiro + 1);
	}
	
	cout<<" "<<vetor[0]<<endl;
	cout<<" "<<vetor[1]<<endl;
	cout<<" "<<vetor[2]<<endl;
	cout<<" "<<vetor[3]<<endl;
	cout<<" "<<vetor[4]<<endl;
	
	for(int i =0; i<3; i++){
		cout<<"Por ponteiro: "<<*(ponteiro + 1)<<endl;
		cout<<"Por vetor: "<<vetor[i]<<endl;
	}
	
	
	
	free(ponteiro);
	
}
