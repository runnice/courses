#include <iostream>
#include <stdlib.h>

using namespace std;

int main(){
	char *c; //variavel do tipo char c com ponteiro
	
	c = (char *) malloc(1);
	
	if(!c){
		cout<<"N�o foi alocado em mem�ria"<<endl;
		exit(1);
	}
	
	*c = 'd'; //* antes da vari�vel indica o ponteiro.
	
	cout<<"Valor de c: "<<&c<<*c; //representa endere�o onde a mem�ria foi alocada.
	
	free(c); // dentro do free nao tem *
}
