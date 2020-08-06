Backend
===============

### Usuário

Email: admin@waproject.com.br 
<br/>
Senha: senha@123

### Iniciando 

```bash
git clone https://github.com/IlgssonBraga/waproject.git

cd waproject/waproject-base-api

yarn install # ou npm install

docker-compose up
# levantará o docker com o banco de dados e a aplicação.
# Ele aplicará as migrations/seeds do banco e depois dará watch nos arquivos
# e iniciará o node com a api
```

Frontend
===============


### Iniciando 

```bash
cd waproject/waproject-base-web

yarn install # ou npm install

yarn start
# inicia a aplicação web
```

Pronto, agora é só rodar a aplciação.