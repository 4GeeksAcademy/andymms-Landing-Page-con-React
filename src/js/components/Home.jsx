import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//create your first component

const gameCard = [
	{
		imgURL: "https://f4.bcbits.com/img/a0907743342_10.jpg",
		title: "Hollow Knight",
		description: "An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
		gameLink: "https://store.steampowered.com/app/367520/Hollow_Knight"
	},
	{
		imgURL: "https://stardewvalleywiki.com/mediawiki/images/7/75/Soundtrack_Album_Cover.png",
		title: "Stardew Valley",
		description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
		gameLink: "https://store.steampowered.com/app/413150/Stardew_Valley"
	},
	{
		imgURL: "https://media.vandal.net/m/44239/celeste-2018128121116_11.jpg",
		title: "Celeste",
		description: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges, uncover devious secrets, and piece together the mystery of the mountain.",
		gameLink: "https://store.steampowered.com/app/504230/Celeste"
	},
	{
		imgURL: "https://store.ign.com/cdn/shop/files/Undertale-Piano-Collections-Box-Set-Exclusive-Heart-Red-Variant-4LP-Vinyl-6.jpg?v=1758048123&width=1946",
		title: "Undertale",
		description: "Instead of fighting, players can choose to talk or spare monsters. This simple choice dictates the story, leading to wildly different outcomes (Pacifist, Neutral, or Genocide), making it a brilliant, heartfelt game that constantly breaks the rules of the RPG genre.",
		gameLink: "https://store.steampowered.com/app/391540/Undertale"
	}
];


const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex flex-wrap row g-4">
				{gameCard.map((games, index) => (
					<div class="col-12 col-md-6 col-lg-3 mb-5 justify-content-center d-flex">
					<Card key={index} {...games}
					/>
					</div>
				))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;