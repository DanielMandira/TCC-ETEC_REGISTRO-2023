-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.1.33-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para bibliotec
CREATE DATABASE IF NOT EXISTS `bibliotec` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bibliotec`;

-- Copiando estrutura para tabela bibliotec.agendamento
CREATE TABLE IF NOT EXISTS `agendamento` (
  `codigo_agendamento` int(11) NOT NULL AUTO_INCREMENT,
  `data_prevista_devolucao` date NOT NULL,
  `data_prevista_retirada` date NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL,
  PRIMARY KEY (`codigo_agendamento`),
  KEY `id_livro` (`id_livro`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `agendamento_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  CONSTRAINT `agendamento_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.agendamento: ~4 rows (aproximadamente)
DELETE FROM `agendamento`;
/*!40000 ALTER TABLE `agendamento` DISABLE KEYS */;
INSERT INTO `agendamento` (`codigo_agendamento`, `data_prevista_devolucao`, `data_prevista_retirada`, `id_usuario`, `id_livro`) VALUES
	(1, '2022-04-15', '2022-03-31', 3, 2),
	(2, '2022-03-29', '2022-03-14', 2, 2),
	(3, '2022-01-25', '2022-01-10', 1, 4),
	(4, '2022-05-02', '2022-04-17', 4, 5);
/*!40000 ALTER TABLE `agendamento` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.categoria_livro
CREATE TABLE IF NOT EXISTS `categoria_livro` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nome_categoria` varchar(75) NOT NULL,
  `descricao_categoria` varchar(2500) NOT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `id_categoria` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.categoria_livro: ~11 rows (aproximadamente)
DELETE FROM `categoria_livro`;
/*!40000 ALTER TABLE `categoria_livro` DISABLE KEYS */;
INSERT INTO `categoria_livro` (`id_categoria`, `nome_categoria`, `descricao_categoria`) VALUES
	(1, 'Didático', 'livros feitos para o estudo técnico de áreas específicas.'),
	(2, 'Épico', 'texto literário que classifica uma ação heróica, real ou fictícia.'),
	(3, 'Poesia', 'composição harmoniosa escrita em versos'),
	(4, 'Infantis', 'textos variados que tem as crianças como público alvo'),
	(5, 'HQ', 'Histórias contadas por meio de quadros que unem diálogo, narração e imagem'),
	(6, 'Apostilas', 'Coletânea de aulas transcritas, em cópias, para alunos'),
	(7, 'Biografia', 'Narração das várias fases da vida de uma pessoa ou personagem'),
	(8, 'Fantasioso', 'Obra criada a partir da imaginação, sem compromisso com a realidade'),
	(9, 'Conto', 'Narrativas curtas, ou pequenas histórias'),
	(10, 'Enciclopédia', 'Obras que reúnem os conhecimentos humanos acerca de diversos assuntos'),
	(11, 'peça de teatro', 'roteiros e transcrições de peças apresentadas em teatros.');
/*!40000 ALTER TABLE `categoria_livro` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.comentarios
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id_usuario` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL,
  `comentario_user` longtext,
  KEY `id_livro` (`id_livro`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.comentarios: ~0 rows (aproximadamente)
DELETE FROM `comentarios`;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.disponibilidade
CREATE TABLE IF NOT EXISTS `disponibilidade` (
  `id_livro` int(11) NOT NULL,
  `quantidade_livro` int(11) NOT NULL,
  KEY `id_livro` (`id_livro`),
  CONSTRAINT `disponibilidade_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.disponibilidade: ~5 rows (aproximadamente)
DELETE FROM `disponibilidade`;
/*!40000 ALTER TABLE `disponibilidade` DISABLE KEYS */;
INSERT INTO `disponibilidade` (`id_livro`, `quantidade_livro`) VALUES
	(1, 2),
	(2, 1),
	(3, 1),
	(4, 3),
	(5, 2);
