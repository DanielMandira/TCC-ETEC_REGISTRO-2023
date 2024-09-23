-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16/06/2023 às 01:51
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bibliotec`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `agendamento`
--

CREATE TABLE `agendamento` (
  `codigo_agendamento` int(11) NOT NULL,
  `status_agendamento` varchar(50) NOT NULL,
  `data_prevista_retirada` date DEFAULT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `agendamento`
--

INSERT INTO `agendamento` (`codigo_agendamento`, `status_agendamento`, `data_prevista_retirada`, `id_usuario`, `id_livro`) VALUES
(1, 'Agendado', '2023-05-08', 3, 2),
(3, '', '2022-01-10', 1, 4),
(4, '', '2022-04-17', 4, 5),
(52, 'Agendado', '2023-03-14', 2, 33),
(55, 'Agendado', NULL, 2, 32),
(56, 'Agendado', NULL, 2, 31);

-- --------------------------------------------------------

--
-- Estrutura para tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id_usuario` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL,
  `comentario_user` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `comentarios`
--

INSERT INTO `comentarios` (`id_usuario`, `id_livro`, `comentario_user`) VALUES
(1, 32, 'Livro MAravilhoso Amei a Leitura'),
(2, 2, 'TESTE'),
(1, 2, 'muito.bom.livro'),
(1, 2, 'livrao mt legal recomendo'),
(1, 2, 'qqqqqq');

-- --------------------------------------------------------

--
-- Estrutura para tabela `disponibilidade`
--

