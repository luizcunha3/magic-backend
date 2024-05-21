CREATE TABLE `usuario_carta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_carta` varchar(255) NOT NULL,
  `id_local` int NOT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_local` (`id_local`),
  KEY `id_carta` (`id_carta`),
  CONSTRAINT `usuario_carta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`),
  CONSTRAINT `usuario_carta_ibfk_3` FOREIGN KEY (`id_local`) REFERENCES `local` (`id`),
  CONSTRAINT `usuario_carta_ibfk_4` FOREIGN KEY (`id_carta`) REFERENCES `carta` (`scryfall_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;