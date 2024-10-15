
# **Green Growth API**

**Green Growth API** é uma aplicação backend desenvolvida com **Node.js** e **TypeScript**, seguindo os princípios da **Clean Architecture**. Esta API é projetada para gerenciar clientes, datasets, e fluxos de treinamento de modelos utilizando **MLOps**, com suporte a banco de dados relacional e não relacional (**PostgreSQL** e **MongoDB**). 

## **Índice**

1. [Tecnologias Utilizadas](#tecnologias-utilizadas)  
2. [Instalação e Configuração](#instalação-e-configuração)  
3. [Estrutura do Projeto](#estrutura-do-projeto)  
4. [MLOps Pipeline](#mlops-pipeline)  
5. [Comandos Disponíveis](#comandos-disponíveis)  
6. [Uso da API](#uso-da-api)  
7. [Contribuições](#contribuições)  
8. [Licença](#licença)  

---

## **Tecnologias Utilizadas**

- **Node.js**: Backend da API.  
- **TypeScript**: Tipagem estática para JavaScript.  
- **Sequelize**: ORM para o banco de dados relacional PostgreSQL.  
- **MongoDB**: Banco de dados não relacional para armazenamento de metadados.  
- **Jest**: Framework de testes unitários e de integração.  
- **Docker**: Contêineres para a API e bancos de dados.  
- **DVC**: Controle de versão de datasets e modelos de machine learning.  
- **React.js**: Futuro frontend para visualização de dados e gerenciamento.

---

## **Instalação e Configuração**

### **1. Pré-requisitos**

- **Node.js** e **npm** instalados.  
- **Docker** e **Docker Compose** instalados.  
- **Git** instalado para controle de versão.

### **2. Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/green-growth-api.git
cd green-growth-api
```

### **3. Configurar Variáveis de Ambiente**

Crie um arquivo **`.env`** na raiz do projeto e preencha com suas configurações:

```plaintext
DB_NAME=green_growth
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

### **4. Instalar Dependências**

```bash
npm install
```

### **5. Subir os Serviços com Docker**

```bash
docker-compose up --build
```

### **6. Executar Migrations**

```bash
npx sequelize-cli db:migrate
```

---

## **Estrutura do Projeto**

```plaintext
green-growth-api/
│
├── src/
│   ├── domain/                # Entidades e interfaces
│   ├── data/                  # Lógica de acesso a dados
│   ├── infra/                 # Configurações de infraestrutura
│   ├── main/                  # Arquivo principal da aplicação
│   ├── presentation/          # Controladores e rotas
│   ├── shared/                # Código reutilizável
│   ├── mlops/                 # Pipelines e gerenciamento de modelos
│   └── index.ts               # Ponto de entrada da API
│
├── tests/                     # Testes unitários e de integração
├── documentation/             # Documentação do projeto
├── Dockerfile                 # Arquivo Docker
├── docker-compose.yml         # Configuração do Docker Compose
├── tsconfig.json              # Configuração do TypeScript
└── package.json               # Dependências e scripts do projeto
```

---

## **MLOps Pipeline**

O pipeline de **MLOps** integra o gerenciamento de datasets e o treinamento de modelos com **DVC** e **PyTorch/YOLOv9**.

1. **Upload de Dataset**: Datasets são enviados via API e armazenados no S3.
2. **Treinamento**: Modelos são treinados automaticamente com scripts do pipeline.
3. **Versionamento**: Modelos e datasets são versionados com DVC.
4. **Monitoramento**: Logs e status são armazenados para controle de performance.

---

## **Comandos Disponíveis**

### **Desenvolvimento**
```bash
npm run dev
```

### **Compilação**
```bash
npx tsc
```

### **Rodar Testes**
```bash
npm test
```

### **Lint**
```bash
npm run lint
```

---

## **Uso da API**

### **Rotas Disponíveis**

- **Clientes**:
  - **POST /clientes**: Criar um novo cliente.
  - **GET /clientes/:id**: Buscar um cliente pelo ID.
  - **PUT /clientes/:id**: Atualizar dados de um cliente.
  - **DELETE /clientes/:id**: Remover um cliente.

- **Datasets**:
  - **POST /datasets**: Adicionar um novo dataset.
  - **POST /datasets/upload**: Enviar imagem para S3.
  - **GET /datasets/:id**: Recuperar um dataset.

- **Modelos**:
  - **POST /models/train**: Iniciar o treinamento de um modelo.
  - **GET /models/status/:id**: Verificar status do treinamento.

---

## **Contribuições**

Contribuições são bem-vindas! Siga os passos abaixo:

1. **Fork** o repositório.
2. Crie uma **branch** para sua feature:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Adicione suas alterações e faça um **commit**:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o GitHub:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um **Pull Request**.

---

## **Licença**

Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

## **Conclusão**

Com este README, você agora tem uma visão clara da estrutura e funcionalidades do projeto. Sinta-se à vontade para colaborar e melhorar essa API, garantindo que ela atenda às necessidades da Green Growth A.I.