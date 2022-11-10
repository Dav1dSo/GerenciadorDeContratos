const { Sequelize, DataTypes } = require('sequelize'); 

const username = 'root';
const database = 'SistemaContratos';
const password = 'senha123';

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost', 
    dialect: 'mysql'
});

// Verifica conexão com bacno de dados-- 

try {
    sequelize.authenticate();
    console.log('Conexao realizada com sucesso!');
  } catch (error) {
    console.error('Erro de conexao: ', error);
};

// Criacao e configuracao das tabelas--

// Tabela Usuarios--

const Usuario = sequelize.define('Usuario', {
  userlogin: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    set(value) {
      this.setDataValue('password', hash(this.userlogin + value));
    } // senha "criptografada"
  }
});

// Tabela Contratos--

const Contrato = sequelize.define('Contrato', {
  valor: DataTypes.DECIMAL,
  data: DataTypes.DATE
});

export default sequelize;
