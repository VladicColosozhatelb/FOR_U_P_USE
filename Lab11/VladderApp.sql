-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: u_pe
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `POST_ID` int NOT NULL,
  `DESCRIPTION` varchar(201) DEFAULT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `PHOTO_LINK` varchar(200) DEFAULT NULL,
  `LIKES` varchar(200) DEFAULT NULL,
  `TAGS` varchar(200) DEFAULT NULL,
  `ava` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`POST_ID`),
  CONSTRAINT `USER_ID` FOREIGN KEY (`POST_ID`) REFERENCES `user` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Vlad is trying JS','2020-05-10 15:10:10','https://www.zastavki.com/pictures/originals/2014/World___Canada_Lake_in_Banff_National_Park__Alberta__Canada_065436_.jpg','David\\nVlad Shihutin\\n','#games\\n#politics','https://www.zastavki.com/pictures/originals/2014/World___Canada_Lake_in_Banff_National_Park__Alberta__Canada_065436_.jpg'),(2,'Vlad is not JS','2020-05-10 15:10:10','https://www.pressball.by/images/stories/2020/03/20200310231542.jpg','David\\nVlad Shihutin\\n','\\n#politics','https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'),(3,'Da tut bil leV, hotya mozhet i ne bil','2020-05-10 15:10:10','https://i.pinimg.com/originals/8e/db/28/8edb283323c6c876da5d90934ca27bce.jpg','David\\nVlad Shihutin\\n','\\n#politics','https://i.pinimg.com/originals/8e/db/28/8edb283323c6c876da5d90934ca27bce.jpg'),(4,'Kitty kat bruh','2020-05-10 15:10:10','https://www.htxt.co.za/wp-content/uploads/2014/08/5856937373_d244f28c07_o.jpg','David\\nVlad Shihutin\\n','\\n#politics','https://www.htxt.co.za/wp-content/uploads/2014/08/5856937373_d244f28c07_o.jpg'),(5,'We always try do anything, thats all gib','2020-05-10 15:10:10','https://i.ytimg.com/vi/u0KmGxY4ev0/maxresdefault.jpg','David\\nVlad Shihutin\\n','\\n#politics','https://i.ytimg.com/vi/u0KmGxY4ev0/maxresdefault.jpg'),(6,'As 24-year-old American girls with backpacks, Sally and I rarely had to wait long for a ride.','2020-05-10 15:10:10','https://www.pressball.by/images/stories/2020/03/20200310231542.jpg','David\\nVlad Shihutin\\n','\\n#politics','https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'),(7,'s of her old walking boots, looked up and nodded slowly. “I think so.” They walked along a lane out of the village until they re','2020-05-10 15:10:10','https://maxcdn.icons8.com/Share/icon/p1em/Logos/twitter1600.png','David\\nVlad Shihutin\\n','\\n#politics','https://maxcdn.icons8.com/Share/icon/p1em/Logos/twitter1600.png'),(8,'Prepared by experienced English teachers, the texts, articles and conversations are brief','2020-05-10 15:10:10','https://maxcdn.icons8.com/Share/icon/p1em/Logos/twitter1600.png','David\\nVlad Shihutin\\n','\\n#politics','https://maxcdn.icons8.com/Share/icon/p1em/Logos/twitter1600.png'),(9,'nglish texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written','2020-05-10 15:10:10','https://maxcdn.icons8.com/Share/icon/p1em/Logos/twitter1600.png','David\\nVlad Shihutin\\n','\\n#politics','https://maxcdn.icons8.com/Share/icon/p1em/Logos/twitter1600.png'),(10,'Donald J. Trump, New York, NY. 27,346,416 likes · 4,229,766 talking about this. This is the official Facebook page for Donald J. Trump...','2020-05-10 15:10:10','https://www.zastavki.com/pictures/originals/2014/World___Canada_Lake_in_Banff_National_Park__Alberta__Canada_065436_.jpg','David\\nVlad Shihutin\\n','\\n#politics','https://www.zastavki.com/pictures/originals/2014/World___Canada_Lake_in_Banff_National_Park__Alberta__Canada_065436_.jpg');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `#politic` varchar(40) NOT NULL,
  `#games` varchar(45) NOT NULL,
  `#sad` varchar(45) NOT NULL,
  `#hapieness` varchar(45) NOT NULL,
  `#alchogol` varchar(45) NOT NULL,
  `#party` varchar(45) NOT NULL,
  `#sitHome` varchar(45) NOT NULL,
  PRIMARY KEY (`#politic`,`#games`,`#sad`,`#hapieness`,`#alchogol`,`#party`,`#sitHome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USER_ID` int NOT NULL,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY (`USER_ID`,`NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'David'),(2,'Vlad Shihutin'),(3,'Leha'),(4,'Lev Levskoy'),(5,'Putin'),(6,'Tramp'),(7,'Ivanov Ivashka'),(8,'Maria'),(9,'Lucy'),(10,'Anna Karenina');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-10 15:45:09
