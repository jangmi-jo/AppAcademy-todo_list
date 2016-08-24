# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Todo.create(title: 'eat', body: 'food', done: false)
Todo.create(title: 'sleep', body: 'more', done: false)
Todo.create(title: 'drink', body: 'water', done: true)
Todo.create(title: 'go', body: 'home', done: true)
Todo.create(title: 'rest', body: 'well', done: false)
