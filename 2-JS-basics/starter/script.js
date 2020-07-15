class cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.state = false;
        this.vecinas = 0;
    }

    //Setters
    set setState(state) {
        this.state = state;
    }

    setPos(i, j) {
        this.i = i;
        this.j = j;
    }


    //Getters
    get getState() {
        return this.state;
    }

    get isAlive() {
        return this.getState();
    }

    get getVecinas() {
        return this.vecinas();
    }

}



