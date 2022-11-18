import React from "react"
import {connect, Head, styled, css} from "frontity"
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";


const Hurricane = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <RelativeDiv>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
<ImageHolder>
            <Notes><button className="exit-small" onClick={actions.theme.toggleNotesThief}><Image src="http://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/notes.png" /></button></Notes>
            <BackPackHolderSmall>
                <BackpackSmall onClick={actions.theme.toggleBackpack} isBright={state.theme.backPackHasItemsThief}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/backpack.png" />
                </BackpackSmall>
            </BackPackHolderSmall>
    <DiaryHolderBig isVisible={state.theme.isDiaryInsideVisible}>
        <DiaryBig>
            <button className="close-button" onClick={actions.theme.toggleDiary}>X</button>
            <DiaryContent>Dear Diary, <br /><br /><br />I played a game.<br/><br/>I shopped at shops.<br /><br />I had a Mocha.<br /><br />I hid from Cops.</DiaryContent>
        </DiaryBig>
    </DiaryHolderBig>

            <BackPackHolderBig isVisible={state.theme.isBackPackVisible}>
                <BackpackBig>
                    <button className="close-button" onClick={actions.theme.toggleBackpack}>X</button>
                    <h3>Backpack Contents</h3><br />

                    {state.game.backpackThief.map((item) => {
                        return (
                            <div className = "wp-block-columns" key={item.key}>
                                <div className = "wp-block-column">
                                <img onClick={() => actions.theme.showItemContents(item.key)} className={item.key} src={item.src} />
                                </div>
                            </div>
                        )
                    })}
                </BackpackBig>
            </BackPackHolderBig>

            <SafeHolderBig isVisible={state.theme.isSafeThiefVisible} >
                <SafeBig>
                    <button className="close-button" onClick={actions.theme.toggleSafeThief}>X</button>
                    <button className = "exit-button" onClick={actions.theme.toggleNotesThief}><Image src="http://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/notes.png" /></button>

                    <FormGame>
                <div>Try to Open Safe!</div>
                <br />
                <InputText type="text" id="Game1Word1Page1ThiefLetters" value={state.game.game1Word1Page1ThiefGuess.game1Word1Page1ThiefLetters} onChange={ actions.theme.setGame1Word1Page1ThiefLetters}/>
                (4 Letters - all lowercase)
                {
                    state.theme.isGame1Word1Page1ThiefWrong && state.theme.haveGuessedGame1Word1Page1Thief  ? (
                        <span className="red"> Wrong Answer!</span>
                    ) : (<span></span>)
                }
                {
                    !state.theme.isGame1Word1Page1ThiefWrong && state.theme.haveGuessedGame1Word1Page1Thief  ? (
                        <span className="green"> Right Answer!</span>
                    ) : (<span></span>)
                }
                <br />
                <InputText type="text" id="Game1Word2Page1ThiefLetters" value={state.game.game1Word2Page1ThiefGuess.game1Word2Page1ThiefLetters} onChange={ actions.theme.setGame1Word2Page1ThiefLetters}/>
                (4 Letters - all lowercase)
                {
                    state.theme.isGame1Word2Page1ThiefWrong && state.theme.haveGuessedGame1Word2Page1Thief  ? (
                        <span className="red"> Wrong Answer!</span>
                    ) : (<span></span>)
                }
                {
                    !state.theme.isGame1Word2Page1ThiefWrong && state.theme.haveGuessedGame1Word2Page1Thief  ? (
                        <span className="green"> Right Answer!</span>
                    ) : (<span></span>)
                }
                <br />
                <InputText type="text" id="Game1Word3Page1ThiefLetters" value={state.game.game1Word3Page1ThiefGuess.game1Word3Page1ThiefLetters} onChange={ actions.theme.setGame1Word3Page1ThiefLetters}/>
                (11 Letters - all lowercase)
                {
                    state.theme.isGame1Word3Page1ThiefWrong && state.theme.haveGuessedGame1Word3Page1Thief  ? (
                        <span className="red"> Wrong Answer!</span>
                    ) : (<span></span>)
                }
                {
                    !state.theme.isGame1Word3Page1ThiefWrong && state.theme.haveGuessedGame1Word3Page1Thief  ? (
                        <span className="green"> Right Answer!</span>
                    ) : (<span></span>)
                }
                <br />
                <InputText type="text" id="Game1Word4Page1ThiefLetters" value={state.game.game1Word4Page1ThiefGuess.game1Word4Page1ThiefLetters} onChange={ actions.theme.setGame1Word4Page1ThiefLetters}/>
                (7 Letters - all lowercase)
                {
                    state.theme.isGame1Word4Page1ThiefWrong && state.theme.haveGuessedGame1Word4Page1Thief  ? (
                        <span className="red"> Wrong Answer!</span>
                    ) : (<span></span>)
                }
                {
                    !state.theme.isGame1Word4Page1ThiefWrong && state.theme.haveGuessedGame1Word4Page1Thief  ? (
                        <span className="green"> Right Answer!</span>
                    ) : (<span></span>)
                }
            </FormGame>
                    </SafeBig>
            </SafeHolderBig>
    <TybeanOctopus>
        <SafeSmall onClick={actions.theme.countClicks}>
            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/tybean-octopus.png" /></SafeSmall>
    </TybeanOctopus>

    <InfoHolderSmall>
        <InfoSmall onClick={actions.theme.toggleInfo}>
            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" /></InfoSmall>
    </InfoHolderSmall>
            <Image1>
                <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/red-table-4-chairs.png" />
            </Image1>
    <TornDiaryPage onClick={actions.theme.toggleTornDiary}>
        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/torndiarypage.png" />
    </TornDiaryPage>
    <TornDiaryHolderBig isVisible={state.theme.isTornDiaryInsideVisible}>
        <DiaryBig>
            <button className="close-button" onClick={actions.theme.toggleTornDiary}>X</button>
        </DiaryBig>
    </TornDiaryHolderBig>

    <SignHolderBig isVisible={state.theme.isSignVisible}>
        <SignBig>
            <button className = "close-button" onClick={actions.theme.toggleSign}>X</button>
            <button className = "exit-button" onClick={actions.theme.toggleNotesThief}><Image src="http://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/notes.png" /></button>
            <br /><h3>Sign on Tree</h3>
            <br />
            <div>Little shops on West side of Tybee Oaks - South to North  <br />
                <br /><strong>Letter #3</strong><br /><strong>Letter #8</strong><br /><strong>Letter #11</strong><br /><strong>Letter #2</strong></div>
        </SignBig>
    </SignHolderBig>
                <Image2 onClick={actions.theme.toggleSign}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/tree-with-sign.png" />
                </Image2>

    <Image5>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/back-picnic-table.png"/>
    </Image5>
    <KnobMessage isVisible={state.theme.isKnobMessageVisible} onClick={actions.theme.toggleKnobMessageThief}>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/palmtreenew-message.png" />
    </KnobMessage>

    <Image6>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/treecircle.png"/>
    </Image6>
    <Image6a isVisible={state.theme.isHoleOpen}  onClick={actions.theme.toggleSafeThief}>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/circle-safe.png"/>
    </Image6a>
    <Image6b isVisible={!state.theme.isGame1Word1Page1ThiefWrong && !state.theme.isGame1Word2Page1ThiefWrong && !state.theme.isGame1Word3Page1ThiefWrong && !state.theme.isGame1Word4Page1ThiefWrong}  >
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/circle-safe-open.png"/>
    </Image6b>
    <Winner isVisible={!state.theme.isGame1Word1Page1ThiefWrong && !state.theme.isGame1Word2Page1ThiefWrong && !state.theme.isGame1Word3Page1ThiefWrong && !state.theme.isGame1Word4Page1ThiefWrong}  >
      <span className = "green">WINNER!!!</span>
        <br /><br /><Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>
    </Winner>
    {
        state.theme.isKnobMessageAvailable ? (
            <Image4 onClick={actions.theme.toggleKnobMessageThief}>
                <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/palmtreenew.png"/>
            </Image4>
        ) : (
            <Image4>
                <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/palmtreenew.png"/>
            </Image4>
        )
    }
    {
        state.theme.isNumBusAvailable ? (
            <Image7 onClick={actions.theme.toggleNumBus}>
                <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/front-picnic-table.png"/>
            </Image7>
        ) : (
            <Image7>
                <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/front-picnic-table.png"/>
            </Image7>
        )
    }
    <NumBus isVisible={state.theme.isNumBusVisible}  onClick={actions.theme.toggleNumBus}>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/front-picnic-table-message.png"/>
    </NumBus>
    {
        state.theme.isLegsAvailable ? (
            <Image8 onClick={actions.theme.toggleLegs}>
                <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/red-table-2-chair.png"/>
            </Image8>
        ) : (
            <Image8>
                <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/red-table-2-chair.png"/>
            </Image8>
        )
    }
    <Legs isVisible={state.theme.isLegsVisible}  onClick={actions.theme.toggleLegs}>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/red-table-2-chair-message.png" />
    </Legs>
                        <Image3 onClick={actions.theme.toggleDiary}>
                            <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/diary.png" />
                        </Image3>

                {
                    state.theme.isLightVisibleThief ? (
                        <Image9 onClick={actions.theme.backpackLightThief}>
                            <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/blacklight.png" />
                        </Image9>
                    ) : (
                        <Image9 >
                        </Image9>
                    )
                }
    <NotesHolderBig isVisible={state.theme.isNotesThiefVisible} >
            <button className="close-button" onClick={actions.theme.toggleNotesThief}>X</button>
            <FormGame>
                <div>Take some notes</div>
                <br />
                <InputTextArea type="textarea" id="ThiefNotes" value={state.game.thiefNotes} onChange={ actions.theme.setThiefNotes}/>
            </FormGame>

    </NotesHolderBig>

            </ImageHolder>
            <ImageHolderLandscape isVisible={!state.theme.isWaiverVisible}>
                <h2>Please Use Landscape View!</h2>
            </ImageHolderLandscape>
            <InfoHolderBig isVisible={state.theme.isInfoVisible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleInfo}>X</button>
                    <InfoText>
                        <div className="wp-block-columns">
                            <div className="wp-block-column">
                                <InfoSmall >
                                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" /></InfoSmall>
                            </div>
                            <div className="wp-block-column">
                                <strong>This game is best played in landscape mode. Please turn your device sideways to play.</strong>
                            </div>
                        </div>
                        <div className="font-small">
                        <Link onClick={actions.theme.removeGame} className="link font-small" link="/">Home</Link>
                        &nbsp; | {state.game.gameNameThief} -> <Link className="link font-small" link="/thief" onClick={actions.theme.goToPage1Thief}>Intro</Link> | {state.game.gamePageThief}
                        </div><br />
                        <strong>How to Play:</strong> Click around - some items will disappear and then appear in your backpack.  If it is in your backpack you may be able to use it by clicking on it.
                        <br /><br />
                        <strong>Goal for this stop:</strong> find the thief's stolen goods.  Use Hints if you really need them.
                        <br /><br />
                        <button className="button-small" onClick={actions.theme.toggleHint1Thief}>Open Hint (game)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint2Thief}>Open Hint (shops)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint3Thief}>Open Hint (light)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint4Thief}>Open Hint (order of numbers)</button>

                        <br /><br />
                        <HintHolder isVisible={state.theme.isHint4ThiefVisible}>
                            <button className="close-button" onClick={actions.theme.toggleHint4Thief}>X</button>
                            <strong>Hint for somewhere order of numbers for safe:</strong>
                            <br /><br />The diary had a little rhyme.  This rhyme tells you the order of the numbers.
                            <br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint3ThiefVisible}>
                            <button className="close-button" onClick={actions.theme.toggleHint3Thief}>X</button>
                            <strong>Hint for light (in backpack):</strong>
                            <br /><br />Once you click on light it should go into your backpack. This is a blacklight and when you
                            use it (click it in backpack to turn on) and click on objects you will see more clues.
                            <br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint1ThiefVisible}>
                            <button className="close-button" onClick={actions.theme.toggleHint1Thief}>X</button>
                            <strong>Hint for game clue:</strong> <br /><br />You may have to ask someone about this contest.
                            It happened in July of 2021. Or you can look on their facebook/instagram feed.
                            <br /><br />OR if you
                            happen to know the name of the animal prowling around then you know the answer to this puzzle.<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint2ThiefVisible}>
                            <button className="close-button" onClick={actions.theme.toggleHint2Thief}>X</button>
                            <strong>Hint for shops clue:</strong> <br /><br />There are many little shops along the west side of the Tybee Oaks area - Inferno, Glazed and Confused are in the north part.
                            The southern most shop on the west side is "Tipsy Mermaid Art", then "granny flounders", then "The Tybee Gallery", then "Rachel Vogel Designs".
                            The third letter of the first (most southern) shop is "p".<br /><br />

                        </HintHolder>
                        <Link onClick={actions.theme.toggleInfo} link="/thief">Close Info and Play</Link> | <Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>

                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
            <InfoHolderBig isVisible={state.theme.isWaiverVisible} >
                <InfoBig>

                    <InfoText>
                        <div>
                            <strong>WAIVER</strong><br /><br />
                            <strong>I HEREBY ASSUME ALL OF THE RISKS OF PARTICIPATING IN THIS ACTIVITY</strong> -
                            including by way of example and not limitiation, any risks that may arise in the solving of any puzzle in
                            this game.  Gameplay is entirely up to me and at my discretion.
                            <br /><br />
                            <strong>I WAIVE, RELEASE, AND DISCHARGE </strong> from any and all liability for EscapeOut.Games and
                        its parent company (Coastal Initiative, LLC).
                        <br /><br /><strong>I CERTIFY THAT I HAVE READ THIS DOCUMENT AND I FULLY UNDERSTAND ITS CONTENT.
                            I AM AWARE THAT THIS IS A RELEASE OF LIABILITY AND A CONTRACT AND I SIGN IT OF
                            MY OWN FREE WILL.</strong>
                        </div>
                        <br />
                       <button className="button" onClick={actions.theme.toggleWaiver}>I agree to Waiver - clicking indicates signing</button>
                        <br /><br />
                        <Link className="button" onClick={actions.theme.resetGame} link="/">Quit Game and go back to Home Page</Link>


                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
        </RelativeDiv>
    )
}

