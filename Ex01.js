// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 

const nota = 8;
const faltas = 3;

if (nota >= 8 && faltas <= 2) {
    console.log("Estudante recebeu bônus na nota!");
} else {
    console.log("Estudante não recebeu bônus na nota.");
}