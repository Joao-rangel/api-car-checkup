# api-car-checkup
API para o agendamento da revisão do carro.

##  Observações/Considerações
* Considerou-se horário disponível para agendamentos das 8h às 18h com intervalos de 1h.
  * Horários disponíveis: 8h, 9h, 10h, ..., 16h, 17h.
* Endpoint para de agendamento de revisões.
* Endpoint para consultas de horários disponíveis no dia.
* Endpoint para consulta dos agendamentos por dia, semana ou mês. 
---

## Dependências do sistema

* [Node.JS](https://nodejs.org/en/) - 16.13.x
* [Yarn](https://yarnpkg.com/) - 3.2.x
* [Docker](https://docs.docker.com/get-docker/) 20.10.x
---
## Instalação
Instale as dependências:
```
yarn
```
Faça build das imagens
```
docker compose up --build
```
Rode as migrations:
```
yarn migration:run
```
Inicie a aplicação:

```
docker compose up
```
---
## Enpoints disponíveis

1. Criar novo agendamento
  * Parâmetros:
      * O nome do usuário:
          * `name: string`
      * O telefone de contato:
          * `contact: number`
      * O modelo do carro:
          * `model: string`
      * A placa do veículo:
          * `licensePlate: string`
      * A data e horário do agendamento:
          * `date: Date`
```
curl --request POST \
  --url http://localhost:3333/schedules \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "João",
	"contact": 999318090,
	"model": "fusca",
	"licensePlate": "TST2222",
	"date": "2022-10-01T11:00"
}'
```
---
2. Verificar horário disponíveis no dia
  * Parâmetros:
      * O dia para consulta (opcional, padrão: __hoje__):
          * `date: Date`
```
curl --request GET \
  --url 'http://localhost:3333/schedules/available?date=2022-10-01'
```
---
3. Verificar horário disponíveis no dia
  * Parâmetros:
      * O dia de referência para consulta:
        * `date: Date`
      * Intervalo da busca (opcional, padrão: `dia`):
        * `period: 'day' | 'week' | 'month'`
```
curl --request GET \
  --url 'http://localhost:3333/schedules/booked?date=2022-10-01&period=week'
```
