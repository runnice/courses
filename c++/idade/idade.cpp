#include <iostream>

using namespace std;

int main()
{
    int idade;

    do
    {
        cout << "Informe sua idade" << endl;
        cin >> idade;

        if (idade >= 1 && idade <= 10){
            cout << "Classificação: Infantil" << endl;
        }else if (idade >= 11 && idade <= 15){
            cout << "Classificação: Juvenil" << endl;
        }else if (idade >= 16 && idade <= 18){
            cout << "Classificação: Jovem" << endl;
        }else if(idade >= 19 && idade <=30{
            cout << "Classificação: Master" << endl;
        }else{
            cout << "Classificação Inválida" << endl;
        }

        cout <<"Deseja informar uma nova idade? [SIM = 1, NAO = 0]"
        cin>>resp;
    }while(resp == 1){
        
    }

}