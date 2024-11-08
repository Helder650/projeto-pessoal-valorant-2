let selectclass = []
let selectagent = [] 
let agent1 = []
let agent2 = []
let menuAgents = []
let agentsDetails = []
let menuShop2 = []  
const itensShop = ['Vandal', 'Phantom','Odin','Operator','Sheriff']
const classes = {
    duelist: {
      agents: ['Jett', 'Reyna'],
    },
    initiator: {
      agents: ['Breach', 'Sova'],
    },
    sentinel: {
      agents: ['Cypher', 'Chamber'],
    },
    controller: {
      agents: ['Omen', 'Brimstone'],
    } }
    
    function selecionarClasse() {
        const menuText = "Escolha uma classe para ver os agentes:\n1 - Duelist\n2 - Initiator\n3 - Sentinel\n4 - Controller"
        let selectclass = ""
    
        while (selectclass === "") {
            selectclass = prompt(menuText)
    
            switch (selectclass) {
                case "1":
                    selectclass = "Duelist"
                    break
                case "2":
                    selectclass = "Initiator"
                    break
                case "3":
                    selectclass = "Sentinel"
                    break
                case "4":
                    selectclass = "Controller"
                    break
                default:
                    alert("Escolha inválida. Tente novamente.")
                    selectclass = ""
            }
        }
    
        alert("Você escolheu a classe: " + selectclass)
        return selectclass
    }

    
    alert("Você escolheu a classe: " + selectclass)

    if (selectclass === "Duelist") {
        menuAgents = "Você escolheu a classe: Duelist\n\nEscolha um agente para ver detalhes:\n" + duelistMenu
        selectagent = prompt(menuAgents)
        if (selectagent === "Jett") {
            agent1 = "Jett"
            agentsDetails = "Jett: Jett é uma duelista ágil que pode se movimentar rapidamente e usar habilidades que a permitem desviar dos inimigos e atacar com precisão."
        } else if (selectagent === "Reyna") {
            agent1 = "Reyna"
            agentsDetails= "Reyna: Reyna é uma duelista que se cura e se fortalece ao eliminar inimigos, tornando-se mais poderosa conforme vence batalhas."
        } else {
            agenteDetails = "Agente desconhecido."
        }
    } else if (selectclass === "Initiator") {
        menuAgents = "Você escolheu a classe: Initiator\n\nEscolha um agente para ver detalhes:\n" + initiatorMenu
        selectagent = prompt(menuAgents)
        if (selectagent === "Breach") {
            agent1 = "Breach"
            agentsDetails= "Breach: Breach é um iniciador que usa explosivos para desorientar e prejudicar os inimigos, facilitando a entrada da equipe em áreas controladas."
        } else if (selectagent === "Sova") {
            agent1 = "Sova"
            agentsDetails= "Sova: Sova é um iniciador que usa habilidades de reconhecimento para revelar a posição dos inimigos e causar dano com flechas especiais."
        } else {
            agentsDetails= "Agente desconhecido."
        }
    } else if (selectclass === "Sentinel") {
        menuAgents = "Você escolheu a classe: Sentinel\n\nEscolha um agente para ver detalhes:\n" + sentinelMenu
        selectagent = prompt(menuAgents)
        if (selectagent === "Cypher") {
            agent1 = "Cypher"
            agentsDetails= "Cypher: Cypher é uma sentinela que usa dispositivos de vigilância para coletar informações sobre os inimigos e proteger áreas chave."
        } else if (selectagent === "Chamber") {
            agent1 = "Chamber"
            agentsDetails = "Chamber: Chamber é uma sentinela que utiliza armas e dispositivos de alta tecnologia para controlar o campo de batalha e eliminar inimigos."
        } else {
            agentsDetails= "Agente desconhecido."
        }
    } else if (selectclass === "Controller") {
        menuAgents = "Você escolheu a classe: Controller\n\nEscolha um agente para ver detalhes:\n" + controllerMenu
        selectagent = prompt(menuAgents)
        if (selectagent === "Omen") {
            agent1 = "Omen"
            agentsDetails= "Omen: Omen é um controlador que usa habilidades de teletransporte e obscuridade para desorientar os inimigos e se reposicionar estrategicamente."
        } else if (selectagent === "Brimstone") {
            agent1 = "Brimstone"
            agentsDetails= "Brimstone: Brimstone é um controlador que usa habilidades de fumaça e incendiárias para dominar e controlar áreas do mapa."
        } else {
            agentsDetails= "Agente desconhecido."
        }
    }


   