export default connect(Hurricane)

const TornDiaryPage = styled.div`
  max-width: 59px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:22%;
  left:43%;
  z-index:25;
  width:8%;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const RelativeDiv = styled.div`
  position:relative;
`
const ImageHolderLandscape = styled.div`
  position:relative;
  height: calc(100vh - 60px);
  z-index:10;
  @media (min-width: 500px) {
    display: none;
  }

  display:none;
 
`
const ImageHolder = styled.div`
  position:relative;
  height: calc(100vh - 60px);
  max-height:400px;
  z-index:10;
  display: block;
  @media (max-width: 501px) {
    display: block;
  }
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/lower-porch-background.png") top center / cover no-repeat;

`
const Winner = styled.div`
  position:absolute;
  right:0px;
  top:50px;
  font-size: 16px;
  margin-bottom:20px;
  background-color: white;
  padding:20px;
  border: 1px solid #4CAF50;
  cursor:pointer;
  z-index:102;
  display: ${ props => props.isVisible ? 'block' : 'none'};
`
const Notes = styled.div`
  position:absolute;
  right:3%;
  top:12%;
  width:7%;
  max-width:50px;
  font-size: 10px;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`

const TybeanOctopus = styled.div`
  position:absolute;
  top:5%;
  right:30%;
  margin-bottom:20px;
  max-width:70px;
  width:13%;
  cursor:pointer;
  z-index:102;
