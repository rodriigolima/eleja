import CreateQuantVotosService from "../../../services/Votos/QuantVotos/CreateQuantVotosService";

export default class CreateQuantidadeVotoController {
        constructor() {
            this.service = new CreateQuantVotosService();
        }
    
       async create (req, res){
            const {
                idQuantVotosCandidato,
                hora_voto,
                data_voto,
                } = req.body;
    
            const createdVotoCandidato = await this.service.create(
                idQuantVotosCandidato,
                hora_voto,
                data_voto,
            );
    
            return res.status(200).json(createdVotoCandidato);
        }    
    }

