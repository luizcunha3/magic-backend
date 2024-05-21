CREATE TABLE `carta` (
  `scryfall_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `oracle_id` text,
  `name` text,
  `scryfall_uri` text,
  `image_small` text,
  `image_medium` text,
  `image_large` text,
  `image_png` text,
  `mana_cost` text,
  `cmc` int DEFAULT NULL,
  `type_line` text,
  `oracle_text` text,
  `color_identity` text,
  PRIMARY KEY (`scryfall_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;