`
const InfoHolderSmall = styled.div`
  position:absolute;
  right:3%;
  width:7%;
  max-width:50px;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const BackPackHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 60px);
  left:0;
  background-color:#699A7D;;
  height:calc(100vh - 40px);
  margin-bottom:20px;

  visibility: ${ props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${ props => props.isVisible ? .9 : 0};
  z-index:103;
`
const DiaryHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 60px);
  left:0;
  background-color:#fffff;
  opacity: .9;
  height:calc(100vh - 40px);
  margin-bottom:20px;
  z-index:105;
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/opendiary.png") #699A7D top left / auto no-repeat;
  visibility: ${ props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${ props => props.isVisible ? 1 : 0};
  transition: visibility 0s, opacity .5s linear;
`
const TornDiaryHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 60px);
  left:0;
  background-color:white;
  height:calc(100vh - 40px);
  margin-bottom:20px;
  z-index:105;
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/torndiarythief.png") #699A7D top left / auto no-repeat;
  visibility: ${ props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${ props => props.isVisible ? 1 : 0};
  transition: visibility 0s, opacity .5s linear;
`
const DiaryContent = styled.div`
padding:30px;
  width:200px;
  
`
const NotesHolderBig = styled.div`
  position:absolute;
  top:0;
  right:0;
  width:95vw;
  max-width: 95vw;
  background-color:#699A7D;
  opacity: .9;
  height:calc(100vh - 60px);
  z-index:103;
  visibility: ${ props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${ props => props.isVisible ? .9 : 0};
  transition: visibility 0s, opacity .5s linear;
`
const InputTextArea = styled.textarea`
  width:80vw;
  border: 1px solid black;
  height:calc(100vh - 150px);
  font-size:20px;
  margin-bottom:5px;
`
const SafeHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width: 800px;
  width: calc(100vw - 60px);
  left:0;
  background-color:#699A7D;
  height:calc(100vh - 60px);
  margin-bottom:20px;
  visibility: ${ props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${ props => props.isVisible ? .9 : 0};
  transition: visibility 0s, opacity .5s linear;
  
  z-index:103;
`
const InfoHolderBig = styled.div`
  position:absolute;
  color:white;
  top:0;
  max-width: 800px;
  width: calc(100vw - 60px);
  left:0;
  background-color:#699A7D;
  height:calc(100vh - 60px);
  margin-bottom:20px;
  visibility: ${ props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${ props => props.isVisible ? 1 : 0};
  transition: visibility 0s, opacity .5s linear;
  z-index:103;
`
const BackPackHolderSmall = styled.div`
  position:absolute;
  right:10%;
  max-width:51px;
  width:12%;
  font-size: 10px;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const BackpackSmall= styled.div`
  width:100%;
  margin: auto;
  text-align:center;
  border: ${ props => props.isBright ? '2px solid yellow' : 'none'};
  border-radius: 15px;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const InfoSmall= styled.div`
  width:100%;
  margin: auto;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  } 
`

const SafeSmall= styled.div`
  max-width: 70px;
  margin: auto;
  position:absolute;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BackpackBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const DiaryBig= styled.div`
  max-width: 800px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const HintHolder = styled.div`
  position:absolute;
  top:-1px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:-1px;
  background-color:#699A7D;
  height: calc(100vh - 40px);
  margin-bottom:20px;
  padding:20px 30px 20px 20px;
  visibility: ${ props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${ props => props.isVisible ? 1 : 0};
  transition: visibility 0s, opacity .5s linear;
  z-index:150;
`
const SignHolderBig = styled.div`
  position:absolute;
  top:0;
  max-width:800px;
  width: calc(100vw - 60px);
  left:0;
  background-color:#699A7D;
  opacity: .9;
  height: calc(100vh - 40px);
  margin-bottom:20px;
  visibility: ${ props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${ props => props.isVisible ? .9 : 0};
  transition: visibility 0s, opacity .5s linear;
  z-index:103;
`
const SignBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  color: white;
`
const TableHolderBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`
const TableBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const InfoBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
}
`

const SafeBig= styled.div`
  max-width: 800px;
  padding:10px;
  width:100%;
  height:300px;
  margin: auto;
  position:absolute;
  top:0;
  right:0;
`
const FormGame = styled.form`
    position:absolute;
    top:30px;
    left: 30px;
    `
const Image1 = styled.div`
  max-width: 200px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:37%;
  right:10%;
  z-index:22;
  width: 28%;
`
const Image2 = styled.div`
  max-width: 100px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom: 41%;
  left:35%;
  z-index:20;
  width:14%;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const Image3= styled.div`
  max-width: 40px;
  margin: auto;
  position:absolute;
  top:21%;
  right:40%;
  z-index:20;
  width:10%;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Image4 = styled.div`
  max-width: 188px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:35%;
  left:15%;
  z-index:20;
  width:24%;

`
const Image5 = styled.div`
  max-width: 174px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:20%;
  right:30%;
  z-index:12;
  width: 23%;

`
const Image6 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:33%;
  right:50%;
  z-index:12;

`
const Image6a = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:33%;
  right:50%;
  z-index:25;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }

