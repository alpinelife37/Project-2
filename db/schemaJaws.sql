CREATE DATABASE  IF NOT EXISTS `stargazer_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `stargazer_db`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: stargazer_db
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `constellations`
--

DROP TABLE IF EXISTS `constellations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `constellations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `abbr` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `genitive` varchar(255) DEFAULT NULL,
  `en` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `constellations`
--

LOCK TABLES `constellations` WRITE;
/*!40000 ALTER TABLE `constellations` DISABLE KEYS */;
INSERT INTO `constellations` VALUES (1,'And','Andromeda','Andromedae','Andromeda (mythological character)',NULL,NULL),(2,'Ant','Antlia','Antliae','air pump',NULL,NULL),(3,'Aps','Apus','Apodis','Bird-of-paradise',NULL,NULL),(4,'Aqr','Aquarius','Aquarii','water-bearer',NULL,NULL),(5,'Aql','Aquila','Aquilae','eagle',NULL,NULL),(6,'Ara','Ara','Arae','altar',NULL,NULL),(7,'Ari','Aries','Arietis','ram',NULL,NULL),(8,'Aur','Auriga','Aurigae','charioteer',NULL,NULL),(9,'Boo','Boötes','Boötis','herdsman',NULL,NULL),(10,'Cae','Caelum','Caeli','chisel or graving tool',NULL,NULL),(11,'Cam','Camelopardalis','Camelopardalis','giraffe',NULL,NULL),(12,'Cnc','Cancer','Cancri','crab',NULL,NULL),(13,'CVn','Canes Venatici','Canum Venaticorum','hunting dogs',NULL,NULL),(14,'CMa','Canis Major','Canis Majoris','greater dog',NULL,NULL),(15,'CMi','Canis Minor','Canis Minoris','lesser dog',NULL,NULL),(16,'Cap','Capricornus','Capricorni','sea goat',NULL,NULL),(17,'Car','Carina','Carinae','keel',NULL,NULL),(18,'Cas','Cassiopeia','Cassiopeiae','Cassiopeia (mythological character)',NULL,NULL),(19,'Cen','Centaurus','Centauri','centaur',NULL,NULL),(20,'Cep','Cepheus','Cephei','Cepheus (mythological character)',NULL,NULL),(21,'Cet','Cetus','Ceti','sea monster (whale)',NULL,NULL),(22,'Cha','Chamaeleon','Chamaeleontis','chameleon',NULL,NULL),(23,'Cir','Circinus','Circini','compasses',NULL,NULL),(24,'Col','Columba','Columbae','dove',NULL,NULL),(25,'Com','Coma Berenices','Comae Berenices','Berenice\'s hair',NULL,NULL),(26,'CrA','Corona Australis','Coronae Australis','southern crown',NULL,NULL),(27,'CrB','Corona Borealis','Coronae Borealis','northern crown',NULL,NULL),(28,'Crv','Corvus','Corvi','crow',NULL,NULL),(29,'Crt','Crater','Crateris','cup',NULL,NULL),(30,'Cru','Crux','Crucis','southern cross',NULL,NULL),(31,'Cyg','Cygnus','Cygni','swan or Northern Cross',NULL,NULL),(32,'Del','Delphinus','Delphini','dolphin',NULL,NULL),(33,'Dor','Dorado','Doradus','dolphinfish',NULL,NULL),(34,'Dra','Draco','Draconis','dragon',NULL,NULL),(35,'Equ','Equuleus','Equulei','pony',NULL,NULL),(36,'Eri','Eridanus','Eridani','river Eridanus (mythology)',NULL,NULL),(37,'For','Fornax','Fornacis','chemical furnace',NULL,NULL),(38,'Gem','Gemini','Geminorum','twins',NULL,NULL),(39,'Gru','Grus','Gruis','Crane',NULL,NULL),(40,'Her','Hercules','Herculis','Hercules (mythological character)',NULL,NULL),(41,'Hor','Horologium','Horologii','pendulum clock',NULL,NULL),(42,'Hya','Hydra','Hydrae','Hydra (mythological creature)',NULL,NULL),(43,'Hyi','Hydrus','Hydri','lesser water snake',NULL,NULL),(44,'Ind','Indus','Indi','Indian',NULL,NULL),(45,'Lac','Lacerta','Lacertae','lizard',NULL,NULL),(46,'Leo','Leo','Leonis','lion',NULL,NULL),(47,'LMi','Leo Minor','Leonis Minoris','lesser lion',NULL,NULL),(48,'Lep','Lepus','Leporis','hare',NULL,NULL),(49,'Lib','Libra','Librae','balance',NULL,NULL),(50,'Lup','Lupus','Lupi','wolf',NULL,NULL),(51,'Lyn','Lynx','Lyncis','lynx',NULL,NULL),(52,'Lyr','Lyra','Lyrae','lyre / harp',NULL,NULL),(53,'Men','Mensa','Mensae','Table Mountain (South Africa)',NULL,NULL),(54,'Mic','Microscopium','Microscopii','microscope',NULL,NULL),(55,'Mon','Monoceros','Monocerotis','unicorn',NULL,NULL),(56,'Mus','Musca','Muscae','fly',NULL,NULL),(57,'Nor','Norma','Normae','carpenter\'s level',NULL,NULL),(58,'Oct','Octans','Octantis','octant (instrument)',NULL,NULL),(59,'Oph','Ophiuchus','Ophiuchi','serpent-bearer',NULL,NULL),(60,'Ori','Orion','Orionis','Orion (mythological character)',NULL,NULL),(61,'Pav','Pavo','Pavonis','peacock',NULL,NULL),(62,'Peg','Pegasus','Pegasi','Pegasus (mythological creature)',NULL,NULL),(63,'Per','Perseus','Persei','Perseus (mythological character)',NULL,NULL),(64,'Phe','Phoenix','Phoenicis','phoenix',NULL,NULL),(65,'Pic','Pictor','Pictoris','easel',NULL,NULL),(66,'Psc','Pisces','Piscium','fishes',NULL,NULL),(67,'PsA','Piscis Austrinus','Piscis Austrini','southern fish',NULL,NULL),(68,'Pup','Puppis','Puppis','poop deck',NULL,NULL),(69,'Pyx','Pyxis','Pyxidis','mariner\'s compass',NULL,NULL),(70,'Ret','Reticulum','Reticuli','eyepiece graticule',NULL,NULL),(71,'Sge','Sagitta','Sagittae','arrow',NULL,NULL),(72,'Sgr','Sagittarius','Sagittarii','archer',NULL,NULL),(73,'Sco','Scorpius','Scorpii','scorpion',NULL,NULL),(74,'Scl','Sculptor','Sculptoris','sculptor',NULL,NULL),(75,'Sct','Scutum','Scuti','shield (of Sobieski)',NULL,NULL),(76,'Ser','Serpens','Serpentis','snake',NULL,NULL),(77,'Sex','Sextans','Sextantis','sextant',NULL,NULL),(78,'Tau','Taurus','Tauri','bull',NULL,NULL),(79,'Tel','Telescopium','Telescopii','telescope',NULL,NULL),(80,'Tri','Triangulum','Trianguli','triangle',NULL,NULL),(81,'TrA','Triangulum Australe','Trianguli Australis','southern triangle',NULL,NULL),(82,'Tuc','Tucana','Tucanae','toucan',NULL,NULL),(83,'UMa','Ursa Major','Ursae Majoris','great bear',NULL,NULL),(84,'UMi','Ursa Minor','Ursae Minoris','lesser bear',NULL,NULL),(85,'Vel','Vela','Velorum','sails',NULL,NULL),(86,'Vir','Virgo','Virginis','virgin or maiden',NULL,NULL),(87,'Vol','Volans','Volantis','flying fish',NULL,NULL),(88,'Vul','Vulpecula','Vulpeculae','fox',NULL,NULL);
/*!40000 ALTER TABLE `constellations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20200212050300-create-constellation.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-13 19:24:16