/*!40000 ALTER TABLE `disponibilidade` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.emprestimo
CREATE TABLE IF NOT EXISTS `emprestimo` (
  `codigo_emprestimo_devolucao` int(11) NOT NULL AUTO_INCREMENT,
  `data_entrada_livro` date NOT NULL,
  `data_saida_livro` date NOT NULL,
  `idEmprestimo_livro` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`codigo_emprestimo_devolucao`),
  KEY `idEmprestimo_livro` (`idEmprestimo_livro`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `emprestimo_ibfk_1` FOREIGN KEY (`idEmprestimo_livro`) REFERENCES `livro` (`id_livro`),
  CONSTRAINT `emprestimo_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.emprestimo: ~4 rows (aproximadamente)
DELETE FROM `emprestimo`;
/*!40000 ALTER TABLE `emprestimo` DISABLE KEYS */;
INSERT INTO `emprestimo` (`codigo_emprestimo_devolucao`, `data_entrada_livro`, `data_saida_livro`, `idEmprestimo_livro`, `id_usuario`) VALUES
	(1, '2023-03-29', '2023-03-10', 1, 1),
	(2, '2023-04-20', '2023-01-01', 5, 3),
	(3, '2023-10-01', '2023-08-05', 3, 2),
	(4, '2023-09-09', '2023-05-19', 4, 4);
/*!40000 ALTER TABLE `emprestimo` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.genero_livro
CREATE TABLE IF NOT EXISTS `genero_livro` (
  `codigo_genero` int(11) NOT NULL AUTO_INCREMENT,
  `nome_genero` varchar(30) NOT NULL,
  PRIMARY KEY (`codigo_genero`),
  UNIQUE KEY `codigo_genero` (`codigo_genero`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.genero_livro: ~12 rows (aproximadamente)
DELETE FROM `genero_livro`;
/*!40000 ALTER TABLE `genero_livro` DISABLE KEYS */;
INSERT INTO `genero_livro` (`codigo_genero`, `nome_genero`) VALUES
	(1, 'Ação'),
	(2, 'Terror'),
	(3, 'Romance'),
	(4, 'Ficcção'),
	(5, 'Suspense'),
	(6, 'Drama'),
	(7, 'Aventura'),
	(8, 'Auto-ajuda'),
	(9, 'Fábula'),
	(10, 'Literatura Infantil'),
	(11, 'Novela'),
	(12, 'Ficção Cientifica');
/*!40000 ALTER TABLE `genero_livro` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.interesse
CREATE TABLE IF NOT EXISTS `interesse` (
  `id_usuario` int(11) NOT NULL,
  `idInteresse_livro` int(11) NOT NULL,
  KEY `id_livro` (`idInteresse_livro`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `interesse_ibfk_1` FOREIGN KEY (`idInteresse_livro`) REFERENCES `livro` (`id_livro`),
  CONSTRAINT `interesse_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.interesse: ~5 rows (aproximadamente)
DELETE FROM `interesse`;
/*!40000 ALTER TABLE `interesse` DISABLE KEYS */;
INSERT INTO `interesse` (`id_usuario`, `idInteresse_livro`) VALUES
	(2, 2),
	(2, 3),
	(1, 2),
	(1, 4),
	(2, 5);
