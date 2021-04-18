-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.7.26 - MySQL Community Server (GPL)
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para tindev
CREATE DATABASE IF NOT EXISTS `tindev` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tindev`;

-- Copiando estrutura para tabela tindev.conversation_messages
CREATE TABLE IF NOT EXISTS `conversation_messages` (
  `id_menssage` int(11) NOT NULL AUTO_INCREMENT,
  `id_conversation` int(11) NOT NULL,
  `id_profile` int(11) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `id_profile2` int(11) NOT NULL,
  PRIMARY KEY (`id_menssage`)
) ENGINE=MyISAM AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tindev.conversation_messages: 58 rows
/*!40000 ALTER TABLE `conversation_messages` DISABLE KEYS */;
INSERT INTO `conversation_messages` (`id_menssage`, `id_conversation`, `id_profile`, `content`, `created_at`, `deleted_at`, `id_profile2`) VALUES
	(8, 27, 1, 'Oi', '2019-12-03 00:35:16', NULL, 4),
	(2, 9, 4, 'Ola', '2019-12-01 00:35:38', NULL, 2),
	(7, 30, 3, 'Fala Narutao', '2019-12-03 00:35:16', NULL, 5),
	(6, 31, 1, 'Oi', '2019-12-03 00:35:16', NULL, 5),
	(9, 27, 4, 'Eai, blz...', '2019-12-05 00:09:56', NULL, 1),
	(10, 27, 1, 'blz e tu?', '2019-12-07 15:30:04', NULL, 4),
	(11, 27, 1, 'dboa?', '2019-12-07 16:32:09', NULL, 4),
	(12, 27, 1, 'hein...?', '2019-12-08 02:24:23', NULL, 4),
	(13, 27, 4, 'tranks', '2019-12-08 02:25:20', NULL, 1),
	(14, 27, 1, 'tbm to tranks', '2019-12-08 02:38:37', NULL, 4),
	(15, 27, 1, 'tendeu', '2019-12-08 02:51:07', NULL, 4),
	(16, 27, 4, 'tendi', '2019-12-08 02:51:25', NULL, 1),
	(17, 27, 1, 'q bom', '2019-12-08 02:52:54', NULL, 4),
	(18, 27, 4, 'teste Papa - Joao', '2019-12-08 02:55:29', NULL, 1),
	(19, 27, 1, 'teste Joao - Papa', '2019-12-08 02:55:49', NULL, 4),
	(20, 27, 4, 'oi', '2019-12-08 02:55:59', NULL, 1),
	(21, 27, 1, 'toppen', '2019-12-08 02:56:07', NULL, 4),
	(22, 27, 4, 'guuo', '2019-12-08 02:57:07', NULL, 1),
	(23, 27, 1, 'bla', '2019-12-08 02:57:20', NULL, 4),
	(24, 27, 4, 'jvjgvkbyu', '2019-12-08 02:57:27', NULL, 1),
	(25, 27, 1, 'gvytvuyvu', '2019-12-08 02:57:34', NULL, 4),
	(26, 27, 4, 'qeqweq', '2019-12-08 03:05:24', NULL, 1),
	(27, 27, 4, 'asdasd', '2019-12-08 03:05:29', NULL, 1),
	(28, 27, 4, 'poipoipo', '2019-12-08 03:05:36', NULL, 1),
	(29, 31, 1, 'blz', '2019-12-08 03:08:49', NULL, 5),
	(30, 31, 5, 'bele e tu', '2019-12-08 03:09:47', NULL, 1),
	(31, 31, 5, 'suavidade', '2019-12-08 03:09:58', NULL, 1),
	(32, 31, 1, 'sempre meu rei', '2019-12-08 03:10:07', NULL, 5),
	(33, 31, 1, 'hbuyu', '2019-12-08 03:10:57', NULL, 5),
	(34, 31, 1, 'iubib', '2019-12-08 03:11:03', NULL, 5),
	(35, 31, 5, 'suavidhbibiubade', '2019-12-08 03:11:09', NULL, 1),
	(36, 31, 5, '', '2019-12-08 03:11:16', NULL, 1),
	(37, 31, 5, 'hbkuh', '2019-12-08 03:11:20', NULL, 1),
	(38, 31, 1, 'Ola dnv', '2019-12-16 00:15:08', NULL, 5),
	(39, 31, 5, 'kndkal', '2019-12-16 00:15:30', NULL, 1),
	(40, 31, 1, 'Ola dnv dnv', '2019-12-16 00:15:39', NULL, 5),
	(41, 31, 5, 'asd', '2019-12-16 00:16:02', NULL, 1),
	(42, 31, 1, 'Ola dnv dnv dnv', '2019-12-16 00:16:29', NULL, 5),
	(43, 31, 5, 'asdcd', '2019-12-16 00:17:16', NULL, 1),
	(44, 31, 1, 'hummm', '2019-12-16 00:17:32', NULL, 5),
	(45, 27, 4, 'd', '2019-12-16 00:19:38', NULL, 1),
	(46, 27, 4, 'dok', '2019-12-16 00:19:43', NULL, 1),
	(47, 27, 4, 'iojdifj', '2019-12-16 00:21:03', NULL, 4),
	(48, 31, 1, 'ola', '2019-12-16 00:26:25', NULL, 5),
	(49, 31, 1, 'olac', '2019-12-16 00:26:32', NULL, 5),
	(50, 31, 5, 'oi', '2019-12-16 00:26:38', NULL, 1),
	(51, 31, 5, 'oi', '2019-12-16 00:26:40', NULL, 1),
	(52, 31, 1, 'olacoa', '2019-12-16 00:26:45', NULL, 5),
	(53, 27, 1, 'isud', '2019-12-16 00:27:48', NULL, 4),
	(54, 27, 4, 'humm', '2019-12-16 00:27:56', NULL, 1),
	(55, 27, 4, 'hummmm', '2019-12-16 00:28:01', NULL, 1),
	(56, 31, 5, 'oiiii', '2019-12-16 00:28:20', NULL, 1),
	(57, 30, 3, 'dboa', '2019-12-16 00:30:53', NULL, 5),
	(58, 30, 5, 'tranquilo', '2019-12-16 00:31:20', NULL, 3),
	(59, 30, 3, 'opa', '2019-12-16 00:31:38', NULL, 5),
	(60, 30, 3, 'q bom', '2019-12-16 00:31:48', NULL, 5),
	(61, 30, 5, 'neh nao', '2019-12-16 00:32:04', NULL, 3),
	(62, 30, 5, 'kkkk', '2019-12-16 00:32:10', NULL, 3);
/*!40000 ALTER TABLE `conversation_messages` ENABLE KEYS */;

-- Copiando estrutura para view tindev.developers
-- Criando tabela temporária para evitar erros de dependência de VIEW
CREATE TABLE `developers` (
	`id` INT(11) NOT NULL,
	`name` VARCHAR(50) NULL COLLATE 'latin1_swedish_ci',
	`image_url` VARCHAR(100) NULL COLLATE 'latin1_swedish_ci',
	`age` INT(11) NOT NULL,
	`bio` TEXT NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Copiando estrutura para tabela tindev.profiles_routine
CREATE TABLE IF NOT EXISTS `profiles_routine` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_profile` int(10) NOT NULL,
  `time` time NOT NULL,
  `id_routine_body_part` int(10) NOT NULL,
  `id_product_type` int(10) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_at_timezone` varchar(36) DEFAULT NULL,
  `changed_at` datetime DEFAULT NULL,
  `changed_at_timezone` varchar(36) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `deleted_at_timezone` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_profile` (`id_profile`,`id_product_type`,`id_routine_body_part`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tindev.profiles_routine: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `profiles_routine` DISABLE KEYS */;
/*!40000 ALTER TABLE `profiles_routine` ENABLE KEYS */;

-- Copiando estrutura para tabela tindev.profile_conversation
CREATE TABLE IF NOT EXISTS `profile_conversation` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_profile` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_at_timezone` varchar(36) DEFAULT NULL,
  `changed_at` datetime DEFAULT NULL,
  `changed_at_timezone` varchar(36) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `deleted_at_timezone` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_profile` (`id_profile`,`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tindev.profile_conversation: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `profile_conversation` DISABLE KEYS */;
INSERT INTO `profile_conversation` (`id`, `id_profile`, `id_user`, `created_at`, `created_at_timezone`, `changed_at`, `changed_at_timezone`, `deleted_at`, `deleted_at_timezone`) VALUES
	(9, 4, 2, '2019-11-30 23:43:59', NULL, NULL, NULL, NULL, NULL),
	(26, 1, 2, '2019-12-03 00:27:46', NULL, NULL, NULL, NULL, NULL),
	(27, 1, 4, '2019-12-03 00:27:46', NULL, NULL, NULL, NULL, NULL),
	(28, 1, 3, '2019-12-03 00:28:20', NULL, NULL, NULL, NULL, NULL),
	(30, 5, 3, '2019-12-04 00:53:07', NULL, NULL, NULL, NULL, NULL),
	(31, 1, 5, '2019-12-04 10:00:36', NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `profile_conversation` ENABLE KEYS */;

-- Copiando estrutura para procedure tindev.sp_return_conversations
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_return_conversations`(IN in_id_profile int(10), IN in_id_profile2 VARCHAR(5) )
BEGIN
	SET @var_id_last_message = 0;


	SELECT MAX(cm.id_menssage) INTO @var_id_last_message 
	FROM conversation_messages cm WHERE id_profile = in_id_profile AND id_profile2 = in_id_profile2 OR id_profile = in_id_profile2 AND id_profile2 = in_id_profile;
	
	SELECT pc.id AS id_conversation, dev.id AS id_developer, dev.`name`, dev.image_url, cm.content FROM profile_conversation pc 
	INNER JOIN developers dev ON (dev.id = in_id_profile2) 
	LEFT JOIN conversation_messages cm ON (cm.id_conversation = pc.id)
	WHERE cm.id_menssage = @var_id_last_message;
	
END//
DELIMITER ;

-- Copiando estrutura para tabela tindev.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `github_username` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `image_url` varchar(100) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `age` int(11) NOT NULL,
  `bio` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `github_username` (`github_username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `image_url` (`image_url`),
  KEY `password` (`password`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tindev.users: 5 rows
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `github_username`, `name`, `image_url`, `email`, `password`, `age`, `bio`) VALUES
	(1, 'Mostela', 'João Camargo', 'https://avatars2.githubusercontent.com/u/45977530?v=4', 'pedro@gmail.com', '123456aA', 19, 'Follow me:\r\nTwitter: @mostela_\r\nInstagram: @_mostela_'),
	(2, 'Accenture', 'Accenture', 'https://avatars1.githubusercontent.com/u/10454368?v=4', 'https://accenture.github.com', '123456aA', 18, 'Accenture Github site'),
	(3, 'CodingTrain', 'Coding Train', 'https://avatars0.githubusercontent.com/u/18553964?v=4', 'http://thecodingtrain.com', '123456aA', 19, 'Accompanying code and more for YouTube video tutorials'),
	(4, 'johnpapa', 'John Papa', 'https://avatars2.githubusercontent.com/u/1202528?v=4', 'http://johnpapa.net', '123456aA', 19, 'http://johnpapa.me/'),
	(5, 'zx20110729', 'Naruto', 'https://avatars2.githubusercontent.com/u/16410971?v=4', 'teste@teste.com', '123456aA', 19, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Copiando estrutura para tabela tindev.users_likes
CREATE TABLE IF NOT EXISTS `users_likes` (
  `id_user` int(11) NOT NULL,
  `id_user_liked` int(11) NOT NULL,
  `matched_at` datetime NOT NULL,
  PRIMARY KEY (`id_user`,`id_user_liked`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tindev.users_likes: 16 rows
/*!40000 ALTER TABLE `users_likes` DISABLE KEYS */;
INSERT INTO `users_likes` (`id_user`, `id_user_liked`, `matched_at`) VALUES
	(1, 3, '2019-12-03 00:28:14'),
	(2, 1, '2019-08-25 18:06:22'),
	(3, 1, '2019-08-25 18:06:30'),
	(1, 4, '2019-12-03 00:22:01'),
	(4, 1, '2019-10-24 09:35:42'),
	(1, 2, '2019-12-03 00:20:47'),
	(2, 4, '2019-11-30 23:43:14'),
	(4, 2, '2019-11-30 23:43:24'),
	(5, 1, '2019-12-04 00:52:54'),
	(3, 5, '2019-12-04 00:51:45'),
	(3, 4, '2019-12-04 00:51:44'),
	(3, 2, '2019-12-04 00:51:43'),
	(5, 3, '2019-12-04 00:53:07'),
	(5, 2, '2019-12-04 00:53:00'),
	(5, 4, '2019-12-04 00:54:32'),
	(1, 5, '2019-12-04 10:00:36');
/*!40000 ALTER TABLE `users_likes` ENABLE KEYS */;

-- Copiando estrutura para view tindev.developers
-- Removendo tabela temporária e criando a estrutura VIEW final
DROP TABLE IF EXISTS `developers`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `developers` AS select `u`.`id` AS `id`,`u`.`name` AS `name`,`u`.`image_url` AS `image_url`,`u`.`age` AS `age`,`u`.`bio` AS `bio` from `users` `u`;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
