[19:58] ANILDO NASCIMENTO MATTOS
#include <iostream>using namespace std;/*
Ponteiro simplesmete guarda o endereço de memoria de outra variavel
melhorar o desempenho das aplicações, pois evita copia de dados repetitivos na memoria
*/void somar(float *param, float valor){
*param += valor;
}void iniciarVetor(float *v){
v[0] = 0;
v[1] = 0;
v[2] = 0;
v[3] = 0;
v[4] = 0;
}int main(){
string veiculo = "Carro";
string *pv;
float numero = 10;
float vetor[5];
iniciarVetor(vetor);
for(int i = 0; i < 5; i++){
cout<<vetor[i]<<endl;
}
somar(&numero, 20);
cout<<"\n"<<numero;
pv = &veiculo;
cout<<"\n"<<pv<<"\n"<<&veiculo;
*pv = "Moto";
cout<<"\n"<<veiculo<<"\n";
return 0;
}

[19:58] ANILDO NASCIMENTO MATTOS
#include <iostream>using namespace std;int main(){
int *p;
int vetor[10];
p = &vetor[0]; // p = vetor
cout<<"\n"<< p << "\n";
p = &vetor[1];
cout<<"\n"<< p << "\n";
p = &vetor[2];
cout<<"\n"<< p << "\n";
p = &vetor[3];
cout<<"\n"<< p << "\n";
*(p += 1);
cout<<"\n"<< p << "\n";
*p = 10;
cout<<"\n"<< vetor[4] << "\n";
*(p += 1);
*p = 30;
cout<<"\n"<< *(p -= 1) << "\n";
return 0;
}


