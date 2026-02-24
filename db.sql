CREATE TABLE `professeur` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `email` varchar(255),
  `password_hash` varchar(255)
);

CREATE TABLE `eleve` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `prenom` varchar(255),
  `classe` varchar(255),
  `professeur_id` int
);

CREATE TABLE `note` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `valeur` float,
  `matiere` varchar(255),
  `coefficient` int,
  `date` date,
  `eleve_id` int,
  `professeur_id` int
);

ALTER TABLE `eleve` ADD FOREIGN KEY (`professeur_id`) REFERENCES `professeur` (`id`);

ALTER TABLE `note` ADD FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`id`);

ALTER TABLE `note` ADD FOREIGN KEY (`professeur_id`) REFERENCES `professeur` (`id`);