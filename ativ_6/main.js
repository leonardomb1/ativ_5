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


const Estudante1 = new Estudantes("Joao", "joao@gmail.com", 10, ["Matematica", "Portugues"])
const Estudante2 = new Estudantes("Abacate", "fu@gmail.com", 10, ["Historia", "Portugues", "Ingles", "Geografia"])

const lista = [Estudante1, Estudante2]

for(estudante of lista)
{
    console.log(estudante.primeiraDisciplina())
    console.log(estudante.ultimaDisciplina())
    console.log("\n")
}