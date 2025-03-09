-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 09, 2025 at 08:09 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetings`
--
CREATE DATABASE IF NOT EXISTS `meetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `meetings`;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `created_at`, `updated_at`) VALUES
('253d2bf5-fcbb-11ef-90ca-0242ac110002', 'React Team', '2025-03-09 07:49:46', '2025-03-09 07:49:46'),
('253d359f-fcbb-11ef-90ca-0242ac110002', 'Express Team', '2025-03-09 07:49:46', '2025-03-09 07:49:46'),
('253d3ebc-fcbb-11ef-90ca-0242ac110002', 'UI Team', '2025-03-09 07:49:46', '2025-03-09 07:49:46'),
('253d47df-fcbb-11ef-90ca-0242ac110002', 'Mobile Team', '2025-03-09 07:49:46', '2025-03-09 07:49:46');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `group_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `meeting_start` datetime NOT NULL,
  `meeting_end` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `room_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `group_id`, `meeting_start`, `meeting_end`, `description`, `room_name`, `created_at`, `updated_at`) VALUES
('a692166b-fcbb-11ef-90ca-0242ac110002', '253d3ebc-fcbb-11ef-90ca-0242ac110002', '2025-03-09 07:50:22', '2025-03-09 07:50:22', 'deciding on designs', 'new york room', '2025-03-09 10:50:23', '2025-03-09 11:50:23'),
('a6922353-fcbb-11ef-90ca-0242ac110002', '253d359f-fcbb-11ef-90ca-0242ac110002', '2025-03-09 07:50:22', '2025-03-09 07:50:22', 'testing endpoints', 'blue room', '2025-03-09 07:50:22', '2025-03-09 10:50:23'),
('a6922dc5-fcbb-11ef-90ca-0242ac110002', '253d2bf5-fcbb-11ef-90ca-0242ac110002', '2025-03-09 07:50:22', '2025-03-09 07:50:22', 'deciding structure', 'new york room', '2025-03-09 07:50:22', '2025-03-09 07:50:22'),
('a6923787-fcbb-11ef-90ca-0242ac110002', '253d47df-fcbb-11ef-90ca-0242ac110002', '2025-03-09 07:50:22', '2025-03-09 07:50:22', 'integrating changes', 'large board room', '2025-03-09 07:50:22', '2025-03-09 07:50:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
