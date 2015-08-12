

function generateData () {
	
	// data of all users
	var users = [],

		names = ['John Johnson', 'Peter Pan', 'Pablo Polo', 'Gabrielle Sodi', 
				'Fernando Scott', 'Ariel Azou', 'Lucia Delen', 'Sebastian Arton', 
				'Julian Sent', 'Lea Bills', 'Sonia Fabre', 'Richard Nix'],

		words = ['Hello', 'How are you', 'Is a great day', 'Give me five!', 
				'I\'m awesome', 'How is everyone?', 'I am at some awesome place', 
				'Go Giants!', 'Go Warriors!'],
				
		namesLen = names.length,
		wordsLen = words.length;


	// initialize all users

	for (var i = 0; i < namesLen; i++) {

		users[i] = {
			userId: 	i,
			name: 		names[i],
			friends: 	[],
			comments: 	[]
		}
	}

	// randomly assign friendships

	for (var i = 0; i < namesLen; i++) {

		var user = users[i];
		var friends = user.friends;
		var numFriends = getRandomInt(1, 7);

		for (var j = 0; j < numFriends; j++) {

			var friendIndex = getRandomInt(0, namesLen);
			var friend = users[friendIndex];

			// avoid being friend of self, or repeating friend
			if (friendIndex !== i && friends.indexOf(friendIndex) === -1) {
				friends.push(friendIndex);

				// also have to set user's friend to friend of user
				if (friend.friends.indexOf(i) === -1) {
					friend.friends.push(i);
				}
			}
		}
	}

	// create random comments for each user

	for (i = 0; i < namesLen; i++) {

		var user = users[i];
		var comments = [];

		var numComments = getRandomInt(1, 5);

		for (var j = 0; j < numComments; j++) {

			var comment = '',
				numRandomWords = getRandomInt(1,5),
				word, date;

			for (k = 0; k < numRandomWords; k++) {
				word = words[getRandomInt(0, wordsLen)];
				comment += word + ' ';
			}

			// generate dandom date in last 24 hours
			date = new Date();
			date.setHours(date.getHours() - Math.random()*24)

			user.comments.push({
				userId: i,
				name: names[i],
				time: date.getTime(),
				comment: comment
			});
		}
	}

	return users;
}


// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = generateData;