CREATE TABLE `disponibilidade` (
  `id_livro` int(11) NOT NULL,
  `quantidade_livro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `disponibilidade`
--

INSERT INTO `disponibilidade` (`id_livro`, `quantidade_livro`) VALUES
(1, 2),
(2, 1),
(3, 1),
(4, 3),
(5, 2),
(32, 1),
(31, 0),
(33, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `emprestimo`
--

CREATE TABLE `emprestimo` (
  `codigo_emprestimo_devolucao` int(11) NOT NULL,
  `data_emprestimo_livro` date NOT NULL,
  `status_emprestimo` varchar(50) NOT NULL,
  `data_devolucao_livro` date DEFAULT NULL,
  `id_livro` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `emprestimo`
--

INSERT INTO `emprestimo` (`codigo_emprestimo_devolucao`, `data_emprestimo_livro`, `status_emprestimo`, `data_devolucao_livro`, `id_livro`, `id_usuario`) VALUES
(1, '2023-03-29', 'Devolvido', '2023-05-04', 1, 1),
(2, '2023-04-20', 'Finalizado', '2023-01-01', 5, 3),
(3, '2023-10-01', 'Devolvido', '2023-08-05', 3, 2),
(4, '2023-09-09', 'Emprestado', '2023-05-19', 4, 4),
(5, '2023-05-17', 'Finalizado', NULL, 7, 2),
(7, '2023-05-17', 'Devolvido', NULL, 14, 2),
(10, '2023-06-14', 'Emprestado', NULL, 2, 2);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `favoritos_usuario`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `favoritos_usuario` (
`nome_usuario` varchar(50)
,`sobrenome_usuario` varchar(50)
,`imagem_usuario` varchar(8000)
,`bio_usuario` varchar(250)
,`imagem_livro` varchar(8000)
,`id_livro` int(11)
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `genero_livro`
--

CREATE TABLE `genero_livro` (
  `codigo_genero` int(11) NOT NULL,
  `nome_genero` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `genero_livro`
--

INSERT INTO `genero_livro` (`codigo_genero`, `nome_genero`) VALUES
(1, 'Ação'),
(2, 'Terror'),
(3, 'Romance'),
(4, 'Ficção'),
(5, 'Suspense'),
(6, 'Drama'),
(7, 'Aventura'),
(8, 'Auto-ajuda'),
(9, 'Fábula'),
(10, 'Literatura Infantil'),
(12, 'Ficção Cientifica'),
(13, 'Enciclopédia'),
(14, 'Fantasia'),
(15, 'Didático'),
(16, 'Hq´s e Mangás'),
(17, 'Biografia');

-- --------------------------------------------------------

--
-- Estrutura para tabela `interesse`
--

CREATE TABLE `interesse` (
  `id_usuario` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `interesse`
--

INSERT INTO `interesse` (`id_usuario`, `id_livro`) VALUES
(2, 3),
(1, 2),
(1, 4),
(2, 5),
(2, 12),
(2, 13),
(2, 10),
(2, 11),
(2, 2),
(2, 33);

-- --------------------------------------------------------

--
-- Estrutura para tabela `livro`
--

CREATE TABLE `livro` (
  `id_livro` int(11) NOT NULL,
  `titulo_livro` varchar(75) NOT NULL,
  `isbn_10` varchar(50) NOT NULL DEFAULT '0',
  `dimensao_livro` varchar(50) NOT NULL DEFAULT '0',
  `autor_livro` varchar(50) NOT NULL,
  `sinopse_livro` varchar(8000) NOT NULL,
  `sobre_autor` longtext DEFAULT NULL,
  `editora_livro` varchar(35) NOT NULL,
  `numero_paginas` int(11) NOT NULL,
  `data_publicacao` varchar(250) DEFAULT NULL,
  `idioma_livro` varchar(250) DEFAULT NULL,
  `imagem_livro` varchar(8000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `livro`
--

INSERT INTO `livro` (`id_livro`, `titulo_livro`, `isbn_10`, `dimensao_livro`, `autor_livro`, `sinopse_livro`, `sobre_autor`, `editora_livro`, `numero_paginas`, `data_publicacao`, `idioma_livro`, `imagem_livro`) VALUES
(1, 'God of war vol. 1', '8580444950', '20.6 x 14 x 2.2 cm', 'Matthew Stover', 'Kratos é um guerreiro grego a serviço dos deuses Gregos do Olimpo. Enganado por Ares, o Deus da Guerra, que quria transformá-lo num guerreiro perfeito, Kratos acidentalmente mata sua esposa e sua filha, mas, depois disso, Kratos decide não servir mais a Ares e é amaldiçoado com as cinzas de sua família morta pelo Oráculo da cidade que foi destruída. Kratos é atormentado com memórias de seus atos e faz um trato de servir aos outros deuses do Olimpo por dez anos. Cansado de servir, convoca Atena e, ela afirma que o perdoará por seus atos se ele realizar uma última tarefa: matar Ares. Para isso ele deve encontrar e usar a Caixa de Pandora. Ao recuperar a Caixa de Pandora de Ares, Kratos a abre e usa o seu poder para tomar os poderes de um deus. Apesar dos esforços de Ares para acabar com Kratos, tanto física quanto mentalmente, incluindo ser despojado das Lâminas do Caos, perder os Poderes Divinos, e lutar contra uma Horda de Clones e perder sua família novamente, Kratos sobrevive e mata seu inimigo com a lendária Lâmina dos Deuses. Atenas é salva, e apesar de Atena dizer que seus pecados foram perdoados, seus pesadelos não poderão ser parados. Kratos, então, tenta cometer suicídio lançando-se no Mar Egeu, mas Atena intervém dizendo que não cabe a ele tirar sua própria vida, pois teria matado um deus, e leva-o de volta para o Monte Olimpo. Como recompensa por seus serviços aos deuses, Atena lhe concede as Lâminas de Atena e Kratos se torna o novo Deus da Guerra.', NULL, 'Leya', 384, NULL, 'Português', 'https://m.media-amazon.com/images/I/51DpnBPeExL._SX327_BO1,204,203,200_.jpg'),
(2, 'A batalha do apocalipse: Da queda dos anjos ao crepúsculo do mundo', '9788576860761', '23 x 15.4 x 3.8 cm', 'Eduardo Spohr', 'Tudo começou há muitos e muitos anos, há tantos anos quanto o número de estrelas no céu, o Paraíso Celeste foi palco de um terrível levante. Um grupo de anjos guerreiros, amantes da justiça e da liberdade, desafiou a tirania dos poderosos arcanjos, levantando armas contra seus opressores. Expulsos, os renegados foram forçados ao exílio, e condenados a vagar pelo mundo dos homens até o dia do Juízo Final.\nMas eis que chega o momento do Apocalipse, o tempo do ajuste de contas, o dia do despertar do Altíssimo. Único sobrevivente do expurgo, o líder dos renegados é convidado por Lúcifer, o Arcanjo Negro, a se juntar às suas legiões na batalha do Armagedon, o embate final entre o Céu e o Inferno, a guerra que decidirá não só o destino do mundo, mas o futuro do universo.\nDas ruínas da Babilônia ao esplendor do Império Romano; das vastas planícies da China aos gelados castelos da Inglaterra medieval. A Batalha do Apocalipse não é apenas uma viagem pela história humana, mas é também uma jornada de conhecimento, um épico empolgante, cheio de lutas heroicas, magia, romance e suspense.\nA batalha do apocalipse colocará o estreante Eduardo Spohr ao lado dos mais criativos ficcionistas da nossa literatura.\nNão há na literatura em língua portuguesa conhecida nada que se pareça com A Batalha do Apocalipse. Nas páginas que compõem o volume, Eduardo Spohr nos dá lições de criatividade ficcional, igualando-se mais aos filmes épicos e menos, muito menos, à simples science fiction de antigamente, segundo a óptica de um Isaac Asimov e até mesmo do admirável Ray Bradbury.', 'Eduardo Spohr nasceu em 1976, no Rio de Janeiro. Filho de um piloto de aviões e uma comissária de bordo, teve a oportunidade de viajar pelo mundo, conhecendo culturas e povos diferentes. A paixão pela literatura e o fascínio pelo estudo da história o levaram a cursar comunicação social. Começou a trabalhar em agências de publicidade, mas acabou, gradualmente, migrando para o jornalismo. Formou-se pela PUC-Rio em 2001 e se especializou em mídias digitais. Trabalhou como repórter no Cadê Notícias, StarMedia e iG, como analista de conteúdo do iBest e depois como editor do portal Click 21. Participante regular do NerdCast, o podcast do site Jovem Nerd, é consultor de roteiro e ministra o curso “Estrutura literária: a jornada do herói no cinema e na literatura”, nas Faculdade Hélio Alonso (Facha), do Rio de Janeiro.', 'Verus', 588, NULL, 'Português', 'https://m.media-amazon.com/images/I/51IvzsNhsRL._SX350_BO1,204,203,200_.jpg'),
(3, 'Filhos do Éden: Herdeiros de Atlântida (Vol. 1)', '9788576861416', '22.8 x 15.2 x 2.8 cm', 'Eduardo Spohr', 'Com mais de 145 mil exemplares de seu livro de estreia vendidos, o autor comprouve-se um fenômeno editorial por ter sido o único brasileiro presente por vários meses nas listas de mais 52 vendidos do gênero ficção em 2010, revelando a força de consumo cultural de um segmento de jovens cada vez maior, comumente denominados nerds. Seu novo romance, um fascinante thriller de fantasia é o primeiro volume de uma saga que mistura História, romance e mitologia. Em meio a uma guerra no céu entre o arcanjo Miguel e os exércitos rebeldes do arcanjo Gabriel, dois anjos são enviados à Terra para encontrar Kaira, líder dos rebeldes há anos desaparecida. Vivendo no plano físico, a brava jovem luta para recuperar sua memória. Para encontrá-la os anjos vão contar ainda com ajuda de Denyel, um querubim exilado, que trabalhara como assassino das legiões inimigas, mas que hoje, solitário e desonrado, procura ser incorporado às fileiras rebeldes. Em paralelo, o leitor acompanha um terceiro personagem, conhecido como Primeiro Anjo, o líder dos sentinelas - poderosos agentes designados por Deus para, num passado remoto, instruir e proteger as primeiras tribos humanas. Punidos por se recusarem a tomar parte nas catástrofes antigas, os sentinelas agora buscam vingança.', 'Eduardo Spohr nasceu em 1976, no Rio de Janeiro. Filho de um piloto de aviões e uma comissária de bordo, teve a oportunidade de viajar pelo mundo, conhecendo culturas e povos diferentes. A paixão pela literatura e o fascínio pelo estudo da história o levaram a cursar comunicação social. Começou a trabalhar em agências de publicidade, mas acabou, gradualmente, migrando para o jornalismo. Formou-se pela PUC-Rio em 2001 e se especializou em mídias digitais. Trabalhou como repórter no Cadê Notícias, StarMedia e iG, como analista de conteúdo do iBest e depois como editor do portal Click 21. Participante regular do NerdCast, o podcast do site Jovem Nerd, é consultor de roteiro e ministra o curso “Estrutura literária: a jornada do herói no cinema e na literatura”, nas Faculdade Hélio Alonso (Facha), do Rio de Janeiro.', 'Verus', 476, NULL, 'Português', 'https://m.media-amazon.com/images/I/41WZnmJ0V9L._SX335_BO1,204,203,200_.jpg'),
(4, 'Filhos do Éden: Anjos da morte (Vol. 2)', '857686245X', '22.8 x 15.6 x 3 cm', 'Eduardo Spohr', 'Desde eras longínquas, os malakins, anjos estudiosos e sábios, observam em silêncio o progresso do homem. Mas eis que chega o século XX, e com ele as armas modernas, a poluição das indústrias, afastando os mortais da natureza divina, alargando as fronteiras entre o nosso mundo e as sete camadas do céu. Isolados no paraíso, incapazes agora de enxergar o planeta, esses anjos solicitaram a ajuda dos “exilados”, celestiais pacíficos, que havia anos atuavam na terra. Sua tarefa, a partir de então, seria participar das guerras humanas, de todas as guerras, para anotar as façanhas militares, os movimentos de tropas, e depois relatá-los a seus superiores alados. Sob o disfarce de soldados comuns, esse grupo esteve presente desde as praias da Normandia aos campos de extermínio nazistas, das selvas da Indochina ao declínio da União Soviética. Embora muitos não desejassem matar, foi isso o que lhes foi ordenado, e o que infelizmente acabaram fazendo. Repleto de batalhas épicas, magia negra e personagens fantásticos, Filhos do Éden: Anjos da Morte é também um inquietante relato sobre o nosso tempo, uma crítica à corrupção dos governos, aos massacres e extremismos, um alerta para o que nos tornamos e para o que ainda podemos nos tornar.', 'Eduardo Spohr nasceu em 1976, no Rio de Janeiro. Filho de um piloto de aviões e uma comissária de bordo, teve a oportunidade de viajar pelo mundo, conhecendo culturas e povos diferentes. A paixão pela literatura e o fascínio pelo estudo da história o levaram a cursar comunicação social. Começou a trabalhar em agências de publicidade, mas acabou, gradualmente, migrando para o jornalismo. Formou-se pela PUC-Rio em 2001 e se especializou em mídias digitais. Trabalhou como repórter no Cadê Notícias, StarMedia e iG, como analista de conteúdo do iBest e depois como editor do portal Click 21. Participante regular do NerdCast, o podcast do site Jovem Nerd, é consultor de roteiro e ministra o curso “Estrutura literária: a jornada do herói no cinema e na literatura”, nas Faculdade Hélio Alonso (Facha), do Rio de Janeiro.', 'Verus', 588, NULL, 'Português', 'https://m.media-amazon.com/images/I/41WvSC2umPL._SX335_BO1,204,203,200_.jpg'),
(5, 'Filhos do Éden: Paraíso Perdido (Vol. 3)', '8576864754', '22.8 x 15 x 3.6 cm', 'Eduardo Spohr', 'Paraíso Perdido é o terceiro livro da série Filhos do Éden. Neste último volume da trilogia, acompanhamos a caçada a Metatron, o mais antigo e poderoso entre os anjos, que recentemente escapou do cárcere no Segundo Céu e agora pretende retomar o controle do mundo, desafiando tanto as legiões do arcanjo Miguel quanto as tropas revolucionárias de Gabriel.\nMetatron foi o líder dos sentinelas, um coro enviado à terra por Deus no princípio dos tempos, com a função de proteger e instruir a humanidade. Quando os arcanjos decidiram acabar com os seres humanos, afundando o planeta na era do gelo, Metatron e seus asseclas se revoltaram, tornando-se inimigos do céu e sendo posteriormente acossados.\nParaíso Perdido é dividido em três partes, cada qual com uma atmosfera própria e personagens diferentes. O primeiro trecho se passa em Asgard, a dimensão dos deuses nórdicos, onde Denyel, o anjo exilado, acorda ao final do volume anterior da trilogia após ser sugado pelo rio Oceanus. Kaira, a Centelha Divina, uma das arcontes de Gabriel, vai ao seu encontro com o objetivo de resgatá-lo e trazê-lo de volta ao plano físico, através da legendária Ponte Bifrost.\nA segunda parte tem lugar antes do dilúvio. Conforme mostrado no volume anterior, Ablon, o Vingador, então um dos generais de Miguel, é ordenado a capturar Metatron e trazê-lo vivo aos Sete Céus. O segundo terço do livro destaca esse período, revelando um Ablon diferente daquele que conhecemos nas páginas de A Batalha do Apocalipse, ainda fiel a seus chefes e às forças do paraíso.\nEssas duas jornadas convergem na parte três, que finalmente explicará como Ablon, há trinta e cinco mil anos, conseguiu enclausurar Metatron, e como Kaira, Urakin e Denyel, no presente, farão para enfrentar o poderoso anjo, um celeste muitíssimo mais forte que eles, invencível em vários aspectos.\nParaíso Perdido é uma aventura extraordinária, que encerra a saga monumental iniciada em Herdeiros de Atlântida e expandida em Anjos da Morte, culminando com os eventos que darão origem à grande Batalha do Apocalipse, retratada no romance homônimo de Eduardo Spohr.', 'Eduardo Spohr nasceu em 1976, no Rio de Janeiro. Filho de um piloto de aviões e uma comissária de bordo, teve a oportunidade de viajar pelo mundo, conhecendo culturas e povos diferentes. A paixão pela literatura e o fascínio pelo estudo da história o levaram a cursar comunicação social. Começou a trabalhar em agências de publicidade, mas acabou, gradualmente, migrando para o jornalismo. Formou-se pela PUC-Rio em 2001 e se especializou em mídias digitais. Trabalhou como repórter no Cadê Notícias, StarMedia e iG, como analista de conteúdo do iBest e depois como editor do portal Click 21. Participante regular do NerdCast, o podcast do site Jovem Nerd, é consultor de roteiro e ministra o curso “Estrutura literária: a jornada do herói no cinema e na literatura”, nas Faculdade Hélio Alonso (Facha), do Rio de Janeiro.', 'Verus', 560, NULL, 'Português', 'https://m.media-amazon.com/images/I/41a0PA+2tlL._SX335_BO1,204,203,200_.jpg'),
(7, 'A Arte da Guerra', '6556600490', '14 x 1.7 x 21.6 cm', 'Sun Tzu', 'A arte da guerra é o mais importante tratado sobre a estratégia já produzido.', NULL, 'Edipro', 160, NULL, 'Português', 'https://m.media-amazon.com/images/I/41qyAVTNvvL._SX360_BO1,204,203,200_.jpg'),
(9, 'Percy Jackson e o Ladrão de Raios', '8580575397', '21 x 13.4 x 2.2 cm', 'Rick Riordan', 'Primeiro volume da saga Percy Jackson e os olimpianos, O ladrão de raios esteve entre os primeiros lugares na lista das séries mais vendidas do The New York Times.', NULL, 'Intrínseca', 400, NULL, 'Português', 'https://m.media-amazon.com/images/I/41lwbj-W2yL._SY498_BO1,204,203,200_.jpg'),
(10, 'Os aventureiros em Ação', '6586668271', '22 x 0.5 x 31 cm', 'Luccas Neto', 'Sempre a postos para combater o mal, os Aventureiros formam um importante grupo de heróis que tem como principal missão proteger a cidade das garras dos terriveis vilões. Essa nem sempre é uma tarefa fácil, mas eles não dormem em serviço e não medem esforços para que o bem sempre vença o mal. Que tal se juntar a eles? Os Aventureiros estão prontos para entrar em ação e gostariam de convidá-lo a mergulhar de cabeça nas aventuras e desafios que eles precisam enfrentar. Você está pronto para esta missão? Abra livro e use toda a sua imaginação e criatividade para explorar o incrivel universo dos Aventureiros!', NULL, 'Pixel', 64, NULL, 'Português', 'https://m.media-amazon.com/images/I/5174Hy+Pl2L._SY498_BO1,204,203,200_.jpg'),
(11, 'O Pequeno Príncipe', '8595081514', '22.6 x 15 x 0.8 cm', 'Antonie de Saint-Exupéry', 'O grande clássico de todos os tempos! As sábias, encantadoras e inesquecíveis histórias contadas pelo pequeno príncipe falam de seu próprio planeta, com seus três vulcões e uma flor presunçosa. Uma história maravilhosa e profunda, para todas as idades, e ilustrada pelo próprio autor.\r\n\r\nEdição brochura, no formato tradicional da obra.\r\n\r\nNova tradução, pela professora de Literatura Francesa Isolina Bresolin Vianna. Ilustrado com as aquarelas do próprio Saint-Exupéry.\r\n\r\nO Pequeno Príncipe é um dos maiores clássicos da literatura francesa.\r\n\r\nSempre presente nas listas de best-sellers, já foi publicado em mais de 250 idiomas, e tornou-se o livro mais lido e mais traduzido na literatura internacional.\r\n\r\nEsta edição, que conta ainda com uma inovação editorial: é a única a trazer as ilustrações posicionadas fielmente à sequência da própria narrativa.', NULL, 'Via Leitura', 98, NULL, 'Português', 'https://m.media-amazon.com/images/I/51-UuQsj6NL._SX344_BO1,204,203,200_.jpg'),
(12, 'Wereworld: A origem do Lobo', '8502135341', '22.86 x 15.75 x 2.54 cm', 'Curtis Jobling', 'Imagine um mundo governado pelos Werelords - homens e mulheres que podem se transformar em ursos, lobos, leões, serpentes e outros animais perigosos. É nesse cenário que Drew Ferran, um adolescente de 16 anos, descobre que, além de ser um Werewolf - um lobisomem -, é também o herdeiro desaparecido do trono do rei Lobo. Agora ele precisa usar toda sua astúcia e seus novos poderes para sobreviver numa terra povoada de inimigos. Ainda mais porque ele é o único que pode unir o reino na luta contra o usurpador do cetro real, o tirano Leopold, o Leão, um legítimo e temido Werelion. A missão parece impossível e ficará mais difícil porque Leopold já está atrás de Drew e não vai descansar até ter a cabeça do Lobo rebelde. Nessa batalha de vida ou morte, todo o futuro de um mundo fantástico está em jogo - e só Drew pode alterar o destino de seu povo.', NULL, 'Benvirá', 368, NULL, 'Português', 'https://m.media-amazon.com/images/I/515jtdFxONL._SX337_BO1,204,203,200_.jpg'),
(13, 'A máquina do Tempo', '856709738X', '20.8 x 13.8 x 0.8 cm', 'H. G. Wells', 'Publicado em 1895, A Máquina do Tempo é considerado um dos primeiros romances a tratar do conceito de viagem no tempo.\r\n\r\nO personagem central, um cientista apresentado na trama apenas como o Viajante do Tempo, constrói uma máquina capaz de viajar pela quarta dimensão.\r\n\r\nAo testá-la, é transportado para o ano de 802.701, em um mundo povoado pelos pacíficos elóis.\r\n\r\nMas os elóis não são os únicos habitantes dessa nova Terra, e o Viajante do Tempo terá de enfrentar os morlocks, seres que vivem nos subterrâneos e guardam um importante segredo sobre o destino da humanidade.\r\n\r\nA Máquina do Tempo foi o primeiro romance publicado por H. G. Wells. Seu sucesso instantâneo na época abriu as portas para todo um novo gênero literário que até hoje agrada a leitores de todas as idades.', NULL, 'Via Leitura', 112, NULL, 'Português', 'https://m.media-amazon.com/images/I/51OfxjzcrnL._SX331_BO1,204,203,200_.jpg'),
(14, 'Duna: livro 1', '857657313X', '23.4 x 16.4 x 4.2 cm', 'Frank Herbert', 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.', NULL, 'Editora Aleph', 680, NULL, 'Português', 'https://m.media-amazon.com/images/I/41MRn6hy8-L._SX346_BO1,204,203,200_.jpg'),
(15, 'Interestelar', '8583110549', '21.2 x 14 x 1.6 cm', 'Jonathan Nolan', '\"O FIM DA TERRA NÃO SERÁ O NOSSO FIM\". Do aclamado cineasta Christopher Nolan, diretor de A origem (Inception) e da trilogia Batman – O Cavaleiro das Trevas (Batman - The Dark Knight), INTERESTELAR é a crônica de um grupo de exploradores que se aproveita de um recém-descoberto buraco de minhoca para ultrapassar os limites das viagens espaciais tripuladas e assim conquistar as grandes distâncias de uma jornada interestelar. Enquanto viajam, estão em risco o destino do planeta... Terra...e o futuro da raça humana. INTERESTELAR será o primeiro de uma série de livros que o novo selo editorial GRYPHUS GEEK oferecerá a seus leitores. O selo será dedicado à publicação de obras de ficção que remetam ao universo geek a partir de filmes, seriados de televisão ou livros originais. Ao lançar os livros Supernatural, a Gryphus Editora constatou existir um amplo público formado por leitores jovens adultos, ávidos por novidades desse segmento. GRYPHUS GEEK foi criado exatamente para atender essa demanda, oferecendo obras de prestígio e qualidade desse fascinante universo geek. O livro INTERESTELAR consegue explicar com clareza a teoria do físico Kip Thorne, que inspirou esta incrível história de ficção científica. Não é por nada que o filme, estrelado por Matthew McConaughey e Anne Hathaway,tornou-se imediatamente um cult mundial. No entanto, graças ao livro, com suas 268 páginas, as complexas e sofisticadas teorias desenvolvidas por Kip Thorne ficam accessíveis à maioria dos leitores. O filme, por sua vez, até pela sua própria linguagem e natureza, não consegue \'traduzir\' toda a profundidade e dimensão da história. Um livro profundo e interessante, para aqueles que viram o filme e para os que se preocupam com o futuro da humanidade.', NULL, 'Gryphus Editora', 279, NULL, 'Português', 'https://m.media-amazon.com/images/I/514ChKFvfPL.jpg'),
(31, '2001: Uma Odisseia no Espaço', '6586064066', '14 x 3 x 21 cm', 'Arthur C. Clarke', 'Nos primórdios da humanidade, quando a fome e os predadores ameaçavam a raça humana, chega à Terra um objeto inusitado, inacessível à limitada compreensão da mente pré-histórica, mas que influencia os homens a descobrir coisas que permitem a sua própria evolução.\r\nMilhões de anos depois, a descoberta de um monólito soterrado na Lua deixa os cientistas perplexos. Para investigar esse mistério, a Terra envia ao espaço uma equipe altamente treinada e HAL 9000, uma inteligência artificial responsável pelo funcionamento da nave e pela segurança dos tripulantes. Porém, o surgimento de pequenas falhas levanta a suspeita de que há algo errado com a missão.\r\nEscrito por Arthur C. Clarke com o intuito de expandir a história criada com Stanley Kubrick para o cinema, 2001: uma odisseia no espaço desconcerta o leitor e o conduz a um futuro alternativo da história humana.', NULL, 'Editora Aleph', 336, NULL, 'Português', 'https://m.media-amazon.com/images/I/51NllOwQA7L._SX331_BO1,204,203,200_.jpg'),
(32, 'Da Terra à Lua', '6555521732', '22.4 x 15.2 x 0.8 cm', 'Júlio Verne', 'Da Terra à Lua é a primeira história da exploração espacial escrita. Foi publicada em 1865 e apresenta, de maneira surpreendente, conjectura científica precisa. Quando os membros do Baltimore Gun Club veteranos de guerra entediados decidem embarcar em um projeto para atirar na lua, começa a corrida para arrecadar dinheiro, superar desafios de engenharia e convencer os detratores de que eles não são Lunáticos.', 'Jules Gabriel Verne, conhecido nos países de língua portuguesa por Júlio Verne, foi um escritor francês. Júlio Verne foi o primogênito dos cinco filhos de Pierre Verne, advogado, e Sophie Allote de la Fuÿe, esta de uma família burguesa de Nantes.', 'Principis', 192, '5 janeiro 2021', 'Português', 'https://m.media-amazon.com/images/I/51N7FrJaAgL._SX341_BO1,204,203,200_.jpg'),
(33, 'triângulo', '9788577991464', '51156', 'Ken Follett', 'Em 1968. um grupo terrorista planeja construir uma arma de destruição em massa que pode mudar o destino da humanidade. Nat Dickstein. agente secreto israelense. é encarregado de roubar 200 toneladas de urânio sem levantar suspeitas. Mas quando Dickstein se apaixona por Suza Ashford. mulher deslumbrante. é impossível saber se ele encontrou uma grande aliada ou sua pior inimiga. Misturando fatos históricos e ficção. Ken Follett constrói um thriller envolvente em torno de uma das mais audaciosas missões de todos os tempos. “Follett é mestre em criar tramas engenhosas. \" - Time Magazine “Um dos maiores romancistas de espionagem. ” - San Francisco Chronicle', 'asdasd', 'BestBoloso', 458, '2012/01/12', 'Português', 'https://m.media-amazon.com/images/I/51cxtUddNML._SX330_BO1,204,203,200_.jpg');

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `livros_acao`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `livros_acao` (
`id_livro` int(11)
,`titulo_livro` varchar(75)
,`autor_livro` varchar(50)
,`imagem_livro` varchar(8000)
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `livro_genero`
--

CREATE TABLE `livro_genero` (
  `id_livro` int(11) NOT NULL,
  `codigo_genero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `livro_genero`
--

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
(11, 7),
(10, 9),
(10, 10),
(10, 7),
(9, 4),
(9, 1),
(9, 7),
(9, 3),
(12, 4),
(12, 7),
(33, 1);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `quantidade_livro`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `quantidade_livro` (
`titulo_livro` varchar(75)
,`quantidade_livro` int(11)
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome_usuario` varchar(50) NOT NULL,
  `sobrenome_usuario` varchar(50) NOT NULL,
  `email_usuario` varchar(50) NOT NULL,
  `tipo_usuario` varchar(25) NOT NULL,
  `telefone_usuario` varchar(20) NOT NULL,
  `senha_usuario` varchar(50) NOT NULL,
  `genero_usuario` varchar(35) NOT NULL,
  `data_nasc_usuario` date NOT NULL,
  `imagem_usuario` varchar(8000) DEFAULT NULL,
  `rua_usuario` varchar(100) NOT NULL,
  `cidade_usuario` varchar(50) NOT NULL,
  `bairro_usuario` varchar(50) NOT NULL,
  `numeroResidencia_usuario` int(11) NOT NULL,
  `bio_usuario` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome_usuario`, `sobrenome_usuario`, `email_usuario`, `tipo_usuario`, `telefone_usuario`, `senha_usuario`, `genero_usuario`, `data_nasc_usuario`, `imagem_usuario`, `rua_usuario`, `cidade_usuario`, `bairro_usuario`, `numeroResidencia_usuario`, `bio_usuario`) VALUES
(1, 'Bruno', 'Dornelas', 'bruno.oliveira867@etec.sp.gov.br', 'Administrador', '13996271945', 'f9dd4ecba5e25999ab63a9aa968c939d', 'Masculino', '2004-08-15', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW28P5SO5y9ybV687dRYWjkehwbWU1j7RKbQ&usqp=CAU', 'Rua Palmeiras; ', 'Cajati', 'Centro', 24, NULL),
(2, 'Daniel', 'Mandira', 'daniel.mandira@etec.sp.gov.br', 'Administrador', '13991941160', 'e70b912021a164a5ec0d5b14cc33cd75', 'Masculino', '1998-02-19', 'https://media.licdn.com/dms/image/D5603AQHIr_3VjRk72Q/profile-displayphoto-shrink_800_800/0/1671203519580?e=2147483647&v=beta&t=OJaV61WIduVrtEY0w04JKnnNdN6DAhg6yvf2B1RRmP4', 'Rua Clovis Noronha; ', 'Jacupiranga', 'Vila Elias', 175, 'Somellier dos Amargores da Vida\nADM :S\nDS Quase Lá'),
(3, 'Leonardo', '', 'leonardo.ferreira243@etec.sp.gov.br', 'Administrador', '13996318473', 'LeoLeoLeo', 'Masculino', '2004-06-11', 'blob:https://web.whatsapp.com/3bb6b032-0e86-4c6b-ab12-d1a01798100e', 'Rua Ferreira Costa Hon; ', 'Cananéia', 'Porto Cubatão', 101, NULL),
(4, 'Mauricio', 'Bertoldo', 'mauricio.oliveira104@etec.sp.gov.br', 'Administrador', '13996229224', 'MauMauMau', 'Masculino', '2004-07-29', 'blob:https://web.whatsapp.com/6a96f916-eccb-4498-88ea-49a9e078ef34', 'Rua José Monteiro Alecrm, Viela das Hortências; ', 'Cajati', 'Parafuso', 7, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(5, 'Dani', 'Mandira', 'email@email.com', '', '123456789', '99a29dc8105fd2fa39d8', 'Masculino', '1998-02-19', '', 'Rua C', 'Jacu', 'Vila', 175, '');

-- --------------------------------------------------------

--
-- Estrutura para view `favoritos_usuario`
--
DROP TABLE IF EXISTS `favoritos_usuario`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `favoritos_usuario`  AS SELECT `usuario`.`nome_usuario` AS `nome_usuario`, `usuario`.`sobrenome_usuario` AS `sobrenome_usuario`, `usuario`.`imagem_usuario` AS `imagem_usuario`, `usuario`.`bio_usuario` AS `bio_usuario`, `livro`.`imagem_livro` AS `imagem_livro`, `interesse`.`id_livro` AS `id_livro` FROM ((`usuario` join `interesse` on(`interesse`.`id_usuario` = `usuario`.`id_usuario`)) join `livro` on(`interesse`.`id_livro` = `livro`.`id_livro`)) WHERE `usuario`.`id_usuario` = '2' ;

-- --------------------------------------------------------

--
-- Estrutura para view `livros_acao`
--
DROP TABLE IF EXISTS `livros_acao`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `livros_acao`  AS SELECT `livro`.`id_livro` AS `id_livro`, `livro`.`titulo_livro` AS `titulo_livro`, `livro`.`autor_livro` AS `autor_livro`, `livro`.`imagem_livro` AS `imagem_livro` FROM ((`livro` join `livro_genero` on(`livro`.`id_livro` = `livro_genero`.`id_livro`)) join `genero_livro` on(`genero_livro`.`codigo_genero` = `livro_genero`.`codigo_genero`)) WHERE `genero_livro`.`nome_genero` = 'acao' ;

-- --------------------------------------------------------

--
-- Estrutura para view `quantidade_livro`
--
DROP TABLE IF EXISTS `quantidade_livro`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `quantidade_livro`  AS SELECT `livro`.`titulo_livro` AS `titulo_livro`, `disponibilidade`.`quantidade_livro` AS `quantidade_livro` FROM (`disponibilidade` join `livro` on(`disponibilidade`.`id_livro` = `livro`.`id_livro`)) ;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agendamento`
--
ALTER TABLE `agendamento`
  ADD PRIMARY KEY (`codigo_agendamento`),
  ADD KEY `id_livro` (`id_livro`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD KEY `id_livro` (`id_livro`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `disponibilidade`
--
ALTER TABLE `disponibilidade`
  ADD KEY `id_livro` (`id_livro`);

--
-- Índices de tabela `emprestimo`
--
ALTER TABLE `emprestimo`
  ADD PRIMARY KEY (`codigo_emprestimo_devolucao`),
  ADD KEY `id_livro` (`id_livro`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `genero_livro`
--
ALTER TABLE `genero_livro`
  ADD PRIMARY KEY (`codigo_genero`),
  ADD UNIQUE KEY `codigo_genero` (`codigo_genero`);

--
-- Índices de tabela `interesse`
--
ALTER TABLE `interesse`
  ADD KEY `id_livro` (`id_livro`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `livro`
--
ALTER TABLE `livro`
  ADD PRIMARY KEY (`id_livro`),
  ADD UNIQUE KEY `id_livro` (`id_livro`);

--
-- Índices de tabela `livro_genero`
--
ALTER TABLE `livro_genero`
  ADD KEY `id_livro` (`id_livro`),
  ADD KEY `codigo_genero` (`codigo_genero`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD UNIQUE KEY `email_usuario` (`email_usuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agendamento`
--
ALTER TABLE `agendamento`
  MODIFY `codigo_agendamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de tabela `emprestimo`
--
ALTER TABLE `emprestimo`
  MODIFY `codigo_emprestimo_devolucao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `genero_livro`
--
ALTER TABLE `genero_livro`
  MODIFY `codigo_genero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `livro`
--
ALTER TABLE `livro`
  MODIFY `id_livro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `agendamento`
--
ALTER TABLE `agendamento`
  ADD CONSTRAINT `agendamento_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  ADD CONSTRAINT `agendamento_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Restrições para tabelas `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Restrições para tabelas `disponibilidade`
--
ALTER TABLE `disponibilidade`
  ADD CONSTRAINT `disponibilidade_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`);

--
-- Restrições para tabelas `emprestimo`
--
ALTER TABLE `emprestimo`
  ADD CONSTRAINT `emprestimo_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  ADD CONSTRAINT `emprestimo_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Restrições para tabelas `interesse`
--
ALTER TABLE `interesse`
  ADD CONSTRAINT `interesse_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  ADD CONSTRAINT `interesse_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Restrições para tabelas `livro_genero`
--
ALTER TABLE `livro_genero`
  ADD CONSTRAINT `livro_genero_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  ADD CONSTRAINT `livro_genero_ibfk_2` FOREIGN KEY (`codigo_genero`) REFERENCES `genero_livro` (`codigo_genero`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
