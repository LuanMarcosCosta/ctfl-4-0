---
title: Fundamentos dos Testes
keywords: [CTFL, fundamentos, testes]
---

Este documento resume os pontos centrais do Capítulo 1 (Fundamentos dos Testes)
do Syllabus ISTQB CTFL 4.0. O objetivo é dar uma visão clara dos conceitos, com
exemplos e um exercício prático para aplicar os conceitos.

## 📘 Conceito

Testes de software são atividades destinadas a avaliar a qualidade de um
produto de software e identificar diferenças entre o comportamento atual e o
comportamento esperado. Testar é um processo sistemático que envolve planejar,
implementar e executar casos de teste, além de avaliar os resultados.

Princípios fundamentais (resumido):
- Testes mostram a presença de defeitos, não sua ausência. Mesmo testes
	extensivos não garantem software sem falhas.
- Testes exaustivos são impossíveis para programas não triviais; portanto deve-
	se priorizar risco e cobertura.
- Testes cedo e frequente reduzem custo de correção (encontrar defeitos o mais
	cedo possível é mais barato).
- A psicologia humana afeta testes: combinações de técnicas e perspectivas
	diferentes aumentam a chance de encontrar defeitos.

Termos-chave: caso de teste, critério de aceitação, cenário, condição de
teste, cobertura, defeito (bug), verificação vs validação.

## 💼 Na prática

Como aplicar estes conceitos em um projeto real:

- Planejamento: identifique objetivos de teste, escopo, riscos e prioridades.
- Seleção de técnicas: use técnicas de caixa-preta (particionamento, valores de
	fronteira) e caixa-branca (caminhos, cobertura) conforme apropriado.
- Priorização: priorize testes que tratem áreas de maior risco e impacto para o
	negócio.
- Integração com SDLC: incorpore testes desde requisitos (revisões) até testes
	de aceitação; automatize regressões sempre que possível.

Exemplo de checklist rápido de atividades de um sprint:
1. Revisão de requisitos e identificação de condições de teste.
2. Definição de casos de teste para funcionalidades críticas.
3. Execução de smoke tests e testes exploratórios.
4. Registro e triagem de defeitos; regressão após correção.

## 🧪 Exemplo (Fluxo de Login)

Contexto: aplicação web com tela de login (usuário + senha).

Conceito: testar entradas válidas, inválidas e casos limites.

Caso de teste (exemplo):
- Título: Login válido
- Passos:
	1. Abrir a página de login
	2. Inserir usuário válido `usuario@example.com`
	3. Inserir senha válida `Senha123!`
	4. Clicar em "Entrar"
- Resultado esperado: usuário é autenticado e redirecionado para o dashboard.

Testes adicionais sugeridos:
- Equivalence partitioning: emails inválidos (sem '@', sem domínio).
- Boundary values: campos com tamanho máximo/minimo.
- Testes de segurança básicos: múltiplas tentativas de login, mensagem de
	erro que não vaze informação sensível.

## 🎯 Atenção para a prova

- Conhecer e saber explicar os princípios fundamentais dos testes.
- Entender termos-chave e diferenciações (verificação vs validação,
	teste estático vs dinâmico).
- Saber aplicar técnicas básicas de desenho de teste (particionamento de
	equivalência, análise de valor-limite) e quando usá-las.
- Reconhecer os níveis de teste (unitário, integração, sistema, aceitação) e
	suas finalidades.

## ❓ Exercício prático

Escolha uma funcionalidade simples da sua aplicação (ex.: formulário de
contato) e:

1. Liste 6 condições de teste distintas (incluindo casos válidos e inválidos).
2. Aplique particionamento de equivalência e identifique pelo menos um valor-
	 limite para cada campo.
3. Escreva 2 casos de teste manuais para cobrir os pontos acima.

Quando finalizar, compare os resultados com seus colegas e discuta se as
prioridades refletem riscos reais do negócio.

---

Referência: este resumo foi elaborado com base no Syllabus ISTQB CTFL 4.0
(syllabus_ctfl_4.0br.pdf) e reescrito em linguagem didática para estudo.
