# Trabalho1-Web - Jogo da forca
Aluno: MARTIAL Thomas <br>
Matricula: 2220075

## Presentação do jogo
O jogo que escolhi desenvolver é uma variante do jogo da forca que inicialmente é jogado por duas pessoas. O jogo consiste em encontrar uma palavra adivinhando as letras que a compõem. Na versão que escolhi para implementar, uma palavra será gerada aleatoriamente em uma lista (dependendo do nível escolhido) pelo computador e o jogador terá que encontrar letras que fazem parte da palavra para tentar reconstruí-la. Cada vez que o jogador escolhe uma letra que não faz parte da palavra, parte do desenho de um enforcado aparecerá na página da web. Se o jogador escolher uma letra que faça parte da palavra, a palavra será completada com a localização da letra. 

O jogador perde o jogo se o desenho estiver completamente completo antes de encontrar a palavra. Por outro lado, o jogador ganha se encontrar a palavra antes que o desenho esteja completamente concluído.

## Como jogar ?
O jogo consiste em encontrar uma palavra adivinhando as letras que a compõem. Você tem o direito de cometer apenas 8 erros. Nesta primeira página, você só precisa inserir seu nome de usuário e seu endereço de e-mail.
O e-mail tem que ser priplanussian por exemplo: \ddddd[sssss|sssss]<br>

Na página da segunda página, você terá que escolher seu nível de jogo (fácil, médio ou difícil) e gerar uma palavra clicando em um botão.
Você pode mudar a palavra a qualquer momento.<br>

A página final mostra uma imagem diferente se você perder ou ganhar e poderá reiniciar a partir da página de boas-vindas.

## Desenvolvimento do Jogo
### O que funcionou ?
Consegui fazer um jogo da forca simple mas funcional com 4 páginas diferentes: uma página inicial, uma página de jogo e duas páginas de final de jogo.
Eu coloquei uma condição na página inicial com base no endereço de e-mail do jogador conforme solicitado no comunicado (priplanus)
Consegui vincular as letras aos botões e imagens correspondentes ao andamento do jogo.
Eu também consegui simplesmente fazer uma escolha de dificuldade (fácil, médio, difícil)

### O que não funcionou ?
Eu tinha várias ideias que não conseguia realizar.
Eu queria colocar uma pontuação em relação ao número de letras não pertencentes à palavra (para contar o número de erros que o jogador comete)
Eu também queria ter um pequeno banco de dados ou dicionário para manter o melhor jogador e sua pontuação.
Também queria colocar a escolha de dificuldade do jogo na página inicial mas não consegui.
Por fim, não fiz repetição no select como solicitado no depoimento porque não entendi o que tinha que ser feito e vi que tinha que ser feito bem tarde.
