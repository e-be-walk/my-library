# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.create([{title: 'War and Peace', authors: 'Leo Tolstoy', description: 'An incredibly long, incredibly descriptive novel about freezing during a war in Russia', link: 'https://books.google.com/books?id=SEkEAAAAYAAJ', user_id: '1'}, {title: 'War and Peace', authors: 'Leo Tolstoy', description: 'An incredibly long, incredibly descriptive novel about freezing during a war in Russia', link: 'https://books.google.com/books?id=SEkEAAAAYAAJ', user_id: '2'}, {title: 'Catcher in the Rye', authors: 'JD Salinger', description: 'A strange tale of a boarding school kid left to his own devices', link: 'https://books.google.com/books?id=Pv5zZ9R4DskC', user_id: '2'} ])

User.create([{email: 'cat@cat.com', password: 'cat'}, {email: 'george@george.com', password: 'george'}, {email: 'erin@erin.com', password: 'erin'}])
