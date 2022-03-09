#include <iostream>

using namespace std;

int main(){
    int valores[10] ={0};
    int resp, op, remover, topo = 0, soma =0, media=0, total =0, maior =0;

    do{
        cout<<"1 - Adicionar elementos em um vetor"<<endl;
        cout<<"2 - Remover elementos de um vetor"<<endl;
        cout<<"3 - Soma total dos elementos em um vetor"<<endl;
        cout<<"4 - Média dos elementos de um vetor"<<endl;
        cout<<"5 - Maior elemento de um vetor "<<endl;
        cout<<"6 - Menor elemento de um vetor "<<endl;
        cout<<"7 - Encerrar o programa "<<endl;
        cin>>op;

        switch (op)        {
        case 1:
            for int(i =0; i<10; i++){
                if(valores[i] ==0){
                cout<<"Informe um valor"<<endl;
                cin>>valores[i];
                topo++;
                break;
            }
            cout<<"valores["<<i+1<<"] = "<<valores[i]<<endl;
            
            break;
            
        case 2:
            cout<<"Informe qual valor deseja remover do vetor."<<endl;
            cin>>remover;
            for(int i = 0; i<topo; i++){
                if(valores[i] == remover){
                    valores[i]=0;
                    topo--;
                    cout<<"Valor removido com sucesso"<<endl;
                    break;
                }
                cout<<"Valores["<<i<<"] = "<<valores[i]<<endl;
            }
            break;
        case 3:
            total = 0;
            for(int i =0; i< topo; i++){
                total = total + valores[i];
            }
            cout<<"Soma total: "<<total<<endl;
            break;
        case 4:
            if(total !=0){
                media = total / topo;
                cout<<"Media dos valores: "<<media;
            }else{
                cout<<"Por favor, adicione primeiro os valores"<<endl;
            }
            break;
        case 5:
            maior = 0
            for(int i = 0; i < topo; i++){
                if(valores[i] >maior){
                    maior = valores[i];
                }
            }
            cout<<"O maior valor é"<<maior<<endl;
            break;
        case 6:
            menor=vetor[0];
            for (int i = 0; i < 10; i++){
            if(vetor[i]<menor){
                menor=vetor[i];
            }}
            cout << "O menor elemento é o: " << menor << ". \n";
            break;
        case 7:
            break;
        
        default:
            break;
        }
        cout<<"Deseja realizar outra operação? [SIM = 1, NÃO =2]"
    }

    

