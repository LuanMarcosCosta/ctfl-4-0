# Quality gates no CI/CD

## O que é?

Regras do pipeline que impedem a progressão de uma mudança quando critérios de qualidade não são atendidos.

## Para que serve?

Padroniza controles de qualidade e reduz o risco de liberar mudanças sem validação mínima.

## Como usar?

Associe gates a estágios do pipeline e configure ações claras para falhas.

## Exemplo

O deploy para produção exige testes críticos aprovados e nenhuma vulnerabilidade crítica aberta.

## Pontos de atenção

- Evite gates que bloqueiam sem oferecer diagnóstico acionável.

## Conceitos relacionados

- [Quality gates de código](../qualidade-de-codigo/quality-gates)
- [Critérios de entrada e saída](../gerenciamento/criterios-de-entrada-e-saida)

## Referências

- Boas práticas de integração contínua
