#include <iostream>
#include <stdlib.h>

using namespace std;





struct Produto{
	int codigo =0;
	char nome[50];
	int quantidade;
	float valor;
};

void exibirProduto(Produto *produto, int n){
	for(int i=0; i<n; i++){
		if (produto[i].codigo > 0){
			cout<<"Codigo: "<<produto[i].codigo<< " Nome: "<<produto[i].nome << " Quantidade: "<<produto[i].quantidade << " Valor "<< produto[i].valor <<endl;
		}
	}
}

void menuPrincipal(){
	cout<<"1 - Cadastrar Produtos "<<endl;
	cout<<"2 - Cadastrar Clientes"<<endl;
	cout<<"3 - Registrar Vendas "<<endl;
	cout<<"4 - Exibir Total das Vendas "<<endl;
	cout<<"5 - Sair do Sistema "<<endl;
}

int main(){
	int op = 0, n;
	
	struct Produto *produto = (struct Produto*) malloc( n * sizeof(struct Produto)); //alocação dinâmica em memória
	
	cout<<"Informe a quantidade de operações "<<endl;
	cin>>n;
	
	do{
		menuPrincipal();
		cout<<"Informe a opção desejada "<<endl;
		cin>>op;
		
		switch(op){
			case 1:
				cout<<"Cadastrar Produtos"<<endl;
				for(int i = 0; i < n; i++){
					if(produto[i].codigo==0){
						cout<<"Informe o código do produto "<<endl;
						cin>>produto[i].codigo;
						cout<<"Informe o nome do produto "<<endl;
						cin>>produto[i].nome;
						cout<<"Informe a quantidade do produto "<<endl;
						cin>>produto[i].quantidade;
						cout<<"Informe o valor do produto "<<endl;
						cin>>produto[i].valor;
						break;
					}
				}
				exibirProduto(produto, n);
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			default:
				cout<<"Opção Inválida "<<endl;
		}
	}
	while(op !=5 );
}

