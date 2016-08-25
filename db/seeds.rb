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

Step.create(description: "1. go to McDonald's", todo_id: 1)
Step.create(description: "2. go to Burger King", todo_id: 1)
Step.create(description: "3. eat McDonald's and Burger King", todo_id: 1)

Step.create(description: "1. open mouth", todo_id: 3)
Step.create(description: "2. lift bottle", todo_id: 3)
Step.create(description: "3. swallow water", todo_id: 3)

Step.create(description: "1. tire yourself out", todo_id: 5)
Step.create(description: "2. lie down", todo_id: 5)
Step.create(description: "3. see step two", todo_id: 5)