/*!40000 ALTER TABLE `interesse` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.livro
CREATE TABLE IF NOT EXISTS `livro` (
  `id_livro` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_livro` varchar(75) NOT NULL,
  `isbn_10` varchar(50) NOT NULL DEFAULT '0',
  `dimensao_livro` varchar(50) NOT NULL DEFAULT '0',
  `autor_livro` varchar(50) NOT NULL,
  `sinopse_livro` varchar(8000) NOT NULL,
  `editora_livro` varchar(35) NOT NULL,
  `numero_paginas` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `imagem_livro` varchar(8000) DEFAULT NULL,
  PRIMARY KEY (`id_livro`),
  UNIQUE KEY `id_livro` (`id_livro`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `livro_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria_livro` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.livro: ~15 rows (aproximadamente)
DELETE FROM `livro`;
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` (`id_livro`, `titulo_livro`, `isbn_10`, `dimensao_livro`, `autor_livro`, `sinopse_livro`, `editora_livro`, `numero_paginas`, `id_categoria`, `imagem_livro`) VALUES
	(1, 'God of war (vol. 1)', '8580444950', '20.6 x 14 x 2.2 cm', 'Matthew Stover', 'Kratos é um guerreiro grego a serviço dos deuses Gregos do Olimpo. Enganado por Ares, o Deus da Guerra, que quria transformá-lo num guerreiro perfeito, Kratos acidentalmente mata sua esposa e sua filha, mas, depois disso, Kratos decide não servir mais a Ares e é amaldiçoado com as cinzas de sua família morta pelo Oráculo da cidade que foi destruída. Kratos é atormentado com memórias de seus atos e faz um trato de servir aos outros deuses do Olimpo por dez anos. Cansado de servir, convoca Atena e, ela afirma que o perdoará por seus atos se ele realizar uma última tarefa: matar Ares. Para isso ele deve encontrar e usar a Caixa de Pandora. Ao recuperar a Caixa de Pandora de Ares, Kratos a abre e usa o seu poder para tomar os poderes de um deus. Apesar dos esforços de Ares para acabar com Kratos, tanto física quanto mentalmente, incluindo ser despojado das Lâminas do Caos, perder os Poderes Divinos, e lutar contra uma Horda de Clones e perder sua família novamente, Kratos sobrevive e mata seu inimigo com a lendária Lâmina dos Deuses. Atenas é salva, e apesar de Atena dizer que seus pecados foram perdoados, seus pesadelos não poderão ser parados. Kratos, então, tenta cometer suicídio lançando-se no Mar Egeu, mas Atena intervém dizendo que não cabe a ele tirar sua própria vida, pois teria matado um deus, e leva-o de volta para o Monte Olimpo. Como recompensa por seus serviços aos deuses, Atena lhe concede as Lâminas de Atena e Kratos se torna o novo Deus da Guerra.', 'Leya', 384, 8, 'https://m.media-amazon.com/images/I/51DpnBPeExL._SX327_BO1,204,203,200_.jpg'),
	(2, 'A batalha do apocalipse: Da queda dos anjos ao crepúsculo do mundo', '9788576860761', '23 x 15.4 x 3.8 cm', 'Eduardo Spohr', 'Tudo começou há muitos e muitos anos, há tantos anos quanto o número de estrelas no céu, o Paraíso Celeste foi palco de um terrível levante. Um grupo de anjos guerreiros, amantes da justiça e da liberdade, desafiou a tirania dos poderosos arcanjos, levantando armas contra seus opressores. Expulsos, os renegados foram forçados ao exílio, e condenados a vagar pelo mundo dos homens até o dia do Juízo Final.\nMas eis que chega o momento do Apocalipse, o tempo do ajuste de contas, o dia do despertar do Altíssimo. Único sobrevivente do expurgo, o líder dos renegados é convidado por Lúcifer, o Arcanjo Negro, a se juntar às suas legiões na batalha do Armagedon, o embate final entre o Céu e o Inferno, a guerra que decidirá não só o destino do mundo, mas o futuro do universo.\nDas ruínas da Babilônia ao esplendor do Império Romano; das vastas planícies da China aos gelados castelos da Inglaterra medieval. A Batalha do Apocalipse não é apenas uma viagem pela história humana, mas é também uma jornada de conhecimento, um épico empolgante, cheio de lutas heroicas, magia, romance e suspense.\nA batalha do apocalipse colocará o estreante Eduardo Spohr ao lado dos mais criativos ficcionistas da nossa literatura.\nNão há na literatura em língua portuguesa conhecida nada que se pareça com A Batalha do Apocalipse. Nas páginas que compõem o volume, Eduardo Spohr nos dá lições de criatividade ficcional, igualando-se mais aos filmes épicos e menos, muito menos, à simples science fiction de antigamente, segundo a óptica de um Isaac Asimov e até mesmo do admirável Ray Bradbury.', 'Verus', 588, 8, 'https://m.media-amazon.com/images/I/51IvzsNhsRL._SX350_BO1,204,203,200_.jpg'),
	(3, 'Filhos do Éden: Herdeiros de Atlântida (Vol. 1)', '9788576861416', '22.8 x 15.2 x 2.8 cm', 'Eduardo Spohr', 'Com mais de 145 mil exemplares de seu livro de estreia vendidos, o autor comprouve-se um fenômeno editorial por ter sido o único brasileiro presente por vários meses nas listas de mais 52 vendidos do gênero ficção em 2010, revelando a força de consumo cultural de um segmento de jovens cada vez maior, comumente denominados nerds. Seu novo romance, um fascinante thriller de fantasia é o primeiro volume de uma saga que mistura História, romance e mitologia. Em meio a uma guerra no céu entre o arcanjo Miguel e os exércitos rebeldes do arcanjo Gabriel, dois anjos são enviados à Terra para encontrar Kaira, líder dos rebeldes há anos desaparecida. Vivendo no plano físico, a brava jovem luta para recuperar sua memória. Para encontrá-la os anjos vão contar ainda com ajuda de Denyel, um querubim exilado, que trabalhara como assassino das legiões inimigas, mas que hoje, solitário e desonrado, procura ser incorporado às fileiras rebeldes. Em paralelo, o leitor acompanha um terceiro personagem, conhecido como Primeiro Anjo, o líder dos sentinelas - poderosos agentes designados por Deus para, num passado remoto, instruir e proteger as primeiras tribos humanas. Punidos por se recusarem a tomar parte nas catástrofes antigas, os sentinelas agora buscam vingança.', 'Verus', 476, 8, 'https://m.media-amazon.com/images/I/41WZnmJ0V9L._SX335_BO1,204,203,200_.jpg'),
	(4, 'Filhos do Éden: Anjos da morte (Vol. 2)', '857686245X', '22.8 x 15.6 x 3 cm', 'Eduardo Spohr', 'Desde eras longínquas, os malakins, anjos estudiosos e sábios, observam em silêncio o progresso do homem. Mas eis que chega o século XX, e com ele as armas modernas, a poluição das indústrias, afastando os mortais da natureza divina, alargando as fronteiras entre o nosso mundo e as sete camadas do céu. Isolados no paraíso, incapazes agora de enxergar o planeta, esses anjos solicitaram a ajuda dos “exilados”, celestiais pacíficos, que havia anos atuavam na terra. Sua tarefa, a partir de então, seria participar das guerras humanas, de todas as guerras, para anotar as façanhas militares, os movimentos de tropas, e depois relatá-los a seus superiores alados. Sob o disfarce de soldados comuns, esse grupo esteve presente desde as praias da Normandia aos campos de extermínio nazistas, das selvas da Indochina ao declínio da União Soviética. Embora muitos não desejassem matar, foi isso o que lhes foi ordenado, e o que infelizmente acabaram fazendo. Repleto de batalhas épicas, magia negra e personagens fantásticos, Filhos do Éden: Anjos da Morte é também um inquietante relato sobre o nosso tempo, uma crítica à corrupção dos governos, aos massacres e extremismos, um alerta para o que nos tornamos e para o que ainda podemos nos tornar.', 'Verus', 588, 8, 'https://m.media-amazon.com/images/I/41WvSC2umPL._SX335_BO1,204,203,200_.jpg'),
	(5, 'Filhos do Éden: Paraíso Perdido (Vol. 3)', '8576864754', '22.8 x 15 x 3.6 cm', 'Eduardo Spohr', 'Paraíso Perdido é o terceiro livro da série Filhos do Éden. Neste último volume da trilogia, acompanhamos a caçada a Metatron, o mais antigo e poderoso entre os anjos, que recentemente escapou do cárcere no Segundo Céu e agora pretende retomar o controle do mundo, desafiando tanto as legiões do arcanjo Miguel quanto as tropas revolucionárias de Gabriel.\nMetatron foi o líder dos sentinelas, um coro enviado à terra por Deus no princípio dos tempos, com a função de proteger e instruir a humanidade. Quando os arcanjos decidiram acabar com os seres humanos, afundando o planeta na era do gelo, Metatron e seus asseclas se revoltaram, tornando-se inimigos do céu e sendo posteriormente acossados.\nParaíso Perdido é dividido em três partes, cada qual com uma atmosfera própria e personagens diferentes. O primeiro trecho se passa em Asgard, a dimensão dos deuses nórdicos, onde Denyel, o anjo exilado, acorda ao final do volume anterior da trilogia após ser sugado pelo rio Oceanus. Kaira, a Centelha Divina, uma das arcontes de Gabriel, vai ao seu encontro com o objetivo de resgatá-lo e trazê-lo de volta ao plano físico, através da legendária Ponte Bifrost.\nA segunda parte tem lugar antes do dilúvio. Conforme mostrado no volume anterior, Ablon, o Vingador, então um dos generais de Miguel, é ordenado a capturar Metatron e trazê-lo vivo aos Sete Céus. O segundo terço do livro destaca esse período, revelando um Ablon diferente daquele que conhecemos nas páginas de A Batalha do Apocalipse, ainda fiel a seus chefes e às forças do paraíso.\nEssas duas jornadas convergem na parte três, que finalmente explicará como Ablon, há trinta e cinco mil anos, conseguiu enclausurar Metatron, e como Kaira, Urakin e Denyel, no presente, farão para enfrentar o poderoso anjo, um celeste muitíssimo mais forte que eles, invencível em vários aspectos.\nParaíso Perdido é uma aventura extraordinária, que encerra a saga monumental iniciada em Herdeiros de Atlântida e expandida em Anjos da Morte, culminando com os eventos que darão origem à grande Batalha do Apocalipse, retratada no romance homônimo de Eduardo Spohr.', 'Verus', 560, 8, 'https://m.media-amazon.com/images/I/41a0PA+2tlL._SX335_BO1,204,203,200_.jpg'),
	(7, 'A Arte da Guerra', '6556600490', '14 x 1.7 x 21.6 cm', 'Sun Tzu', 'A arte da guerra é o mais importante tratado sobre a estratégia já produzido.', 'Edipro', 160, 9, 'https://m.media-amazon.com/images/I/41qyAVTNvvL._SX360_BO1,204,203,200_.jpg'),
	(9, 'Percy Jackson e o Ladrão de Raios', '8580575397', '21 x 13.4 x 2.2 cm', 'Rick Riordan', 'Primeiro volume da saga Percy Jackson e os olimpianos, O ladrão de raios esteve entre os primeiros lugares na lista das séries mais vendidas do The New York Times.', 'Intrínseca', 400, 2, 'https://m.media-amazon.com/images/I/41lwbj-W2yL._SY498_BO1,204,203,200_.jpg'),
	(10, 'Os aventureiros em Ação', '6586668271', '22 x 0.5 x 31 cm', 'Luccas Neto', 'Sempre a postos para combater o mal, os Aventureiros formam um importante grupo de heróis que tem como principal missão proteger a cidade das garras dos terriveis vilões. Essa nem sempre é uma tarefa fácil, mas eles não dormem em serviço e não medem esforços para que o bem sempre vença o mal. Que tal se juntar a eles? Os Aventureiros estão prontos para entrar em ação e gostariam de convidá-lo a mergulhar de cabeça nas aventuras e desafios que eles precisam enfrentar. Você está pronto para esta missão? Abra livro e use toda a sua imaginação e criatividade para explorar o incrivel universo dos Aventureiros!', 'Pixel', 64, 4, 'https://m.media-amazon.com/images/I/5174Hy+Pl2L._SY498_BO1,204,203,200_.jpg'),
	(11, 'O Pequeno Príncipe', '8595081514', '22.6 x 15 x 0.8 cm', 'Antonie de Saint-Exupéry', 'O grande clássico de todos os tempos! As sábias, encantadoras e inesquecíveis histórias contadas pelo pequeno príncipe falam de seu próprio planeta, com seus três vulcões e uma flor presunçosa. Uma história maravilhosa e profunda, para todas as idades, e ilustrada pelo próprio autor.\r\n\r\nEdição brochura, no formato tradicional da obra.\r\n\r\nNova tradução, pela professora de Literatura Francesa Isolina Bresolin Vianna. Ilustrado com as aquarelas do próprio Saint-Exupéry.\r\n\r\nO Pequeno Príncipe é um dos maiores clássicos da literatura francesa.\r\n\r\nSempre presente nas listas de best-sellers, já foi publicado em mais de 250 idiomas, e tornou-se o livro mais lido e mais traduzido na literatura internacional.\r\n\r\nEsta edição, que conta ainda com uma inovação editorial: é a única a trazer as ilustrações posicionadas fielmente à sequência da própria narrativa.', 'Via Leitura', 98, 9, 'https://m.media-amazon.com/images/I/51-UuQsj6NL._SX344_BO1,204,203,200_.jpg'),
	(12, 'Wereworld: A origem do Lobo', '8502135341', '22.86 x 15.75 x 2.54 cm', 'Curtis Jobling', 'Imagine um mundo governado pelos Werelords - homens e mulheres que podem se transformar em ursos, lobos, leões, serpentes e outros animais perigosos. É nesse cenário que Drew Ferran, um adolescente de 16 anos, descobre que, além de ser um Werewolf - um lobisomem -, é também o herdeiro desaparecido do trono do rei Lobo. Agora ele precisa usar toda sua astúcia e seus novos poderes para sobreviver numa terra povoada de inimigos. Ainda mais porque ele é o único que pode unir o reino na luta contra o usurpador do cetro real, o tirano Leopold, o Leão, um legítimo e temido Werelion. A missão parece impossível e ficará mais difícil porque Leopold já está atrás de Drew e não vai descansar até ter a cabeça do Lobo rebelde. Nessa batalha de vida ou morte, todo o futuro de um mundo fantástico está em jogo - e só Drew pode alterar o destino de seu povo.', 'Benvirá', 368, 2, 'https://m.media-amazon.com/images/I/515jtdFxONL._SX337_BO1,204,203,200_.jpg'),
	(13, 'A máquina do Tempo', '856709738X', '20.8 x 13.8 x 0.8 cm', 'H. G. Wells', 'Publicado em 1895, A Máquina do Tempo é considerado um dos primeiros romances a tratar do conceito de viagem no tempo.\r\n\r\nO personagem central, um cientista apresentado na trama apenas como o Viajante do Tempo, constrói uma máquina capaz de viajar pela quarta dimensão.\r\n\r\nAo testá-la, é transportado para o ano de 802.701, em um mundo povoado pelos pacíficos elóis.\r\n\r\nMas os elóis não são os únicos habitantes dessa nova Terra, e o Viajante do Tempo terá de enfrentar os morlocks, seres que vivem nos subterrâneos e guardam um importante segredo sobre o destino da humanidade.\r\n\r\nA Máquina do Tempo foi o primeiro romance publicado por H. G. Wells. Seu sucesso instantâneo na época abriu as portas para todo um novo gênero literário que até hoje agrada a leitores de todas as idades.', 'Via Leitura', 112, 8, 'https://m.media-amazon.com/images/I/51OfxjzcrnL._SX331_BO1,204,203,200_.jpg'),
	(14, 'Duna: livro 1', '857657313X', '23.4 x 16.4 x 4.2 cm', 'Frank Herbert', 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.', 'Editora Aleph', 680, 2, 'https://m.media-amazon.com/images/I/41MRn6hy8-L._SX346_BO1,204,203,200_.jpg'),
	(15, 'Interestelar', '8583110549', '21.2 x 14 x 1.6 cm', 'Jonathan Nolan', '"O FIM DA TERRA NÃO SERÁ O NOSSO FIM". Do aclamado cineasta Christopher Nolan, diretor de A origem (Inception) e da trilogia Batman – O Cavaleiro das Trevas (Batman - The Dark Knight), INTERESTELAR é a crônica de um grupo de exploradores que se aproveita de um recém-descoberto buraco de minhoca para ultrapassar os limites das viagens espaciais tripuladas e assim conquistar as grandes distâncias de uma jornada interestelar. Enquanto viajam, estão em risco o destino do planeta... Terra...e o futuro da raça humana. INTERESTELAR será o primeiro de uma série de livros que o novo selo editorial GRYPHUS GEEK oferecerá a seus leitores. O selo será dedicado à publicação de obras de ficção que remetam ao universo geek a partir de filmes, seriados de televisão ou livros originais. Ao lançar os livros Supernatural, a Gryphus Editora constatou existir um amplo público formado por leitores jovens adultos, ávidos por novidades desse segmento. GRYPHUS GEEK foi criado exatamente para atender essa demanda, oferecendo obras de prestígio e qualidade desse fascinante universo geek. O livro INTERESTELAR consegue explicar com clareza a teoria do físico Kip Thorne, que inspirou esta incrível história de ficção científica. Não é por nada que o filme, estrelado por Matthew McConaughey e Anne Hathaway,tornou-se imediatamente um cult mundial. No entanto, graças ao livro, com suas 268 páginas, as complexas e sofisticadas teorias desenvolvidas por Kip Thorne ficam accessíveis à maioria dos leitores. O filme, por sua vez, até pela sua própria linguagem e natureza, não consegue \'traduzir\' toda a profundidade e dimensão da história. Um livro profundo e interessante, para aqueles que viram o filme e para os que se preocupam com o futuro da humanidade.', 'Gryphus Editora', 279, 2, 'https://m.media-amazon.com/images/I/514ChKFvfPL.jpg'),
	(31, '2001: Uma Odisseia no Espaço', '6586064066', '14 x 3 x 21 cm', 'Arthur C. Clarke', 'Nos primórdios da humanidade, quando a fome e os predadores ameaçavam a raça humana, chega à Terra um objeto inusitado, inacessível à limitada compreensão da mente pré-histórica, mas que influencia os homens a descobrir coisas que permitem a sua própria evolução.\r\nMilhões de anos depois, a descoberta de um monólito soterrado na Lua deixa os cientistas perplexos. Para investigar esse mistério, a Terra envia ao espaço uma equipe altamente treinada e HAL 9000, uma inteligência artificial responsável pelo funcionamento da nave e pela segurança dos tripulantes. Porém, o surgimento de pequenas falhas levanta a suspeita de que há algo errado com a missão.\r\nEscrito por Arthur C. Clarke com o intuito de expandir a história criada com Stanley Kubrick para o cinema, 2001: uma odisseia no espaço desconcerta o leitor e o conduz a um futuro alternativo da história humana.', 'Editora Aleph', 336, 2, 'https://m.media-amazon.com/images/I/51NllOwQA7L._SX331_BO1,204,203,200_.jpg'),
	(32, 'Da Terra à Lua', '6555521732', '22.4 x 15.2 x 0.8 cm', 'Júlio Verne', 'Da Terra à Lua é a primeira história da exploração espacial escrita. Foi publicada em 1865 e apresenta, de maneira surpreendente, conjectura científica precisa. Quando os membros do Baltimore Gun Club veteranos de guerra entediados decidem embarcar em um projeto para atirar na lua, começa a corrida para arrecadar dinheiro, superar desafios de engenharia e convencer os detratores de que eles não são Lunáticos.', 'Principis', 192, 8, 'https://m.media-amazon.com/images/I/51N7FrJaAgL._SX341_BO1,204,203,200_.jpg');
/*!40000 ALTER TABLE `livro` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.livro_genero
CREATE TABLE IF NOT EXISTS `livro_genero` (
  `id_livro` int(11) NOT NULL,
  `codigo_genero` int(11) NOT NULL,
  KEY `id_livro` (`id_livro`),
  KEY `codigo_genero` (`codigo_genero`),
  CONSTRAINT `livro_genero_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  CONSTRAINT `livro_genero_ibfk_2` FOREIGN KEY (`codigo_genero`) REFERENCES `genero_livro` (`codigo_genero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.livro_genero: ~41 rows (aproximadamente)
DELETE FROM `livro_genero`;
/*!40000 ALTER TABLE `livro_genero` DISABLE KEYS */;
INSERT INTO `livro_genero` (`id_livro`, `codigo_genero`) VALUES
	(1, 1),
	(1, 7),
	(1, 4),
	(31, 12),
	(7, 8),
	(2, 1),
	(2, 7),
	(2, 4),
	(2, 3),
	(13, 12),
	(13, 3),
	(32, 12),
	(32, 3),
	(14, 12),
	(14, 3),
	(4, 1),
	(4, 7),
	(4, 3),
	(4, 4),
	(3, 1),
	(3, 7),
	(3, 4),
	(3, 3),
	(5, 1),
	(5, 7),
	(5, 4),
	(5, 3),
	(15, 12),
	(11, 4),
	(11, 9),
	(11, 10),
	(11, 11),
	(10, 9),
	(10, 10),
	(10, 7),
	(9, 4),
	(9, 1),
	(9, 7),
	(9, 3),
	(12, 4),
	(12, 7);
