class Estudantes
{
    constructor(nome, email, ra, disciplinas = [])
    {
        this.nome = nome;
        this.email = email;
        this.ra = ra;
        this.disciplinas = disciplinas;
    }

    primeiraDisciplina()
    {
        return this.disciplinas[0];
    }

    ultimaDisciplina()
    {
        return this.disciplinas[this.disciplinas.length - 1];
    }
}


const Estudante1 = new Estudantes("Joao", "joao.com", 10, ["Matematica", "Portugues"])

console.log(Estudante1.primeiraDisciplina())
console.log(Estudante1.ultimaDisciplina())