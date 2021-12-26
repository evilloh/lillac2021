import React, {useState, useRef, useEffect} from 'react';
import { Link } from "react-router-dom";
import Curtain from '../Curtain'
// @ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';
import styles from './Prey.module.css';
import Guess from '../Guess';



const texts = [
  "Welcome to the P. satellite. This part of your journey is very straightforward: in honor of the big M. who recommended this game, thus being responsible for the game Prey to be on the Lilac nominees.",
  "You have come here to take a look at us. But it's us who will take a look at you. Nothing fancy, just take a test. In order to have you comfortable we will try to make this test look like one of your favorite tests: the Lilla quiz.",
  "You have completed the test, given us all the answers. We will exmine carefully the information and tell you a result.",
  "It looks like you're missing one last step. Please procede with the next selection.",
  "Thanks for participating in the Tech interview the other day with the team. Unfortunately, after receiving the feedback from them, we will not be moving forward in the recruitment process, since the current needs of the team are to hire a more experienced software developer. The team enjoyed the session with you, you have good communication skills and attitude, but on the other hand there were some things that needed improvement among other things: the lack of presentational components and tests; the semantic use of HTML; lack of code linting; and lack of some lib bundle optimization on build. Anyway, we appreciate the time you have invested and wish you all the best in your future endeavors, as well as a Happy Xmas and New Year. Kind Regards,",
  "You did it! You guessed right! The winner was Outer wilds!"

]
const questions = [
"Who was Mazzini?",
"What is the name of a famous videogame publisher that is also a mountain somewhere?",
"What does Giovane mean?",
"Which one of those is NOT a hentai sub genre (but should)?",
"Which of these was an american president?",
"Write down the name of a well known londonese ghost",
]

