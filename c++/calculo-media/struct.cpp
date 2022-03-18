#include <iostream>

using namespace std;


struct Notas
{
	float nota1;
	float nota2; 
	float nota3; 
	float nota4; 
//	float nota5;
//	float nota6; 
//	float nota7;
//	float nota8; 
//	float nota9;
//	float nota10; 
	float calculo;	
};

struct Alunos
{
	char nome;
	int idade;
	char sexo;
};

int main(){
	Notas medias[10];
	
	for(int i =0; i<10;i++){
		cout<<"Digite as notas do "<<i+1<<"º Aluno"<<endl;
		cin>>medias[i].nota1;
		cin>>medias[i].nota2;
		cin>>medias[i].nota3;
		cin>>medias[i].nota4;
		medias[i].calculo = (medias[i].nota1 + medias[i].nota2 + medias[i].nota3 + medias[i].nota4) /4;
	};
	
	for(int i =0; i < 10; i++){
		cout<<"Media do "<<i+1<<"º aluno"<<endl;
		cout<<"Media: "<<medias[i].calculo<<endl;
	}
}

