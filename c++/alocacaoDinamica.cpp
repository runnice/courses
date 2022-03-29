#include <iostream>
#include <stdlib.h>

using namespace std;

int main(){
	char *c; //variavel do tipo char c com ponteiro
	
	c = (char *) malloc(1);
	
	if(!c){
		cout<<"Não foi alocado em memória"<<endl;
		exit(1);
	}
	
	*c = 'd'; //* antes da variável indica o ponteiro.
	
	cout<<"Valor de c: "<<&c<<*c; //representa endereço onde a memória foi alocada.
	
	free(c); // dentro do free nao tem *
}