`
const Image6b = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:33%;
  right:50%;
  z-index:26;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }

`
const Image7 = styled.div`
  max-width: 234px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:5%;
  left:0%;
  z-index:22;
  width:30%;
 :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Image8 = styled.div`
  max-width: 150px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:50%;
  left:0%;
  z-index:22;
  width: 20%;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Legs = styled.div`
  max-width: 150px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:50%;
  left:0%;
  z-index:22;
  width: 20%;
  z-index:23;
  display: ${ props => props.isVisible ? 'block' : 'none'};

`
const NumBus = styled.div`
  max-width: 234px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:5%;
  left:0%;
  z-index:22;
  width:30%;
  z-index:23;
  font-size:12px;
  display: ${ props => props.isVisible ? 'block' : 'none'};

`
const KnobMessage = styled.div`
  max-width: 188px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:35%;
  left:15%;
  z-index:20;
  width:24%;
  z-index:23;
  display: ${ props => props.isVisible ? 'block' : 'none'};

`
const Image9= styled.div`
  max-width: 40px;
  margin: auto;
  position:absolute;
  bottom:15%;
  right:39%;
  z-index:20;
  width:10%;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const InfoText = styled.div`
  width:100%;
  padding: 10px;

`
const InputText = styled.input`
  width:250px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
  margin-bottom:5px;
`
