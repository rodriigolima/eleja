import Sequelize, { Model, Sequelize } from "sequelize";
import databaseConfig from "../../../config/database";
import CandidatoModel  from "../../models/Candidatos/CandidatoModel"

const sequelize = new Sequelize(databaseConfig);

class QuantidadeVotosCandidatosModel extends Model {}

QuantidadeVotosCandidatosModel.init(
  {
    idQuantVotosCandidato: {
      type: Sequelize.UUIDV4(),
      primaryKey: true
    },
    hora_voto:Sequelize.DATE,
    data_voto: Sequelize.DATEONLY,
    id_candidato_voto: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: CandidatoModel,
        key: 'idCandidato',
      },
    },
   },
  {
    sequelize,
    modelName: "quant_votos_candidatos",
    timestamps: false
  }
);
  
QuantidadeVotosCandidatosModel.belongsTo(CandidatoModel,{through:CandidatoModel,
  as: "candidatos",
  foreignKey: "id_candidato_voto"})


export default QuantidadeVotosCandidatosModel;