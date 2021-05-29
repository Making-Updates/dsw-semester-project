-- Create Database --
CREATE DATABASE dsw_semester_project;

-- Use Database --
USE dsw_semester_project;

-- Create Admin Login Table --
CREATE TABLE `admin_login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
);

-- Create User Login Table --
CREATE TABLE `user_login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirm_password` varchar(255) NOT NULL
);

-- Add Primary Key To Admin Login Table --
ALTER TABLE
  `admin_login`
ADD
  PRIMARY KEY (`id`);

-- Add Auto Increment To Admin Table --
ALTER TABLE
  `admin_login`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT;

-- Add Primary Key To User Login Table --
ALTER TABLE
  `user_login`
ADD
  PRIMARY KEY (`id`);

-- Add Auto Increment To User Login Table --
ALTER TABLE
  `user_login`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT;

-- Create Homeless People Table --
CREATE TABLE `homeless_people` (
  `id` int(11) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `count` int(100) NOT NULL
);

-- Create Homeless Shelter Table --
CREATE TABLE `homeless_shelter` (
  `id` int(11) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `name` int(100) NOT NULL
);

-- Add Primary Key To Homeless People Table --
ALTER TABLE
  `homeless_people`
ADD
  PRIMARY KEY (`id`);

-- Add Auto Increment To Homeless People Table --
ALTER TABLE
  `homeless_people`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT;

-- Add Primary Key To Homeless Shelter Table --
ALTER TABLE
  `homeless_shelter`
ADD
  PRIMARY KEY (`id`);

-- Add Auto Increment To Homeless Shelter Table --
ALTER TABLE
  `homeless_shelter`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT;