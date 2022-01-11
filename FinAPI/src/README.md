##FinAPI - Financeira

---

### Requisitos

- [X] deve ser possível criar uma conta
- [X] deve ser possível buscar o extrato bancário do cliente
- [X] deve ser possível realizar um depósito
- [X] deve ser possível realizar um saque
- [] deve ser possível buscar o extrato bancário por data
- [] deve ser possível atualizar os dados da conta do cliente
- [] deve ser possível obter dados da conta do cliente
- [] deve ser possível deletar uma conta

---

### Regras de negócio

- [X] Não deve ser possível cadastrar uma conta com o BI já existente
- [X] Não deve ser possível fazer depósito em uma conta não existente
- [X] Não deve ser possível buscar extrato em uma conta não existente
- [X] Não deve ser possível fazer saque em uma conta não existente
- [] Não deve ser possível excluir uma conta não existente
- [X] Não deve ser possível fazer saque quando o saldo for insufiente.