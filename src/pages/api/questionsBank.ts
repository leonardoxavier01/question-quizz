import QuestionModel from "../../model/question";
import ResponseModel from "../../model/response";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        ResponseModel.incorrect('Abelha'),
        ResponseModel.incorrect('Barata'),
        ResponseModel.incorrect('Pulga'),
        ResponseModel.incorrect('Barbeiro'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        ResponseModel.incorrect('Caju'),
        ResponseModel.incorrect('Côco'),
        ResponseModel.incorrect('Chuchu'),
        ResponseModel.incorrect('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        ResponseModel.incorrect('Manada'),
        ResponseModel.incorrect('Alcateia'),
        ResponseModel.incorrect('Rebanho'),
        ResponseModel.incorrect('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        ResponseModel.incorrect('Equilátero'),
        ResponseModel.incorrect('Isóceles'),
        ResponseModel.incorrect('Trapézio'),
        ResponseModel.incorrect('Escaleno'),
    ]),
    new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
        ResponseModel.incorrect('Castro Alves'),
        ResponseModel.incorrect('Manuel Bandeira'),
        ResponseModel.incorrect('Carlos Gomes'),
        ResponseModel.incorrect('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
        ResponseModel.incorrect('Perder'),
        ResponseModel.incorrect('Fracassar'),
        ResponseModel.incorrect('Desprezar'),
        ResponseModel.incorrect('Conseguir'),
    ]),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        ResponseModel.incorrect('Argentina'),
        ResponseModel.incorrect('Espanha'),
        ResponseModel.incorrect('Brasil'),
        ResponseModel.incorrect('Portugal'),
    ]),
    new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        ResponseModel.incorrect('Costa e Silva'),
        ResponseModel.incorrect('Emílio Médici'),
        ResponseModel.incorrect('Ernesto Geisel'),
        ResponseModel.incorrect('João Figueiredo'),
    ]),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        ResponseModel.incorrect('Ás'),
        ResponseModel.incorrect('Nove'),
        ResponseModel.incorrect('Rei'),
        ResponseModel.incorrect('Valete'),
    ]),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        ResponseModel.incorrect('Vela'),
        ResponseModel.incorrect('Vento'),
        ResponseModel.incorrect('Vênia'),
        ResponseModel.incorrect('Veia'),
    ]),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        ResponseModel.incorrect('Abrupção'),
        ResponseModel.incorrect('Abolição'),
        ResponseModel.incorrect('Abnegação'),
        ResponseModel.incorrect('Ablução'),
    ]),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        ResponseModel.incorrect('Monte Branco'),
        ResponseModel.incorrect('Monte Fuji'),
        ResponseModel.incorrect('Monte Carlo'),
        ResponseModel.incorrect('Monte Everest'),
    ]),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        ResponseModel.incorrect('Estômago'),
        ResponseModel.incorrect('Pâncreas'),
        ResponseModel.incorrect('Rim'),
        ResponseModel.incorrect('Pescoço'),
    ]),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        ResponseModel.incorrect('Déficit'),
        ResponseModel.incorrect('Indexação'),
        ResponseModel.incorrect('Indébito'),
        ResponseModel.incorrect('Indenização'),
    ]),
    new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        ResponseModel.incorrect('Cuca'),
        ResponseModel.incorrect('Curupira'),
        ResponseModel.incorrect('Boitatá'),
        ResponseModel.incorrect('Saci-pererê'),
    ]),
    new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        ResponseModel.incorrect('Marechal Deodoro'),
        ResponseModel.incorrect('Barão de Mauá'),
        ResponseModel.incorrect('Marquês de Pombal'),
        ResponseModel.incorrect('Duque de Caxias'),
    ]),
];

export default questions;
