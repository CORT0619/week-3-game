var executed = false;
var timesInputCaptured = 0;

var hangman = {
		wins: 0,
		losses: 0,
		guessesLeft: 10,
		lettersGuessed: [],
		alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		movies: ["spiderman", "forrest gump", "finding nemo", "heaven is for real"],
		indivMovie: [],

		checkAlphabet: function(event){

			if(this.guessesLeft <= 0){

				alert("You lost! Game over.");

			} else {

				var isAlpha = this.alphabet.indexOf(event);

				if(isAlpha < 0){

					alert("Invalid input. Please only use characters.");	// if not a letter		

				} else {

					this.changeToLetter(event);
				}

			}


		},

		/*updateWins: function(){

			this.wins

		},*/

		drawDashes: function(movie){

			var len = movie.length;
			
			for(x = 0; x < len; x++){

				if(movie.charAt(x) == 'a' || movie.charAt(x) == 'b'|| movie.charAt(x) == 'c'|| movie.charAt(x) == 'd'|| movie.charAt(x) == 'e'|| movie.charAt(x) == 'f'|| movie.charAt(x) == 'g'|| movie.charAt(x) == 'h'|| movie.charAt(x) == 'i'|| movie.charAt(x) == 'j'|| movie.charAt(x) == 'k'|| movie.charAt(x) == 'l'|| movie.charAt(x) == 'm'|| movie.charAt(x) == 'n'|| movie.charAt(x) == 'o'|| movie.charAt(x) == 'p'|| movie.charAt(x) == 'q'|| movie.charAt(x) == 'r'|| movie.charAt(x) == 's'|| movie.charAt(x) == 't'|| movie.charAt(x) == 'u'|| movie.charAt(x) == 'v'|| movie.charAt(x) == 'w'|| movie.charAt(x) == 'x'|| movie.charAt(x) == 'y'|| movie.charAt(x) == 'z'){	

					document.getElementById("dashesHere").innerHTML += "<img src=\"assets/images/dash2.png\" class=\""+ movie.charAt(x)+ "\">";

					document.getElementById("dashesHere").innerHTML += "<span class=\"hideMe let" + movie.charAt(x) + "\">" + movie.charAt(x) + "</span>";

					document.getElementById("dashesHere").innerHTML += " ";

				} else if(movie.charAt(x) == " "){

					document.getElementsByClassName(movie.charAt(x)).innerHTML += "&nbsp;&nbsp;&nbsp;";

				}
			}
		},

		wordToArray: function(movie){

			var len = movie.length;  

			for(i = 0; i < len; i++){

				this.indivMovie.push(movie.charAt(i));

			}
			console.log("new array: " + this.indivMovie);
		},

		changeToLetter: function(event){

			var len = this.indivMovie.length;   
			var guessPushed = false;
			var positionFound;
			var pics;
			var letters;

			

				for(x = 0; x < len; x++){

					console.log("event: " + event);
					console.log("element: " + this.indivMovie[x]);

					if(this.indivMovie.indexOf(event) > -1){

						positionFound = this.indivMovie.indexOf(event);	
						pics = document.getElementsByClassName(event);
						letters = document.getElementsByClassName("let" + event);

						for(var x =0; x < pics.length; x++){

							pics[x].setAttribute("class", "hideMe");
							letters[x].setAttribute("class", "");
					}

						
						this.indivMovie.splice(positionFound, 1);
						console.log(this.indivMovie);
						if(this.indivMovie.length == 0) {

							this.wins++;
							document.getElementById("wins").innerHTML = this.wins;
							alert("You win!");
							console.log("wins: " + this.wins);
						}	

						break;

					} else {

						if(this.lettersGuessed.length >= 1) {

							if(guessPushed == false){

								this.guessesLeft--;
								this.lettersGuessed.push(event);
								document.getElementById("guess").innerHTML = this.guessesLeft;
								document.getElementById("lettersPushed").innerHTML += ", " + event;
								guessPushed = true;
								if(this.guessesLeft == 0){alert("You lost! Game over.");}
								console.log(this.lettersGuessed);
							}

						} else {

							if(guessPushed == false){

								this.guessesLeft--;
								document.getElementById("guess").innerHTML = this.guessesLeft;
								this.lettersGuessed.push(event);
								document.getElementById("lettersPushed").innerHTML += event;
								guessPushed = true;
								console.log(this.lettersGuessed);
							}						
						}
					}
				}

	
		}
		/*
		startup: function(){
			document.onkeyup = function(event){

				var initialInput = String.fromCharCode(event.keyCode).toLowerCase();

				if(initialInput != null){

					document.getElementById("title").innerHTML = "<span id=\"bold\">Clue</span>: Name of a Movie";
					document.getElementById("wins").innerHTML = hangman.wins;
					document.getElementById("guess").innerHTML = hangman.guessesLeft;
					//document.getElementById("wins").innerHTML = hangman.;

					var word = hangman.movies[0];
					hangman.drawDashes(word);
				}

				return;
			}

			return;
		}*/
	}

	document.onkeyup = function(event){

		var userInput = String.fromCharCode(event.keyCode).toLowerCase();

			if(userInput != null){

				if(timesInputCaptured > 0){

					hangman.checkAlphabet(userInput);
				}

				while(executed == false) {

					document.getElementById("title").innerHTML = "<span id=\"bold\">Clue</span>: Name of a Movie";
					document.getElementById("wins").innerHTML = hangman.wins;
					document.getElementById("guess").innerHTML = hangman.guessesLeft;

					var word = hangman.movies[0];
					hangman.drawDashes(word);
					hangman.wordToArray(word);
					console.log("execute 1:" + executed);
					executed = true;
					console.log("execute 2:" + executed);

				}

				timesInputCaptured++;
				console.log("times captured: " + timesInputCaptured);
			}


	}