/*!40000 ALTER TABLE `livro_genero` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.pessoas
CREATE TABLE IF NOT EXISTS `pessoas` (
  `cpf` varchar(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `salario` double NOT NULL,
  PRIMARY KEY (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.pessoas: ~0 rows (aproximadamente)
DELETE FROM `pessoas`;
/*!40000 ALTER TABLE `pessoas` DISABLE KEYS */;
/*!40000 ALTER TABLE `pessoas` ENABLE KEYS */;

-- Copiando estrutura para tabela bibliotec.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(50) NOT NULL,
  `sobrenome_usuario` varchar(50) NOT NULL,
  `email_usuario` varchar(50) NOT NULL,
  `tipo_usuario` varchar(25) NOT NULL,
  `telefone_usuario` varchar(20) NOT NULL,
  `senha_usuario` varchar(20) NOT NULL,
  `genero_usuario` varchar(35) NOT NULL,
  `data_nasc_usuario` date NOT NULL,
  `imagem_usuario` varchar(8000) DEFAULT NULL,
  `rua_usuario` varchar(100) NOT NULL,
  `cidade_usuario` varchar(50) NOT NULL,
  `bairro_usuario` varchar(50) NOT NULL,
  `numeroResidencia_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `id_usuario` (`id_usuario`),
  UNIQUE KEY `email_usuario` (`email_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bibliotec.usuario: ~4 rows (aproximadamente)
