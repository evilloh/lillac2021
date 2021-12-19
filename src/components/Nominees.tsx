import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import styles from './Nominees.module.css';
import calvary from '../images/guess/calvary.png'
import control from '../images/guess/control.png'
import cuphead from '../images/guess/cuphead.png'
import geoguess from '../images/guess/geoguess.png'
import outer from '../images/guess/outer.png'
import octopath from '../images/guess/octopath.png'
import prey from '../images/guess/prey.png'
import runeterra from '../images/guess/runeterra.png'
import zelda from '../images/guess/zelda.png'

type Props = {
  setwatchNominee : any
}
type Texts = {
  control: string,
  calvary: string,
  cuphead: string,
  geoguessr: string,
  outer: string,
  octopath: string,
  prey: string,
  runeterra: string,
  zelda: string
}

const texts:Texts = {
  control: `Control is mind-blowing. It's still "mainstream", nothing like antichamber or crazy stuff, but it's incredibly well done and pushes the mainstream third person shooter action game to the limit thanks to its art department. 
  The game is soooo smoooooth, you have the power to levitate and launch basically everything you see and it's just so enjoyable to do that. No need to aim much, just click E and launch wherever you want! Phheeww phhhewww! Then when you have no energy and you're recharging you have an additional weapon, well different kinds of that, and you can paly it like if it was a shooter for few seconds! 
  The face animations and characters are so realistic and well done, movements are smooth and real, and the dialogues are well done. The story is also an inception-like mind-blowing i-dont-understand-shit-of-what-is-going-on kind of story, which is cool since it's narrated pretty well. 
  There are also a lot of small details that make you love this game. Like... mhn, i don't wanna spoiler things so... like, let's say, a "music video". Or the ash maze. Ooooh the ash maze, it's probably one of the best "levels" in gaming history and will stay in the wall of fame for many years to come. 
  There are also a lot of side quests and challanges for those who like to spend more time on it. 
  The only low point of the game i might write about is the redundancy of the environment. The whole game takes places basically in a federal building, aaaand... it's real. It is a building. A boring building... Luckily they put different "levels" in between and it felt kind of dynamic but yeah, I felt it a little bit "grey" at times.
  
  This little thing said I'd reccomend this game to everybody. It's fun, both easy and challenging, a masterpiece visually with sparkles of art that will stay with you for a long time. Loved it!`, 

  calvary: `What an hilarious english-humor-like-point-click-monkey-island-game. I really enjoyed it even tho it's not my kind of game. It has the same flaws for all those kind of games, being a little slow and repetitive sometimes due to their gameplay, but the art and humor is really enjoyable and fun. I'd spam screenshots but I don't wanna spoil any surprise. ❤️ LOVED IT!`,
  cuphead: "This game is nuts. It's like the super secret final boss of the genre. It's perfection in all aspects, music, visual design, gameplay. It's a bomb of fun. You can play it alone or with a friend (which is a SUUPER plus for games like this). The art department took out their penis to show how good they are. It is incredible, one of those games that you must play in your lifetime.",
  geoguessr:  `This has been the most educational videogame I've played since the times of "Difference between vagy and anusy". It was a lot of fun to play online with friends, challenging others and being helped by your bro. The graphics are quite realistic, even though they could power them up with some dragons and such. Unfortunately I spen less hours than i would have wanted on it, but hey, it doens't go anywhere: whenever I want to give it a shot I can jump right back in!`,
  outer:  `This game is such an incredible experience. I'll start with saying what genre is and who is this game for. This is a walking simulator exploration game, one of those games where the game don't guide you directly, it's better said that you have to find your way through the world. If you knew the correct information from the beginning you could end the game in less than one hour.
  This game is about... patience and exploration.
  If you need to know where to go, if you want to rush the story and the content, if you feel the need to go step by step in an organised and streamlined way this game is definetly not for you.
  And actually I'm not that kind of player, I wish I was but I always feel the fomo to finish the games and the rush to go through everything asap. But this game is so beautiful and inviting that I fell in love with explorating it. It's visually amazing, you really feel like you're in this universe and I spend many many minutes with my mouth open with surprise, watching how the game revolves around me and how I discover things.
  The sound is minimal, but it's super on point. I wish the music would be a little more present in the game, but I understand the choice of keeping it simple. The gameplay is kinda difficult, I mean I really struggled to land my ship after many hours of game, but that's what makes the game more "real".
  
  I loved the game so much, but I must admit I couldn't finish it. The games is all about going out and discovering things that can help your mind to put all the puzzle pieces together (puzzle pieces that are wonderfully displayed in the ship computer, awesome job!). For the kind of player that I am I got "stuck", I couldn't think of where to go so I felt the rush to go online and look for answers... And that's where I stopped. I actually went a little longer with the help of guides, but it felt different. It wasn't like cheating, but I missed the whole purpose of the game, "the discover it by yourself".
  I am really impressed by this game and it's one unique piece of art that I'd suggest to not all but many players, and those who can enjoy this kind of game will never forget the experience.`,
  octopath:  `This "review" will be focused on the gameplay, since I didn't really follow the storylines, and I'll start explaining why I didn't.
  The writing style and the content of the story, for the first chapters of the stories at least, is quite dummy. It looks like something that a 14 years old would write if they wanted to write "the perfekt fantasy super story!!11".
  Bad people being bad and innocent people being innocent and so on... I don't have time anymore to follow this BS, I go and listen to a peppa pig podcast if I want to enjoy this kind of content.
  What I have time for is hours of mindless grinding, and this is where the good part comes in!
  
  This is like playing an old Final Fantasy game, with jobs and random encounters. Bosses and strategy. The job system is really simple but at the same time it's pretty well done and strategic. You can build up your optimized team comp if you want, or you can just go as you wish. This kind of games is actually forgiving in that regard, if you can't win some boss fight... just grind some levels!
  One thing that I didn't like tho is that you have to wait until the very end to get the last 4 secondary jobs... It's an end game thing and once you have them you don't really make use of them much. I don't really understand that choice.
  
  Other mentions, if not the main source the quality of this game comes from, is the art department. Both music and visual are outstanding. The pixel art used for this game is unique and incredibly well executed, and the soundtrack is something that will remain in the history of "best relaxing OST videogame", add it to your playlist cmon!
  
  I'd suggest this game to every jrpg lover, who loves grind and old school rpg`,
  prey:  `Prey is such an enjoyable game with a scarierino patatino mood. I'm a pussi so I got scared much, but it was really really enjoyable. The gameplay is super smooth and the story enjoyable. My complaints go to the scary parts that scared me, but it just means that it worked properly. It has a good difficulty and you can approach the game in so many different ways, which makes the game a really high quality one. I got lost several times in there, but it's probably just due to my lack of map awareness. Super good game, I'd say that anyone who liked dishonored games, bioshock or similar should play it!`,
  runeterra: `This review is not about the game itself as a whole, which would be an awesome review anyways, but for an event in particular: the path of the champions event. It brings a very interesting and entertaining pve single player adventure to the card game. You pick a champion and a base deck and start dueling other champions and winning prizes (cards) that you add to your deck along the way. It basically becomes a card roguelike adventure! It's very fun to see how you build strategy around the champion to pick in order to beat particular bosses. The only flaw I see is that maybe not all the champions are suited for this kind of challange, but otherwise it was suprisingly fun to play!`,
  zelda: `To properly talk about this game I should only say the "flaws" that I see in the game, then just assume that everything not said is... perfection. It's skyrim on a Zelda salsa. It's immense in a good way, not like those open worlds just filled with... nothing. No, it is full of INTERESTING things to see an different places to watch. The music, the art, the photography are all incredible. The gameplay is simple and fun. It might become a little bit repetitive and the fact that the weapons get broken is not something I'm fan of, but it's just personal taste I guess. I didn't finish the game since to beat the last castle I should have grinded more hearts and... meeeh. Also a little note on the narrative: it's nice but it's, as always, a little bit washed down and "you're the chosen hero-save the princess" kind of story.`,
}

