-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2015 at 05:33 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kkprojectanaconda`
--

-- --------------------------------------------------------

--
-- Table structure for table `scoretable`
--

CREATE TABLE IF NOT EXISTS `scoretable` (
`id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `score` int(11) NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scoretable`
--

INSERT INTO `scoretable` (`id`, `username`, `email`, `score`, `datetime`) VALUES
(5, 'f', 'fa@submit.com', 0, '2015-10-05 16:18:02'),
(6, 'asdfdf', 'dfadsf', 10, '2015-10-07 06:31:32'),
(7, 'asdfdf', 'faiz_newcastle@yahoo.co.id', 10, '2015-10-07 06:31:41'),
(8, 'kimi', 'raik@g.com', 70, '2015-10-07 07:41:15'),
(9, 'da', 'fa@submit.com', 20, '2015-10-07 07:48:41'),
(10, 'adfa', 'new@new.com', 0, '2015-10-07 07:49:23'),
(11, 'bill', 'gate@gate.com', 0, '2015-10-07 08:15:28'),
(12, 'data', 'data@data.com', 10, '2015-10-07 08:18:35'),
(13, 'data', 'data@data.com', 10, '2015-10-07 08:18:55'),
(14, 'test', 'data@data.com', 0, '2015-10-07 08:21:36'),
(15, 'da', 'aa@aa.com', 0, '2015-10-07 08:22:32'),
(16, 'a', 'aa@aa.com', 10, '2015-10-07 08:23:24'),
(17, 'adscfa', 'gate@gate.com', 10, '2015-10-07 08:25:23'),
(18, 'adfa', 'gate@gate.com', 10, '2015-10-07 08:27:24'),
(19, 'test', 'data@data.com', 0, '2015-10-07 08:43:33'),
(21, 'giant', 'gate@gate.com', 0, '2015-10-07 16:29:21'),
(22, 'greas', 'faiz_newcastle@yahoo.co.id', 10, '2015-10-07 16:57:19'),
(23, 'adf', 'raik@g.com', 10, '2015-10-07 17:01:55'),
(24, 'df', 'aa@aa.com', 10, '2015-10-07 17:31:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `scoretable`
--
ALTER TABLE `scoretable`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `scoretable`
--
ALTER TABLE `scoretable`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
