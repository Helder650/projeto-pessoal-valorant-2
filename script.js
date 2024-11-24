let menuText = "Escolha uma classe para ver os agentes:\n1 - Duelist\n2 - Initiator\n3 - Sentinel\n4 - Controller"
let agent1 = ""
let agent2 = ""
let classes = {
    Duelist: {
        agents: ["Jett", "Reyna"],
        details: [
            "Jett: Jett é uma duelista ágil que pode se movimentar rapidamente e usar habilidades que a permitem desviar dos inimigos e atacar com precisão.",
            "Reyna: Reyna é uma duelista que se cura e se fortalece ao eliminar inimigos, tornando-se mais poderosa conforme vence batalhas."
        ]
    },
    Initiator: {
        agents: ["Breach", "Sova"],
        details: [
            "Breach: Breach é um iniciador que usa explosivos para desorientar e prejudicar os inimigos, facilitando a entrada da equipe em áreas controladas.",
            "Sova: Sova é um iniciador que usa habilidades de reconhecimento para revelar a posição dos inimigos e causar dano com flechas especiais."
        ]
    },
    Sentinel: {
        agents: ["Cypher", "Chamber"],
        details: [
            "Cypher: Cypher é uma sentinela que usa dispositivos de vigilância para coletar informações sobre os inimigos e proteger áreas chave.",
            "Chamber: Chamber é uma sentinela que utiliza armas e dispositivos de alta tecnologia para controlar o campo de batalha e eliminar inimigos."
        ]
    },
    Controller: {
        agents: ["Omen", "Brimstone"],
        details: [
            "Omen: Omen é um controlador que usa habilidades de teletransporte e obscuridade para desorientar os inimigos e se reposicionar estrategicamente.",
            "Brimstone: Brimstone é um controlador que usa habilidades de fumaça e incendiárias para dominar e controlar áreas do mapa."
        ]
    }
}

let weapons = {
    AWP: 150,
    Vandal: 40,
    Phantom: 40,
    Ghost: 20
}
function chooseClass() {
    let selectClass = ""
    do {
        selectClass = prompt(menuText)
        switch (selectClass) {
            case "1":
                return "Duelist"
            case "2":
                return "Initiator"
            case "3":
                return "Sentinel"
            case "4":
                return "Controller"
            default:
                alert("Escolha inválida. Tente novamente.")
        }
    } while (selectClass === "")
}

function chooseWeapons() {
    let weaponMenu = "Escolha uma arma:\n1 - AWP (Dano: 150)\n2 - Vandal (Dano: 40)\n3 - Phantom (Dano: 40)\n4 - Ghost (Dano: 20)"
    let selectWeapon = prompt(weaponMenu)

    switch (selectWeapon) {
        case "1":
            return "AWP"
        case "2":
            return "Vandal"
        case "3":
            return "Phantom"
        case "4":
            return "Ghost"
        default:
            alert("Escolha inválida. Escolha novamente.")
            return chooseWeapons()
    }
}

function chooseAgents() {
    const selectedClass = chooseClass()
    const { agents, details } = classes[selectedClass]

    let menuAgents = `Você escolheu a classe: ${selectedClass}\nEscolha um agente:`
    for (let i = 0; i < agents.length; i++) {
        menuAgents += `\n${agents[i]}`
    }

    let selectAgent = prompt(menuAgents)  
    const agentIndex = agents.indexOf(selectAgent)

    if (agentIndex !== -1) {
        alert(details[agentIndex])

        let allAgents = "Jett\nReyna\nBreach\nSova\nCypher\nChamber\nOmen\nBrimstone"
        let challengeAgent = prompt("Desafie um agente para batalha (Escolha o nome do agente):\n" + allAgents)

        if (allAgents.includes(challengeAgent)) {
            alert(`${challengeAgent} foi escolhido(a) para o desafio!`)
            let weapon = chooseWeapons()
            startBattle(selectAgent, challengeAgent, weapon)
        } else {
            alert("Agente inválido para desafio.")
        }
    } else {
        alert("Agente desconhecido.")
    }
}

function startBattle(agent1, agent2, weapon) {
    let shield1 = prompt(`O agente ${agent1} tem colete? (sim/não)`)
    let shield2 = prompt(`O agente ${agent2} tem colete? (sim/não)`)
    let lifeAgent1 = (shield1 === "sim") ? 150 : 100
    let lifeAgent2 = (shield2 === "sim") ? 150 : 100

    alert(`O agente ${agent1} tem ${lifeAgent1} de vida.`)
    alert(`O agente desafiado ${agent2} tem ${lifeAgent2} de vida.`)
    alert(`A arma escolhida é: ${weapon} (Dano: ${weapons[weapon]})`)

    let damagePerTurn = weapons[weapon]
    let turn

    for (turn = 1; lifeAgent1 > 0 && lifeAgent2 > 0; turn++) {
        lifeAgent1 -= damagePerTurn
        lifeAgent2 -= damagePerTurn

        if (lifeAgent1 < 0) lifeAgent1 = 0
        if (lifeAgent2 < 0) lifeAgent2 = 0

        alert(`Turno ${turn}:\nVida do agente ${agent1}: ${lifeAgent1}\nVida do agente desafiado ${agent2}: ${lifeAgent2}`)

        if (lifeAgent1 === 0 && lifeAgent2 === 0) {
            alert("Empate! Ambos os agentes chegaram a 0 de vida ao mesmo tempo.")
            break
        } else if (lifeAgent1 === 0) {
            alert(`O agente ${agent2} ganhou! O agente ${agent1} perdeu.`)
            break
        } else if (lifeAgent2 === 0) {
            alert(`O agente ${agent1} ganhou! O agente ${agent2} perdeu.`)
            break
        }
    }
}

chooseAgents()
   




