const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if (imc < 18.5) {
            classification = 'Abaixo do peso'
            resultado.innerHTML = `<h2>Seu aluno possui o IMC de: ${imc} (${classification})</h2><br><br>

    Nunca pule refeições: faça ao menos 6 refeições fracionadas ao longo do dia;<br><br>

    Aumente gradativamente a ingestão calórica: dessa forma o estômago vai se acostumando aos poucos com maiores volumes de alimento;<br>

    Não se entupa de besteiras: evite alimentos industrializados e fast foods, além de darem a sensação de estufamento, não contribuem para a nutrição;<br>

    Varie o cardápio: o visual das refeições influencia no apetite, por isso faça pratos coloridos e com alimentos que agradam seu paladar;<br>

    faça ele consumir suplementos e pré-treino, buscar a musculação para ganho de massa<br><br>

    Talvez isso te ajude no ganho de peso do seu atleta`
        } else if (imc < 25) {
            classification = 'Peso normal'
            resultado.innerHTML = `<h2>Seu aluno possui o IMC de: ${imc} (${classification})</h2><br><br>
      Apesar de seu aluno estar em peso normal, caso ele queira ganhar massa muscular, recomende treinos intensivos, uma dieta calibrada pelo menos 9 refeições fracionadas por dia, buscar um investimento em suplementos atlético e uma academia especializada em crescimento muscular, sempre com a ajuda do instrutor<br><br>
      Isso vai garantir que seu atleta tenha um ganho de massa considerável a longo prazo`
        } else if (imc < 30) {
            classification = 'Acima do peso'
            resultado.innerHTML = `<h2>Seu aluno possui o IMC de: ${imc} (${classification})</h2><br><br>
        Seu aluno está acima do peso para evitar que ele fique com obesidade grau 1 elaborei algumas instruções para você mostrar a ele<br>
        É preciso evitar comidas gordurosas e diminuir o consumo de produtos como pães, massas e bolos. A dica é fazer trocas inteligentes ao optar pelas alternativas integrais. O açúcar e o sal em excesso, por exemplo, também devem ser cortados do seu cardápio. É essencial aprender a temperar os pratos sem exageros e com opções saudáveis.<br>
        Legumes e verduras precisam estar no cardápio diariamente, assim como as frutas. A reeducação alimentar não significa parar de comer e, sim, distribuir as refeições ao longo do dia em pequenas porções que saciem.<br><br>
        Lembre ele de continuar treinando e buscar ajuda com médicos especializados, para que evite possiveis problemas de saude.
        `
        } else if (imc < 35) {
            classification = 'Obesidade Grau I'
            resultado.innerHTML = `<h2>Seu aluno possui o IMC de: ${imc} (${classification})</h2>
            <h3>Habitos Alimentares que devem ser evitados:</h3>
            É preciso evitar comidas gordurosas e diminuir o consumo de produtos como pães, massas e bolos. A dica é fazer trocas inteligentes ao optar pelas alternativas integrais. O açúcar e o sal em excesso, por exemplo, também devem ser cortados do seu cardápio. É essencial aprender a temperar os pratos sem exageros e com opções saudáveis.<br>
            Junto com isso, também é importante evitar comer apressadamente, o que dificulta o entendimento do estômago de que a região está cheia. Logo, a tendência é que você consuma mais alimentos do que o necessário. Portanto, lembre-se de evitar consumir enquanto mexe no celular ou assiste televisão e concentre-se na alimentação.<br>
            Outro hábito para ser evitado é o consumo de alimentos, especialmente os mais pesados, tarde de noite. Neste período, o estômago e o intestino passam a funcionar mais lentamente, para ajudar no adormecimento.
            <h3>Hábitos alimentares para adotar</h3>
            Legumes e verduras precisam estar no cardápio diariamente, assim como as frutas. A reeducação alimentar não significa parar de comer e, sim, distribuir as refeições ao longo do dia em pequenas porções que saciem.<br>
            Além disso, é importante se planejar para trazer mais praticidade na hora de cozinhar e evitar pedir comida em fast food, o que pode não ser saudável. Isso é possível ao garantir que na sua geladeira e no armário tenha sempre alimentos saudáveis e separados de forma prática para estimular o consumo<br>
            É normal adotar um novo estilo de alimentação e querer resultados, porém, somente a mudança na dieta não é o suficiente. Os exercícios físicos são aliados da reeducação alimentar e ajudam a acelerar o metabolismo. Basta praticar por 30 minutos, ao longo de 5 vezes por semana, para sentir a diferença.
            <h3>Praticar Atividades Físicas</h3>
            Com a prática de atividades físicas, é mais fácil diminuir e manter o peso, além de ser um auxílio no combate de problemas cardíacos, diabetes e obesidade. Fazer exercícios também traz benefícios para a mente, como o alívio da ansiedade, do estresse e dos sintomas ligados à depressão. Isso acontece porque eles estimulam a produção de serotonina, conhecida como o hormônio do bem-estar.`
        } else if (imc < 41) {
            classification = 'Obesidade Grau II'
            resultado.innerHTML = `Seu aluno possui o IMC de: ${imc} (${classification})
            <h2>Seu aluno possui o IMC de: ${imc} (${classification})</h2>
            <h3>Habitos Alimentares que devem ser evitados:</h3>
            É preciso evitar comidas gordurosas e diminuir o consumo de produtos como pães, massas e bolos. A dica é fazer trocas inteligentes ao optar pelas alternativas integrais. O açúcar e o sal em excesso, por exemplo, também devem ser cortados do seu cardápio. É essencial aprender a temperar os pratos sem exageros e com opções saudáveis.<br>
            Junto com isso, também é importante evitar comer apressadamente, o que dificulta o entendimento do estômago de que a região está cheia. Logo, a tendência é que você consuma mais alimentos do que o necessário. Portanto, lembre-se de evitar consumir enquanto mexe no celular ou assiste televisão e concentre-se na alimentação.<br>
            Outro hábito para ser evitado é o consumo de alimentos, especialmente os mais pesados, tarde de noite. Neste período, o estômago e o intestino passam a funcionar mais lentamente, para ajudar no adormecimento.
            <h3>Hábitos alimentares para adotar</h3>
            Legumes e verduras precisam estar no cardápio diariamente, assim como as frutas. A reeducação alimentar não significa parar de comer e, sim, distribuir as refeições ao longo do dia em pequenas porções que saciem.<br>
            Além disso, é importante se planejar para trazer mais praticidade na hora de cozinhar e evitar pedir comida em fast food, o que pode não ser saudável. Isso é possível ao garantir que na sua geladeira e no armário tenha sempre alimentos saudáveis e separados de forma prática para estimular o consumo<br>
            É normal adotar um novo estilo de alimentação e querer resultados, porém, somente a mudança na dieta não é o suficiente. Os exercícios físicos são aliados da reeducação alimentar e ajudam a acelerar o metabolismo. Basta praticar por 30 minutos, ao longo de 5 vezes por semana, para sentir a diferença.
            <h3>Praticar Atividades Físicas</h3>
            Com a prática de atividades físicas, é mais fácil diminuir e manter o peso, além de ser um auxílio no combate de problemas cardíacos, diabetes e obesidade. Fazer exercícios também traz benefícios para a mente, como o alívio da ansiedade, do estresse e dos sintomas ligados à depressão. Isso acontece porque eles estimulam a produção de serotonina, conhecida como o hormônio do bem-estar.`
        } else {
            classification = 'Obesidade Grau III'
            resultado.innerHTML = `<h2>Seu aluno possui o IMC de: ${imc} (${classification})</h2>
            <h3>Habitos Alimentares que devem ser evitados:</h3>
            É preciso evitar comidas gordurosas e diminuir o consumo de produtos como pães, massas e bolos. A dica é fazer trocas inteligentes ao optar pelas alternativas integrais. O açúcar e o sal em excesso, por exemplo, também devem ser cortados do seu cardápio. É essencial aprender a temperar os pratos sem exageros e com opções saudáveis.<br>
            Junto com isso, também é importante evitar comer apressadamente, o que dificulta o entendimento do estômago de que a região está cheia. Logo, a tendência é que você consuma mais alimentos do que o necessário. Portanto, lembre-se de evitar consumir enquanto mexe no celular ou assiste televisão e concentre-se na alimentação.<br>
            Outro hábito para ser evitado é o consumo de alimentos, especialmente os mais pesados, tarde de noite. Neste período, o estômago e o intestino passam a funcionar mais lentamente, para ajudar no adormecimento.
            <h3>Hábitos alimentares para adotar</h3>
            Legumes e verduras precisam estar no cardápio diariamente, assim como as frutas. A reeducação alimentar não significa parar de comer e, sim, distribuir as refeições ao longo do dia em pequenas porções que saciem.<br>
            Além disso, é importante se planejar para trazer mais praticidade na hora de cozinhar e evitar pedir comida em fast food, o que pode não ser saudável. Isso é possível ao garantir que na sua geladeira e no armário tenha sempre alimentos saudáveis e separados de forma prática para estimular o consumo<br>
            É normal adotar um novo estilo de alimentação e querer resultados, porém, somente a mudança na dieta não é o suficiente. Os exercícios físicos são aliados da reeducação alimentar e ajudam a acelerar o metabolismo. Basta praticar por 30 minutos, ao longo de 5 vezes por semana, para sentir a diferença.
            <h3>Praticar Atividades Físicas</h3>
            Com a prática de atividades físicas, é mais fácil diminuir e manter o peso, além de ser um auxílio no combate de problemas cardíacos, diabetes e obesidade. Fazer exercícios também traz benefícios para a mente, como o alívio da ansiedade, do estresse e dos sintomas ligados à depressão. Isso acontece porque eles estimulam a produção de serotonina, conhecida como o hormônio do bem-estar<br>
            <h3>Consulte um médico</h3>
            Com os resultados dos exames em mãos, será possível perceber qual caminho seguir para diminuir o IMC e possivelmente realizar uma bariatrica. Afinal, em muitos casos de obesidade, há outros problemas silenciosos, como colesterol alto, diabetes e pressão alta. Portanto, além da reeducação alimentar e da prática de exercícios, é preciso cuidar desses quadros.`
        }
    } else {
        resultado.innerHTML = 'Preencha os campos'
    }
}