const Nominees: React.FC<Props> = ({setwatchNominee}) => {
  const [planet, setPlanet] = useState("runeterra")
  const [planetImage, setPlanetImage] = useState(control)
  const [planetTitle, setPlanetTitle] = useState("Control")
  const [planetText, setPlanetText] = useState(texts.control)

  useEffect(() => {
    switch (planet) {
      case "control":
        setPlanetText(texts.control)
        setPlanetImage(control)
        setPlanetTitle("Control")
        break;
    
      case "calvary":
        setPlanetText(texts.calvary)
        setPlanetImage(calvary)
        setPlanetTitle("The procession of Calvary")
        break;
    
      case "cuphead":
        setPlanetText(texts.cuphead)
        setPlanetImage(cuphead)
        setPlanetTitle("Cuphead")
        break;
    
      case "geoguess":
        setPlanetText(texts.geoguessr)
        setPlanetImage(geoguess)
        setPlanetTitle("Geoguessr")
        break;
    
      case "outer":
        setPlanetText(texts.outer)
        setPlanetImage(outer)
        setPlanetTitle("Outer Wilds")
        break;
    
      case "octopath":
        setPlanetText(texts.octopath)
        setPlanetImage(octopath)
        setPlanetTitle("Octopath Traveler")
        break;
        
      case "prey":
        setPlanetText(texts.prey)
        setPlanetImage(prey)
        setPlanetTitle("Prey")
        break;

      case "runeterra":
        setPlanetText(texts.runeterra)
        setPlanetImage(runeterra)
        setPlanetTitle("Legends of Runeterra: Path of the champions")
        break;
      case "zelda":
        setPlanetText(texts.zelda)
        setPlanetImage(zelda)
        setPlanetTitle("Legends of Zelda: Breath of the Wild")
        break;
    
      default:
        break;
    }
    
  }, [planet])

  return (
  <div className={styles.nomineesContainer}>
    <div  className={styles.thumbnailsContainer}>
      <img onClick={() => setPlanet('calvary')} src={calvary}></img>
      <img onClick={() => setPlanet('control')} src={control}></img>
      <img onClick={() => setPlanet('cuphead')} src={cuphead}></img>
      <img onClick={() => setPlanet('geoguess')} src={geoguess}></img>
      <img onClick={() => setPlanet('outer')} src={outer}></img>
      <img onClick={() => setPlanet('octopath')} src={octopath}></img>
      <img onClick={() => setPlanet('prey')} src={prey}></img>
      <img onClick={() => setPlanet('runeterra')} src={runeterra}></img>
      <img onClick={() => setPlanet('zelda')} src={zelda}></img>
    </div>

    <div className={styles.nomineesSelected}>
      <img onClick={() => setPlanet('calvary')} src={planetImage}></img>
      <div>
        <h2>{planetTitle}</h2>
        <p>{planetText}</p>
      </div>
    </div>
    <h1 onClick={() => setwatchNominee(false)}>I'm done browsing!</h1>

  </div>
);
} 

export default Nominees;