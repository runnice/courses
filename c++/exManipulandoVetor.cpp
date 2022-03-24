#include <iostream>
#include <stdlib.h>

using namespace std;

int somarVetor(int vetor[], const int n){
	
	int soma = 0;
	int *ponteiro;
	int *const finalVetor = vetor + n;
	
	for(ponteiro = vetor ; ponteiro < finalVetor; ++ponteiro){
		soma += *ponteiro;
	}
	return soma;
		
	
	
}

int main(){
	int somarVetor(int vetor[], const int n);
	int vetor[10] = {1,2,3,4,5,6,7,8,9,10};
	
	cout<<"Soma dos elementos do vetor = "<<somarVetor(vetor, 10) <<endl;
	return 0;
	
}
