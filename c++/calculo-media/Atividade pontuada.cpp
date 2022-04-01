#include <iostream>
#include <stdlib.h>
#include <locale.h>

using namespace std;

struct Produtos{
	int cod;
	char nomeProduto[15];
	int qntd;
	int valor;
};

struct Clientes{
	int cpf ;
	char nomeCliente[15];
	int tel;
};

struct Vendas{
	int codVenda;
	int data;
	int cpf;
	int codProduto;
	int total;
	int qntdComprada;
};



int main(){
	setlocale(LC_ALL, "Portuguese");
	int opcao, n, x, y, i=0, z=0, c=0, cont=0, totalVendas=0;
	
	Produtos produto[50];
	Clientes cliente[50];
	Vendas venda[50];
	
	
	
	do{
      	cout<<"1 - Cadastrar Produto"<<endl;
        cout<<"2 - Cadastrar Cliente"<<endl;
        cout<<"3 - Registrar Vendas"<<endl;
        cout<<"4 - Exibir o total de  todas as vendas"<<endl;
        cout<<"5 - Sair do sistema"<<endl;
        
		cin >> opcao;

        switch (opcao){
        case 1:
        	cout<<"Informe o código do " <<i+1<< "º produto" << endl;
			cin>>produto[i].cod;
			cout<<"Informe o nome do " <<i+1<< "º produto" << endl;
			cin>>produto[i].nomeProduto;
			cout<<"Informe a quantidade do " <<i+1<< "º produto" << endl;
			cin>>produto[i].qntd;
			cout<<"Informe o valor do " <<i+1<< "º produto" << endl;
			cin>>produto[i].valor;
			i++;
			
			
			break;
       	case 2:
       		cout<<"Informe o Nome do " <<z+1<< "º cliente" << endl;
			cin>>cliente[z].nomeCliente;
			cout<<"Informe o CPF do(a) cliente " <<cliente[z].nomeCliente<<endl;
			cin>>cliente[z].cpf;
			cout<<"Informe o telefone do(a) cliente"<<cliente[z].nomeCliente<<endl;
			cin>>cliente[z].tel;
			z++;
			break;
			
        case 3:
        	cout<<"Informe o código da " <<c+1<< "º venda" << endl;
			cin>>venda[c].codVenda;
			cout<<"Informe a data da " <<c+1<< "º venda" << endl;
			cin>>venda[c].data;
			cout<<"Informe o cpf do " <<"cliente"<<endl;
			cin>>venda[c].cpf;
			cout<<"Informe o código do " <<c+1<< "º produto" << endl;
			cin>>venda[c].codProduto;
			cout<<"Informe a quantidade de produtos "<< endl;
			cin>>venda[c].qntdComprada;
			cout<<"Informe o valor total da " <<c+1<<"º venda" << endl;
			cin>>venda[c].total;
			c++;
			
    		break;
        case 4:
        	for(int cont=0; cont<c; cont++){
        		totalVendas = venda[cont].total += totalVendas;
        	}
        	cout<<"O Total do total das vendas é: "<<totalVendas<<endl;
            break;
        case 5:
        	cout<< "Saindo do sistema"<<endl;
        	return 0;
             break;
       
        default:
            break;
        }
        cout<<"Deseja realizar outra operação? [SIM = 1, NÃO =2]"<<endl;
        cin>>opcao;
    	
	}while(opcao == 1);{
		return 0;
	}
}





