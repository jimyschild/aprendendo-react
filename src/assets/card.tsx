type Infos = {
    nome: string;
    idade: number;
    ciadade: string;
    sexo?: string;
}

function InfCard(user: Infos) {
    const nome = user.nome
    const idade = user.idade
    const sexo = user.sexo
    const cidade = user.ciadade

    return (
        <div className="div-card">
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Cidade: {cidade}</p>
            <p>Sexo: {sexo}</p>
        </div>

    )
}
export default InfCard