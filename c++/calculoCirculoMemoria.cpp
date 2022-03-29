#include <iostream>
#include <stdlib.h>

using namespace std;

struct s_pos{
	int x;
	int y;
};

struct s_circulo{
	struct s_pos centro;
	float r;
};
int main(){
	struct s_circulo *p;
	
	p = (struct s_circulo *)  malloc(sizeof(struct s_circulo));
	
	if(!p){
		cout<<"Não foi alocado"<<endl;
		exit(1);
	}
	
	p->centro.x=2;
	p->centro.y=4;
	p->r = 3.2;
	
	cout<<"X = "<<p->centro.x<<endl;
	cout<<"Y = "<<p->centro.y<<endl;
	cout<<"R = "<<p->r<<endl;
	
	free(p);
	
	
	
};
