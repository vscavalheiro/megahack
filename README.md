# megahack
Repositório do hackton. 

Time 7 

# Participantes:
Afonso, 
João, 
Nickolas, 
Rafael, 
Vitor

1 - Instale uma versão atualizada no Node Js
2 - Se vc não tem o expo instalado. Voce pode enconrtar as informações no site da expo: "https://expo.io/learn"
    2.1 - npm install expo-cli --global
3 - Entre no diretorio do projeto
4 - De o comando "expo start"

------------------------------------------------
TRABALHANDO COM O GIT:

- Sempre tenha em mente em qual branch vc está trabalhando "git branch"
- De um "git branch -a" para ver todas as branches disponíveis no repositório remoto
- Para mudar de de branch "git checkout nome-da-branch-que-deseja-ir"
- Estando na branch, de um "git pull" ele irá buscar no servidor do git as atualizações nos arquivos.
- Caso precise criar uma nova branch para adicionar funcionalidades
    - Vá até a branch que deseja se basear, vamos usar a develop "git checkout develop"
    - De um "git checkout -b nome-da-nova-branch" o argumento "-b" cria a nova branch
- Faça as alterações que deseja, quando tiver terminado, vá para o terminal dnv.
- De um "git status"
- De um "git diff nome-do-arquivo" para ver as alterações que vc fez
- De um "git add nome-do-arquivo-que-deseja-incluir" ou "git add ." para adicionar 
- Caso queira desfazer as alterações "git checkout -- nome-do-arquivo"
- De um "git status" novamente. Os arquivos que estiverem verdes serão commitados.
- De um "git commit -m "Mensagem explicando oq o commit está fazendo" "
- E por fim, para mandar de fato para o repositório remoto de um "git push"