const Prey: React.FC = () => {
 const [page, setPage] = useState(1)
 const [answers, setAnswers] = useState({})
 const [selected, setSelected] = useState(0)
 const [inputValue, setInputValue] = useState("")
 const [makeaGuess, setMakeaGuess] = useState(false)
 
 const answer = (answer:string, questionNumber: number) => {
   setAnswers({questionNumber: answer})
   setSelected(questionNumber)
 }


 return (
    <div  className={styles.preyContainer}>
      {
        makeaGuess && <Guess setMakeaGuess={setMakeaGuess}/> 
      } 
      <div className={styles.formContainer}>
      {
        page === 1 && 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={texts[0]}
          typeSpeed={60}
          />
          <button onClick={()=>setPage(page+1)}>Next</button>
        </div>
        }
      {
        page === 2 && 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={texts[1]}
          typeSpeed={60}
          />
          <button onClick={()=>setPage(page+1)}>Next</button>
        </div>
        }
      {
        page === 3 && 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={questions[0]}
          typeSpeed={60}
          />
          <div className={styles.answersContainer}>
            <div onClick={()=> answer("A singer", 1)} className={`${styles.answerContainer} ${selected === 1 && styles.answerContainerSelected}`}><p>A singer</p></div>
            <div onClick={()=> answer("A dancer", 2)} className={`${styles.answerContainer} ${selected === 2 && styles.answerContainerSelected}`}><p>A dancer</p></div>
            <div onClick={()=> answer("A drag queen", 3)} className={`${styles.answerContainer} ${selected === 3 && styles.answerContainerSelected}`}><p>A drag queen</p></div>
            <div onClick={()=> answer("A question in a previous lillaquiz", 4)} className={`${styles.answerContainer} ${selected === 4 && styles.answerContainerSelected}`}><p>A question in a previous lillaquiz</p></div>
          </div>
          {selected !== 0 ? <button onClick={()=>{ setPage(page+1); setSelected(0)}}>Next</button> : 
          <button>Answer first</button>}
        </div>
        }
      {
        page === 4 && 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={questions[1]}
          typeSpeed={60}
          />
          <div className={styles.answersContainer}>
            <div onClick={()=> answer("Mazzini", 1)} className={`${styles.answerContainer} ${selected === 1 && styles.answerContainerSelected}`}><p>Mazzini</p></div>
            <div onClick={()=> answer("Adis abeba", 2)} className={`${styles.answerContainer} ${selected === 2 && styles.answerContainerSelected}`}><p>Adis abeba</p></div>
            <div onClick={()=> answer("East", 3)} className={`${styles.answerContainer} ${selected === 3 && styles.answerContainerSelected}`}><p>East</p></div>
            <div onClick={()=> answer("Annapurna", 4)} className={`${styles.answerContainer} ${selected === 4 && styles.answerContainerSelected}`}><p>Annapurna</p></div>
          </div>
          {selected !== 0 ? <button onClick={()=> { setPage(page+1); setSelected(0)} }>Next</button> : 
          <button>Answer first</button>}
        </div>
        }
      {
        page === 5 && 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={questions[2]}
          typeSpeed={60}
          />
          <div className={styles.answersContainer}>
            <div onClick={()=> answer("Euronics", 1)} className={`${styles.answerContainer} ${selected === 1 && styles.answerContainerSelected}`}><p>Euronics</p></div>
            <div onClick={()=> answer("Ecuador", 2)} className={`${styles.answerContainer} ${selected === 2 && styles.answerContainerSelected}`}><p>Ecuador</p></div>
            <div onClick={()=> answer("Pedro", 3)} className={`${styles.answerContainer} ${selected === 3 && styles.answerContainerSelected}`}><p>Pedro</p></div>
            <div onClick={()=> answer("Yellow snow", 4)} className={`${styles.answerContainer} ${selected === 4 && styles.answerContainerSelected}`}><p>Yellow snow</p></div>
          </div>
          {selected !== 0 ? <button onClick={()=>{ setPage(page+1); setSelected(0)}}>Next</button> : 
          <button>Answer first</button>}
        </div>
        }
      {
        page === 6 && 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={questions[3]}
          typeSpeed={60}
          />
          <div className={styles.answersContainer}>
            <div onClick={()=> answer("Tickling", 1)} className={`${styles.answerContainer} ${selected === 1 && styles.answerContainerSelected}`}><p>Tickling</p></div>
            <div onClick={()=> answer("Mahou Shoujo", 2)} className={`${styles.answerContainer} ${selected === 2 && styles.answerContainerSelected}`}><p>Mahou Shoujo</p></div>
            <div onClick={()=> answer("Pig Tails", 3)} className={`${styles.answerContainer} ${selected === 3 && styles.answerContainerSelected}`}><p>Pig Tails</p></div>
            <div onClick={()=> answer("Under the kitchen's table with the uncle at dinner at Carlo's house", 4)} className={`${styles.answerContainer} ${selected === 4 && styles.answerContainerSelected}`}><p>Under the kitchen's table with the uncle at dinner at Carlo's house</p></div>
          </div>
          {selected !== 0 ? <button onClick={()=>{ setPage(page+1); setSelected(0)}}>Next</button> : 
          <button>Answer first</button>}
        </div>
        }
      {
        page === 7 && 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={questions[4]}
          typeSpeed={60}
          />
          <div className={styles.answersContainer}>
            <div onClick={()=> answer("James Monroe", 1)} className={`${styles.answerContainer} ${selected === 1 && styles.answerContainerSelected}`}><p>James Monroe</p></div>
            <div onClick={()=> answer("Johnson and Johnson", 2)} className={`${styles.answerContainer} ${selected === 2 && styles.answerContainerSelected}`}><p>Johnson and Johnson</p></div>
            <div onClick={()=> answer("Moderna", 3)} className={`${styles.answerContainer} ${selected === 3 && styles.answerContainerSelected}`}><p>Moderna</p></div>
            <div onClick={()=> answer("Astrazeneca", 4)} className={`${styles.answerContainer} ${selected === 4 && styles.answerContainerSelected}`}><p>Astrazeneca</p></div>
          </div>
          {selected !== 0 ? <button onClick={()=>{ setPage(page+1); setSelected(0)}}>Next</button> : 
          <button>Answer first</button>}
        </div>
        }
      {
        page === 8 && 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={questions[5]}
          typeSpeed={60}
          />
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
          {inputValue !== "" ? <button onClick={()=>{ setPage(page+1); setSelected(0)}}>Next</button> : 
          <button>Answer first</button>}
        </div>
        }
      {
        page === 9 && (localStorage.getItem('lilac') ?
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={texts[2]}
          typeSpeed={60}
          />
          <button onClick={()=>{ setPage(page+1); setSelected(0)}}>Next</button> 
        </div> : <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={texts[3]}
          typeSpeed={60}
          />
         
          {selected === 5 ? <button onClick={()=>{ setPage(page+1); setSelected(0)}}>Next</button> : 
           <button onClick={()=>{ setMakeaGuess(true); setSelected(5)}}>Next</button> }
        </div>)
        }
      {
        page === 13 && 
        <div className={styles.typewriterContainer}>
          <button onClick={()=>{ setPage(10); setSelected(0)}}>Fin.</button>
          </div>
        }
      {
        page === 10 && (localStorage.getItem('lilac') !== "outer" ? 
        <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={texts[4]}
          typeSpeed={60}
          />
          <button><a href='https://www.linkedin.com/jobs/web-developer-empleos-spagna/?f_WT=2&geoId=105646813'>Fin.</a></button>
          </div> : <div className={styles.typewriterContainer}>
          <TypeWriterEffect
          startDelay={100}
          cursorColor="black"
          text={texts[5]}
          typeSpeed={60}
          />
          <button onClick={()=>{ setPage(page+1); setSelected(0)}}><Link to="/outer">Fin.</Link></button>
          </div>)
        }
      </div>
    </div>
);
} 

export default Prey;