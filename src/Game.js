class Game {
    #username;
    #vida;
    #energia;
    #ki;
    constructor(username) {
        this.#username = username;
        this.#vida=1000;
        this.#energia=1000;
        this.#ki=1000;
    }
    //metodo para mostrar stats del jugador
    mostrarStats(){
        //valida que el decremento de vida sea mayor o igual a 0
        console.log(`vida: ${this.#vida} energia: ${this.#energia} ki: ${this.#ki}`);
    }
    //metodo para decrementar vida del jugador
    decrementaVida(){  
        //valida que el decremento de vida sea mayor o igual a 0
        this.#vida = this.#vida-175 >= 0 ? this.#vida - 175 : 0 ;
        //al aplicar el dremento se muestran los stats actualizados
        this.mostrarStats();
    }
    /*
    resta energia y ki del personaje que esta atacando y recibe como argumento un objeto
    corrspondiente al jugador opuesto, esto para acceder al metodo decrementovida y reducir sus stats
    */
    //metodo para ataque basico
    atk_bascic(player){
        this.#energia = this.#energia -150 >= 0 ? this.#energia -150 : 0 ;
        this.#ki-=this.#ki -200 >= 0 ? this.#ki -200 : 0 ;
        //decremento de vida del oponente
        player.decrementaVida(175);
    }
    //metodo para ataque especial
    atk_especial(player){
        //valida que el decremento de vida sea mayor o igual a 0
        this.#energia = this.#energia - 300 >= 0 ? this.#energia -300 : 0 ;
        this.#ki = this.#ki -400 >=0 ? this.#ki -400 : 0 ;
        //decremento de vida del oponente
        player.decrementaVida(350);
    }
}
    let player1 = new Game("Goku");
    let player2 = new Game("Vegeta");