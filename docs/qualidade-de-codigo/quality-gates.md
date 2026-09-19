# Quality gates

## O que é?

Conjunto de condições automatizadas que uma mudança deve atender para avançar no fluxo de entrega.

## Para que serve?

Evita integrar ou publicar alterações que não cumprem padrões mínimos de qualidade.

## Como usar?

Defina verificações relevantes, como testes aprovados, análise estática e ausência de vulnerabilidades críticas.

## Exemplo

Bloquear o merge quando testes falham ou uma vulnerabilidade de severidade alta é encontrada.

## Pontos de atenção

- Gates precisam ser rápidos, confiáveis e alinhados ao risco.

## Conceitos relacionados

- [Testes no CI](../ci-cd/testes-no-ci)
- [SonarQube](./sonarqube)

## Referências

- Boas práticas de integração contínua
