export class SistemaAutenticacao{
    static login(autenticavel, senha){

        if (SistemaAutenticacao.ehAutneticavel(autenticavel)){
        return autenticavel.autenticar(senha);
    }
    return false;
    }

    static ehAutneticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
        
    }

}
