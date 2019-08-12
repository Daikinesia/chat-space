# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
## groups_users_table
|Column|Type|Options|
|------|----|-------|
|use_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## Association
belongs_to :group
belongs_to :user

## groups_table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|created_at|date|null: false|

## Association
has_many :messages
has_many :users, through: :groups_users

## users_table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|created_at|date|null: false|

## Association
has_many :groups, through: :groups_users
has_many :messages

## messages_table
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|text|text|null: false|
|image|text||
|created_at|date|null: false|

## Association
belongs_to :group
belongs_to :user


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
