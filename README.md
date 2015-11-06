Scope:
Uma app com a funcionalidade minima do Coppers. Tem apenas duas views: 1) nova spending, e 2) listar todas as spendings.
O design é parecido com o protótipo new_coppers_ui. As spendings têm de ser persistidas numa base de dados.

Problemas:
- muito boilerplate, não há o render() do RoR, cada route tem de tratar de tudo à mão. Por exemplo, a parte que busca o template jade é sempre igual. Será que midlewares resolvem isto? A mesma coisa para logging. Arranjar uma forma de abstrair isto.

Faltou:
- quase tudo porque me meti a ler... mas aprendi várias coisas
- acesso à BD. nem sei qual usar
- templates mais sólidos. não sei como usar layouts ou partials em Jade
- compilação de CSS
- provavelmente um Gulp para compilar CSS e isso
- testing

Aprendi:
- $ npm init
- locomotivejs: basicamente expressjs mas com estrutura de directorias e alguns standards. basicamente RoR para express
- "n" gestor de versões para node: npm install -g n
- koa: nova framework dos criadores de express, ainda mais minimalista e com alguns conceitos interessantes.
- http://expressjs.com/starter/generator.html

Prá Próxima:
- continuar com o mesmo objectivo
- continuar com express puro mas usar o generator e seguir padrão MVC. tentar meter o boilerplate no server.js em vez dos módulos, mesmo que não seja muito escalável.
- decidir uma BD e usá-la (experimentar cassandra, talvez couch, senao ir para postgresql)
- talvez não compilar CSS ainda
- definir melhor o scope, decidir se vou fazer compilação de assets e testing (não)
- executar os templates todas as vezes em vez de os compilar no arranque. não pensar em como é que isto funciona em produção.


Sexta, 8 Nov 2015, 16:45 ~ 18:35
