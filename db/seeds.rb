# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Movie.destroy_all
MovieGenre.destroy_all
Watchlist.destroy_all 
User.destroy_all
# Genre.destroy_all

# ------------------------------------------------------------------------------------

User.create(email: 'demo@gmail.com', password:'123456')

#-------------------------------------------------------------------------------------

# action = Genre.create(name: 'Action')
# comedy = Genre.create(name: 'Comedy')
# documentary = Genre.create(name: 'Documentary')
# drama = Genre.create(name: 'Drama')
# horror = Genre.create(name: 'Horror')
# sports = Genre.create(name: 'Sports')
# thrillers = Genre.create(name: 'Thrillers')
# sci_fi = Genre.create(name: 'Sci-Fi')





# ------------------------------------------------------------------------------------

spacejam = Movie.create(title: 'Space Jam', 
rating: 5, 
year: 1996, 
description: 'Swackhammer (Danny DeVito), 
an evil alien theme park owner, needs a new 
attraction at Moron Mountain. When his gang, 
the Nerdlucks, heads to Earth to kidnap Bugs 
Bunny (Billy West) and the Looney Tunes, Bugs 
challenges them to a basketball game to 
determine their fate. The aliens agree, but 
they steal the powers of NBA basketball 
players, including Larry Bird (Larry Bird) 
and Charles Barkley (Charles Barkley) -- s
o Bugs gets some help from superstar 
Michael Jordan (Michael Jordan).')

# MovieGenre.create(movie_id: spacejam.id, genre_id: sports.id)
# MovieGenre.create(movie_id: spacejam.id, genre_id: sci_fi.id)

MovieGenre.create(movie_id: spacejam.id, genre_id: 6)
MovieGenre.create(movie_id: spacejam.id, genre_id: 8)

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/spacejam.jpg')
spacejam.image.attach(io: file, filename: 'spacejam.jpg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/spacejam.mp4')
spacejam.video.attach(io: file, filename: 'spacejam.mp4')

# --------------------------------------------------------------------------------------

stepbros = Movie.create(title: 'Step Brothers',
rating: 4.4,
year: 2008, 
description: 'Brennan Huff (Will Ferrell) and 
Dale Doback (John C. Reilly) have one thing 
in common: they are both lazy, unemployed 
leeches who still live with their parents. 
When \"Brennan\"s mother and \"Dale\"s father 
marry and move in together, it turns the overgrown 
\"boys\" world upside down. Their insane rivalry 
and narcissism pull the new family apart, forcing 
them to work together to reunite their parents.')

# MovieGenre.create(movie_id: stepbros.id, genre_id: comedy.id)
MovieGenre.create(movie_id: stepbros.id, genre_id: 2)


file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/stepbrothers.jpeg')
stepbros.image.attach(io: file, filename: 'stepbrothers.jpeg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/stepbrothers.mp4')
stepbros.video.attach(io: file, filename: 'stepbros.mp4')

# --------------------------------------------------------------------------------------

sinister = Movie.create(title: 'Sinister',
rating: 4,
year: 2012, 
description: 'True-crime writer Ellison Oswald 
(Ethan Hawke) is in a slump; he has not had a best 
seller in more than 10 years and is becoming 
increasingly desperate for a hit. So, when he discovers 
the existence of a snuff film showing the deaths of a 
family, he vows to solve the mystery. He moves his own 
family into the /"victims/" home and gets to work. 
However, when old film footage and other clues hint at 
the presence of a supernatural force, Ellison learns 
that living in the house may be fatal.')

# MovieGenre.create(movie_id: sinister.id, genre_id: horror.id)
MovieGenre.create(movie_id: sinister.id, genre_id: 5)



file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/sinister.jpeg')
sinister.image.attach(io: file, filename: 'sinister.jpeg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/sinister.mp4')
sinister.video.attach(io: file, filename: 'sinister.mp4')

#--------------------------------------------------------------------------------------

joker = Movie.create(title: 'Joker',
rating: 4.4,
year: 2019, 
description: 'Forever alone in a crowd, failed comedian 
Arthur Fleck seeks connection as he walks the streets 
of Gotham City. Arthur wears two masks -- the one he 
paints for his day job as a clown, and the guise he 
projects in a futile attempt to feel like /"he/"s part 
of the world around him. Isolated, bullied and disregarded 
by society, Fleck begins a slow descent into madness as he 
transforms into the criminal mastermind known as the Joker.')

# MovieGenre.create(movie_id: joker.id, genre_id: drama.id)
# MovieGenre.create(movie_id: joker.id, genre_id: thrillers.id)
MovieGenre.create(movie_id: joker.id, genre_id: 4)
MovieGenre.create(movie_id: joker.id, genre_id: 7)


file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/joker.jpg')
joker.image.attach(io: file, filename: 'joker.jpg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/joker.mp4')
joker.video.attach(io: file, filename: 'joker.mp4')

#------------------------------------------------------------------------------------

rush = Movie.create(title: 'Rush Hour',
rating: 5,
year: 1998, 
description: 'When a Chinese /"diploma/"s daughter is kidnapped 
in Los Angeles, he calls in Hong Kong Detective Inspector Lee 
(Jackie Chan) to assist the FBI with the case. But the FBI 
/"doesn/"t want anything to do with Lee, and they dump him 
off on the LAPD, who assign wisecracking Detective James Carter 
(Chris Tucker) to watch over him. Although Lee and Carter 
cannot stand each other, they choose to work together to solve 
the case on their own when they figure out they have been ditched 
by both the FBI and police.')

# MovieGenre.create(movie_id: rush.id, genre_id: action.id)
# MovieGenre.create(movie_id: rush.id, genre_id: comedy.id)

MovieGenre.create(movie_id: rush.id, genre_id: 1)
MovieGenre.create(movie_id: rush.id, genre_id: 2)



file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/rushhour.jpg')
rush.image.attach(io: file, filename: 'rushhour.jpg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/rushhour.mp4')
rush.video.attach(io: file, filename: 'rushhour.mp4')

# # ------------------------------------------------------------------------------------

interstellar = Movie.create(title: 'Interstellar',
rating: 4.4,
year: 2014, 
description: 'In /"Earth/"s future, a global crop 
blight and second Dust Bowl are slowly rendering the planet 
uninhabitable. Professor Brand (Michael Caine), a brilliant 
NASA physicist, is working on plans to save mankind by 
transporting /"Earth/"s population to a new home via a wormhole. 
But first, Brand must send former NASA pilot Cooper 
(Matthew McConaughey) and a team of researchers through the 
wormhole and across the galaxy to find out which of three 
planets could be /"mankind/"s new home.')

# MovieGenre.create(movie_id: interstellar.id, genre_id: drama.id)
# MovieGenre.create(movie_id: interstellar.id, genre_id: sci_fi.id)

MovieGenre.create(movie_id: interstellar.id, genre_id: 4)
MovieGenre.create(movie_id: interstellar.id, genre_id: 8)



file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/interstellar.jpeg')
interstellar.image.attach(io: file, filename: 'interstellar.jpeg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/interstellar.mp4')
interstellar.video.attach(io: file, filename: 'interstellar.mp4')

# ----------------------------------------------------------------------------------

coach_carter = Movie.create(title: 'Coach Carter',
rating: 4.6,
year: 2005, 
description: 'In 1999, Ken Carter (Samuel L. Jackson) returns 
to his old high school in Richmond, California, to get the basketball 
team into shape. With tough rules and academic discipline, he succeeds 
in setting the players on a winning streak. But when their grades 
start to suffer, Carter locks them out of the gym and shuts down their 
championship season. When he is criticized by the players and their 
parents, he sticks to his guns, determined that they excel in class as 
well as on the court.')

# MovieGenre.create(movie_id: coach_carter.id, genre_id: drama.id)
# MovieGenre.create(movie_id: coach_carter.id, genre_id: sports.id)

MovieGenre.create(movie_id: coach_carter.id, genre_id: 4)
MovieGenre.create(movie_id: coach_carter.id, genre_id: 6)



file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/coachcarter.jpg')
coach_carter.image.attach(io: file, filename: 'coachcarter.jpeg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/coachcarter.mp4')
coach_carter.video.attach(io: file, filename: 'coachcarter.mp4')

# # ----------------------------------------------------------------------------------

shining = Movie.create(title: 'The Shining',
rating: 5,
year: 1980, 
description: 'Jack Torrance (Jack Nicholson) becomes winter caretaker at 
the isolated Overlook Hotel in Colorado, hoping to cure his /"writer/"s block. 
He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny 
(Danny Lloyd), who is plagued by psychic premonitions. As /"Jack/"s writing 
goes nowhere and /"Danny/"s visions become more disturbing, Jack discovers 
the /"hotel/"s dark secrets and begins to unravel into a homicidal maniac 
hell-bent on terrorizing his family.')

# MovieGenre.create(movie_id: shining.id, genre_id: horror.id)
# MovieGenre.create(movie_id: shining.id, genre_id: thrillers.id)

MovieGenre.create(movie_id: shining.id, genre_id: 5)
MovieGenre.create(movie_id: shining.id, genre_id: 7)



file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/shining.jpg')
shining.image.attach(io: file, filename: 'shining.jpg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/shining.mp4')
shining.video.attach(io: file, filename: 'shining.mp4')

# ------------------------------------------------------------------------------------

juice = Movie.create(title: 'Juice',
rating: 4.6,
year: 1992, 
description: 'Four Harlem friends -- Bishop (Tupac Shakur), Q (Omar Epps), Steel 
(Jermaine Hopkins) and Raheem (Khalil Kain) -- dabble in petty crime, but they 
decide to go big by knocking off a convenience store. Bishop, the magnetic leader 
of the group, has the gun. But Q has different aspirations. He wants to be a DJ 
and happens to have a gig the night of the robbery. Unfortunately for him, Bishop 
is not willing to take no for answer in a game where everything is for keeps.')

# MovieGenre.create(movie_id: juice.id, genre_id: drama.id)

MovieGenre.create(movie_id: juice.id, genre_id: 4)



file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/juice.jpg')
juice.image.attach(io: file, filename: 'juice.jpg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/juice.mp4')
juice.video.attach(io: file, filename: 'juice.mp4')

#---------------------------------------------------------------------------------------

spirit = Movie.create(title: 'DMT: The Spirit Molecule',
rating: 4.8,
year: 2010, 
description: 'Dr. Rick Strassman conducts groundbreaking research on the hallucinogen DMT.')

# MovieGenre.create(movie_id: spirit.id, genre_id: documentary.id)

MovieGenre.create(movie_id: spirit.id, genre_id: 3)



file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/spiritmolecule.jpg')
spirit.image.attach(io: file, filename: 'spirit.jpg')

file = open('https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/spiritmolecule.mp4')
spirit.video.attach(io: file, filename: 'juice.mp4')