DELETE FROM `usuario`;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`id_usuario`, `nome_usuario`, `sobrenome_usuario`, `email_usuario`, `tipo_usuario`, `telefone_usuario`, `senha_usuario`, `genero_usuario`, `data_nasc_usuario`, `imagem_usuario`, `rua_usuario`, `cidade_usuario`, `bairro_usuario`, `numeroResidencia_usuario`) VALUES
	(1, 'Bruno', '', 'bruno.oliveira867@etec.sp.gov.br', 'Administrador', '13996271945', 'BruBruBru', 'Masculino', '2004-08-15', 'blob:https://web.whatsapp.com/e27b2efc-2f96-4316-8472-d5101cc06296', 'Rua Palmeiras; ', 'Cajati', 'Centro', 24),
	(2, 'Daniel', 'Mandira', 'daniel.mandira@etec.sp.gov.br', 'Administrador', '13991941160', 'DanDanDan', 'Masculino', '1998-02-19', 'https://media.licdn.com/dms/image/D5603AQHIr_3VjRk72Q/profile-displayphoto-shrink_800_800/0/1671203519580?e=2147483647&v=beta&t=OJaV61WIduVrtEY0w04JKnnNdN6DAhg6yvf2B1RRmP4', 'Rua Clovis Noronha; ', 'Jacupiranga', 'Vila Elias', 175),
	(3, 'Leonardo', '', 'leonardo.ferreira243@etec.sp.gov.br', 'Administrador', '13996318473', 'LeoLeoLeo', 'Masculino', '2004-06-11', 'blob:https://web.whatsapp.com/3bb6b032-0e86-4c6b-ab12-d1a01798100e', 'Rua Ferreira Costa Hon; ', 'Cananéia', 'Porto Cubatão', 101),
	(4, 'Mauricio', '', 'mauricio.oliveira104@etec.sp.gov.br', 'Administrador', '13996229224', 'MauMauMau', 'Masculino', '2004-07-29', 'blob:https://web.whatsapp.com/6a96f916-eccb-4498-88ea-49a9e078ef34', 'Rua José Monteiro Alecrm, Viela das Hortências; ', 'Cajati', 'Parafuso', 7),
	(5, '', '', '', '', '', '', '', '0000-00-00', NULL, '', '', '', 0),
	(10, '$varNome', '$varSobrenome', '$varemail', '', '$varCelular', '$varsenha', '$varGenero', '0000-00-00', NULL, '', '', '', 0),
	(12, '$varNome', '$varSobrenome', '$varemsail', 'Administrador', '$varCelular', '$varsenha', '$varGenero', '0000-00-00', 'blob:https://web.whatsapp.com/e27b2efc-2f96-4316-8472-d5101cc06296', 'Rua Palmeiras;', 'Cajati', 'Centro', 24),
	(14, '$varNome', '$varSobrenome', '$varemsasil', 'Administrador', '$varCelular', '$varsenha', '$varGenero', '2004-07-29', 'blob:https://web.whatsapp.com/e27b2efc-2f96-4316-8472-d5101cc06296', 'Rua Palmeiras;', 'Cajati', 'Centro', 24),
	(15, 'aaaaaa', 'bbbbbbbbb', 'mauriciobertoldodeoliveiraa@gmail.com', 'Administrador', '13 996229224', '', 'masculo', '2004-07-29', 'blob:https://web.whatsapp.com/e27b2efc-2f96-4316-8472-d5101cc06296', 'Rua Palmeiras;', 'Cajati', 'Centro', 24),
	(17, 'aaaaaa', 'bbbbbbbbb', 'mauriciobertoldodeoliveiraaa@gmail.com', 'Administrador', '13 996229224', '1234', 'masculo', '2004-07-29', 'blob:https://web.whatsapp.com/e27b2efc-2f96-4316-8472-d5101cc06296', 'Rua Palmeiras;', 'Cajati', 'Centro', 24),
	(21, 'sdfsadf', 'asdfasdf', 'mauriciossbertoldodeoliveira@gmail.com', 'Usuario', '13 996229224', '1234', 'Masculino', '2004-07-29', 'https://img.freepik.com/vetores-premium/icone-de-circulo-de-usuario-anonimo-estilo-simples-de-ilustracao-vetorial-com-sombra-longa_520826-1931.jpg', 'Rua José Monteiro Alecrim', 'Cajati', 'Parafuso', 76),
	(23, 'sdfsadf', 'asdfasdf', 'mauriciosssbertoldodeoliveira@gmail.com', 'Usuario', '13 996229224', '1234', 'Masculino', '2004-07-29', 'https://img.freepik.com/vetores-premium/icone-de-circulo-de-usuario-anonimo-estilo-simples-de-ilustracao-vetorial-com-sombra-longa_520826-1931.jpg', 'Rua José Monteiro Alecrim', 'Cajati', 'Parafuso', 76);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
