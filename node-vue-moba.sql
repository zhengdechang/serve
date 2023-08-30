/*
 Navicat Premium Data Transfer

 Source Server         : music
 Source Server Type    : MongoDB
 Source Server Version : 50006
 Source Host           : localhost:27017
 Source Schema         : node-vue-moba

 Target Server Type    : MongoDB
 Target Server Version : 50006
 File Encoding         : 65001

 Date: 11/04/2022 12:57:41
*/


// ----------------------------
// Collection structure for adminusers
// ----------------------------
db.getCollection("adminusers").drop();
db.createCollection("adminusers");

// ----------------------------
// Documents of adminusers
// ----------------------------
db.getCollection("adminusers").insert([ {
    _id: ObjectId("6253b4c792011226bc408a0c"),
    username: "admin",
    password: "$2b$10$QpDYkZZIW8X2mx5/NKwXouDjcxRMy3TIp1BJ44LM.rDO5C5Vyoh6m",
    __v: NumberInt("0")
} ]);
