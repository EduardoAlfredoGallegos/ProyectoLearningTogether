CREATE DATABASE  IF NOT EXISTS `ltdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ltdb`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: ltdb
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `ejercicios`
--

DROP TABLE IF EXISTS `ejercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejercicios` (
  `idejercicios` int NOT NULL AUTO_INCREMENT,
  `dificultad` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `pregunta` varchar(250) NOT NULL,
  `respuesta` varchar(150) NOT NULL,
  `link_audio` varchar(250) NOT NULL,
  `idtopic` int NOT NULL,
  PRIMARY KEY (`idejercicios`),
  KEY `idto_idx` (`idtopic`),
  CONSTRAINT `idto` FOREIGN KEY (`idtopic`) REFERENCES `topics` (`idtopics`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicios`
--

LOCK TABLES `ejercicios` WRITE;
/*!40000 ALTER TABLE `ejercicios` DISABLE KEYS */;
INSERT INTO `ejercicios` VALUES (3,'1','seleccion','33e','e33w','ddd',1),(4,'1','escrita','r34','3rwer','rw3r',2),(5,'2','audio','efw4','qdw','qd',2),(6,'1','audio','dweer','rewer','sefe',1),(7,'1','seleccion','fw34fer','gfdtg4','dfw4',1),(8,'1','audio','e3sad','123d','2e2q',2),(9,'1','seleccion','sdaw','12es','2e2s',2),(10,'1','escrita','d23','231','dawe2',1);
/*!40000 ALTER TABLE `ejercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pregunta_audio`
--

DROP TABLE IF EXISTS `pregunta_audio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pregunta_audio` (
  `idpregunta_audio` int NOT NULL AUTO_INCREMENT,
  `respuesta_1` varchar(250) DEFAULT NULL,
  `respuesta_2` varchar(250) DEFAULT NULL,
  `respuesta_3` varchar(250) DEFAULT NULL,
  `respuesta_4` varchar(250) DEFAULT NULL,
  `idejer` int NOT NULL,
  PRIMARY KEY (`idpregunta_audio`),
  KEY `idejercicio_idx` (`idejer`),
  CONSTRAINT `idejerci` FOREIGN KEY (`idejer`) REFERENCES `ejercicios` (`idejercicios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pregunta_audio`
--

LOCK TABLES `pregunta_audio` WRITE;
/*!40000 ALTER TABLE `pregunta_audio` DISABLE KEYS */;
/*!40000 ALTER TABLE `pregunta_audio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pregunta_escrita`
--

DROP TABLE IF EXISTS `pregunta_escrita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pregunta_escrita` (
  `idejercicio_escrito` int NOT NULL AUTO_INCREMENT,
  `respuesta` varchar(250) NOT NULL,
  `idejer` int NOT NULL,
  PRIMARY KEY (`idejercicio_escrito`),
  KEY `idejercicio_idx` (`idejer`),
  CONSTRAINT `idejercicio` FOREIGN KEY (`idejer`) REFERENCES `ejercicios` (`idejercicios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pregunta_escrita`
--

LOCK TABLES `pregunta_escrita` WRITE;
/*!40000 ALTER TABLE `pregunta_escrita` DISABLE KEYS */;
/*!40000 ALTER TABLE `pregunta_escrita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pregunta_seleccion`
--

DROP TABLE IF EXISTS `pregunta_seleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pregunta_seleccion` (
  `idpregunta_seleccion` int NOT NULL AUTO_INCREMENT,
  `respuesta_1` varchar(250) DEFAULT NULL,
  `respuesta_2` varchar(250) DEFAULT NULL,
  `respuesta_3` varchar(250) DEFAULT NULL,
  `respuesta_4` varchar(250) DEFAULT NULL,
  `idejer` int NOT NULL,
  PRIMARY KEY (`idpregunta_seleccion`),
  KEY `idejercicio_idx` (`idejer`),
  CONSTRAINT `idejerciciosele` FOREIGN KEY (`idejer`) REFERENCES `ejercicios` (`idejercicios`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pregunta_seleccion`
--

LOCK TABLES `pregunta_seleccion` WRITE;
/*!40000 ALTER TABLE `pregunta_seleccion` DISABLE KEYS */;
INSERT INTO `pregunta_seleccion` VALUES (1,'1234','123','12','1',3);
/*!40000 ALTER TABLE `pregunta_seleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topics` (
  `idtopics` int NOT NULL AUTO_INCREMENT,
  `nombre_topic` varchar(45) NOT NULL,
  PRIMARY KEY (`idtopics`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topics`
--

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` VALUES (1,'qwer'),(2,'qwe'),(3,'qw'),(4,'q');
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `puntaje` int NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (7,'Katsu Gallegos2','katsu.gallegos@fartvlo.mx','$2a$10$MgqBf1fqkNQRVUx4jdQGw.UI3v3yjf7pdWOwek.gNDUGvIzyln36a',0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-09 17:55:43
