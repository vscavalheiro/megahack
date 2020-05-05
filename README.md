# megahack
Repositório do hackton. 

Time 7 

# Participantes:
Afonso, 
João, 
Nickolas, 
Rafael, 
Vitor

1 - Instale a versão LTS do Node Js no seu computado (https://nodejs.org/pt-br/download/)r</br>
2 - Instale uma versão atualizada do Git no seu computador (https://git-scm.com/downloads)</br>
3 - Se vc não tem o expo instalado. Voce pode enconrtar as informações no site da expo: "https://expo.io/learn"</br>
    3.1 - execute a seguinte linha de codigo no terminal caso não tenha o expo instalado</br> 
    ```
    npm install expo-cli --global
    ```
</br> 4- Faça um clone do projeto</br>
    ```
    git clone https://github.com/vscavalheiro/megahack.git
    ```
</br>5 - Entre no diretorio do projeto</br>
6 - De o comando "expo start", esse comando deve inivcializar o servidor e abrir uma aba no seu navegador</br>
    ```
    expo start
    ```
</br>7 - Em seguida, baixe o aplicativo Expo, pode ser na PlayStore (https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) ou na AppleStore</br>
8 - Depois de baixar o app, faça um scan do QRcode presente na aba aberta do navedador e os app deve ser baixado em seguida.

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

