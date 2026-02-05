// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const usuario = "super premium";

if (usuario === "free") {
    console.log("Usuário free tem acesso limitado ao app.");
} else if (usuario === "premium") {
    console.log("Usuário premium tem acesso a todas as funções.");
} else if (usuario === "super premium") {
    console.log("Usuário super premium tem acesso total e bônus especiais.");
} else {
    console.log("Usuário inválido.");
}