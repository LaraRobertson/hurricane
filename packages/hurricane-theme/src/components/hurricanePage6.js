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
            <ImageHolder isSolved={!state.theme.isGame1Page6Wrong && state.theme.haveGuessedGame1Page6}>
                <BackPackHolderSmall>
                    <BackpackSmall onClick={actions.theme.toggleBackpack} isBright={state.theme.backPackHasItems}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/backpack.png" />
                    </BackpackSmall>
                </BackPackHolderSmall>
                <DiaryHolderBig isVisible={state.theme.isTornDiaryInsideVisible}>
                    <DiaryBig>
                        <button className="close-button" onClick={actions.theme.toggleTornDiary}>X</button>
                     </DiaryBig>
                </DiaryHolderBig>

                <BackPackHolderBig isVisible={state.theme.isBackPackVisible}>
                    <BackpackBig>
                        <button className="close-button" onClick={actions.theme.toggleBackpack}>X</button>
                        <h3>Backpack Contents</h3><br />
                        <div className = "wp-block-columns" >
                        {state.game.backpack.map((item) => {
                            return (

                                    <div className = "wp-block-column" key={item.key}>
                                    <img onClick={() => actions.theme.showItemContents(item.key)} className={item.key} src={item.src} />
                                    </div>

                            )
                        })}                                </div>
                    </BackpackBig>
                </BackPackHolderBig>

                <SafeHolderBig isVisible={state.theme.is3rdSafeVisible} >
                    <SafeBig>
                        <button className="close-button" onClick={actions.theme.toggle3rdSafe}>X</button>
                <FormGame>
                    <div>Try to Open Safe!</div>
                    <br />
                    6 letters: <Input3 type="text" id="game1LettersPage6" value={state.game.game1NumPage6guess.game1LettersPage6} onChange={ actions.theme.setGame1LettersPage6 }/>

                    <br /><br />
                    Numbers:
                    <Input1 type="number" id="game1Num1Page6" value={state.game.game1NumPage6guess.game1Num1Page6} onChange={ actions.theme.setGame1Num1Page6 }/>
                    <Input2 type="number" id="game1Num2Page6" value={state.game.game1NumPage6guess.game1Num2Page6} onChange={ actions.theme.setGame1Num2Page6 }/>
                    <Input1 type="number" id="game1Num3Page6" value={state.game.game1NumPage6guess.game1Num3Page6} onChange={ actions.theme.setGame1Num3Page6 }/>
                    <Input2 type="number" id="game1Num4Page6" value={state.game.game1NumPage6guess.game1Num4Page6} onChange={ actions.theme.setGame1Num4Page6 }/>


                    <br /><br />


                    {
                        state.theme.isGame1Page6Wrong && state.theme.haveGuessedGame1Page6  ? (
                            <div>Wrong Number!</div>

                        ) : (<div></div>)
                    }
                    {
                        !state.theme.isGame1Page6Wrong && state.theme.haveGuessedGame1Page6  ? (
                            <div>Right Number!<br />
                                <Key onClick={actions.theme.Key}  isVisible={state.theme.isKeyVisible}>
                                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/key.png" />
                                </Key>
                            </div>

                        ) : (<div></div>)
                    }
                </FormGame>
                        </SafeBig>
                </SafeHolderBig>

                <RightBushClosed isVisible={!state.theme.isRightBushOpen}>
                    <BushSmall onClick={actions.theme.toggleRightBush}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/right-bush-closed.png" /></BushSmall>
                </RightBushClosed>
                <RightBushOpen isVisible={state.theme.isRightBushOpen}>
                    <BushSmall onClick={actions.theme.toggleRightBush}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/right-bush-open.png" /></BushSmall>
                </RightBushOpen>
                <RightBushOpenKeyhole isVisible={state.theme.isRightBushOpen}>
                    {
                        state.theme.isKeyOn  ? (
                            <BushSmall onClick={actions.theme.toggleSandbag2}>
                                <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/right-bush-keyhole.png" /></BushSmall>

                        ) : (<BushSmall>
                                <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/right-bush-keyhole.png" /></BushSmall>
                        )
                    }

                </RightBushOpenKeyhole>
                <LeftBushClosed isVisible={!state.theme.isLeftBushOpen}>
                    <BushSmall onClick={actions.theme.toggleLeftBush}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/left-bush-closed.png" /></BushSmall>
                </LeftBushClosed>
                <LeftBushOpen isVisible={state.theme.isLeftBushOpen}>
                    <BushSmall onClick={actions.theme.toggleLeftBush}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/left-bush-open.png" /></BushSmall>
                </LeftBushOpen>
                <LeftBushOpenSafe isVisible={state.theme.isLeftBushOpen}>
                    <BushSmall onClick={actions.theme.toggle3rdSafe}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/left-bush-open-safe.png" /></BushSmall>
                </LeftBushOpenSafe>
                <InfoHolderSmall>
                    <InfoSmall onClick={actions.theme.toggleInfo}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" /></InfoSmall>
                </InfoHolderSmall>
                <FloorPiece onClick={actions.theme.toggleFloorMessage}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/piece-of-floor.png" />
                </FloorPiece>
                <Sandbag2 isVisible={state.theme.isSandbag2Visible}  onClick={actions.theme.toggleSandbagMessage2}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/sandbags2.png" />
                </Sandbag2>
                <MoreInfoBig isVisible={state.theme.isFloorMessageVisible}>
                    <MoreInfoInsideBig>
                        <button className = "close-button" onClick={actions.theme.toggleFloorMessage}>X</button>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/piece-of-floor-big.png" />
                    </MoreInfoInsideBig>
                </MoreInfoBig>
                <MoreInfoBig isVisible={state.theme.isWordsVisible}>
                    <MoreInfoInsideBig>
                        <button className = "close-button" onClick={actions.theme.toggleWords}>X</button>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/words-big.png" />
                        <MessageInInfo>What Order?</MessageInInfo>
                    </MoreInfoInsideBig>
                </MoreInfoBig>
                <HangingWords onClick={actions.theme.toggleWords}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/words-small.png" />
                </HangingWords>
                <MoreInfoBig isVisible={state.theme.isCementSandbagMessage2Visible}>
                    <MoreInfoInsideBig>
                        <button className = "close-button" onClick={actions.theme.toggleSandbagMessage2}>X</button>
                        <h3>Sandbag Message</h3>
                        <br />
                        You will need to find some way to transport these sandbags!
                        <br /><br />
                        Next stop is at the Small Dog Park<br /><br />
                        <button className="button" onClick={actions.theme.goToPage7}>Click here for picture of stop 4.</button>
                    </MoreInfoInsideBig>
                </MoreInfoBig>


                <TornDiaryPage onClick={actions.theme.toggleTornDiary}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/torndiarypage.png" />
                </TornDiaryPage>


            </ImageHolder>
            <ImageHolderLandscape>
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
                        &nbsp; | {state.game.gameName} -> <Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage1}>Intro</Link> |
                            &nbsp;<Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage2}>stop 1</Link>&nbsp; |
                            &nbsp;<Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage4}>stop 2</Link>&nbsp; |
                            &nbsp;<strong>{state.game.gamePage} (stop 3)</strong>
                        </div><br />
                        <strong>How to Play:</strong> Click around - some items will disappear and then appear in your backpack.  If it is in your backpack you may be able to use it by clicking on it.
                        <br /><button className="button-small" onClick={actions.theme.toggleFact3}>Read More History again</button>
                        <button className="button-small" onClick={actions.theme.toggleMapDetails}>Show Map</button><br />
                        <strong>Goal for this stop:</strong> find the letters and numbers for the safe.
                        <br />
                        <button className="button-small" onClick={actions.theme.toggleHint1}>Hint (order of letters)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint2}>Hint (Matthews DOB)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint3}>Hint (girl scout troop)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint4}>Hint (Infantry)</button>
                        <br />
                        <HintHolder isVisible={state.theme.isHint1Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint1}>X</button>
                            <strong>Hint for orders of letters clue:</strong>
                            <br /><br />There are 6 words - each one has a Capital.  How do you find the order?  Go to the
                            historical signs at the path turn-off for the gazebo.  Those words are written near the bottom on the sign that has "Dorothy and Grace Jackson,
                            Lighthouse Keeper's Daughters" at the top.


                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint2Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint2}>X</button>
                            <strong>Hint for Matthews DOB:</strong> <br /><br />Go to the
                            historical signs at the path turn-off for the gazebo.  Look at the sign that has
                            a picture of General George C. Marshall and his wife Katherine at the top. Note the General Information for
                            Mrs. Frederick S. Matthews.<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint3Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint3}>X</button>
                            <strong>Hint for First Girl Scout Troop Here:</strong>
                            <br /><br />Go to the
                            historical signs at the path turn-off for the gazebo. The signs often mention what Troop # is the first Tybee Island based troop.

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint4Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint4}>X</button>
                            <strong>Hint for Infantry that erected girl scout hut:</strong>
                            <br /><br />Go to the
                            historical signs at the path turn-off for the gazebo.  Look closely at the picture with title "Regular Army Values the Girl Scouts".<br /><br />

                        </HintHolder>

                        <Link onClick={actions.theme.toggleInfo} link="/hurricane">Close Info and Play</Link> | <Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>

                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
            <InfoHolderBig isVisible={state.theme.isFact3Visible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleFact3}>X</button>
                    <InfoText>
                        <div>
                            <strong>More History</strong><br /><br />
                            One of the deadliest hurricanes in American history made landfall south of Tybee Island on August 27, 1893 - the Sea Island Hurricane. This storm had winds as high as 120 mph and a 16 foot storm surge (about a category 3).  The storm devastated the barrier islands of Georgia and South Carolina, killing over 2,000 people and left more than 3,000 homeless.
                            <br /><br />
                            A few days before this hurricane coastal communities were spared serious damage when another hurricane brushed
                            by on August 23rd.  But their relief was short-lived because reports indicated another hurricane was
                            sighted 500 miles southeast of Florida.  Warnings were spread by telegraph, word-of-mouth, and, in some
                            instances, by a new technology called the telephone.<br /><br />
                            Unfortunately, not all communities received the warning (including the Gullah and Geechee communities only
                            accessible by boat) and they were unprepared. Rain fell Saturday night and by Sunday morning there was a
                            lull in the storm but by Sunday afternoon rains lashed the coast. Sections of the rail from Savannah to
                            Tybee were buried under sand.  On Monday morning the storm began to pass and residents were able to assess the
                            damage.  Buildings, bridges, and other infrastructures were demolished up and down the Georgia and South
                            Carolina coasts. The Savannah to Tybee rail lines were uprooted and mangled. The people on the
                            low-lying barrier islands were hit hardest - their homes and farms were nearly wiped out.
                            <br /><br />It took another day or 2 to comprehend the devastation and death toll of over 2,000. It took residents and relief workers nearly 10 months to restore housing and food supplies to the Sea Islands.  Economic recovery took decades more.
                            <br /><br />
                            (georgiaencyclopedia.org)

                        </div>
                        <br />
                        <button className="button" onClick={actions.theme.toggleFact3}>I get it!</button>



                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
            <InfoHolderBig isVisible={state.theme.isMapDetailVisible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleMapDetails}>X</button>
                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/hurricane-route.png" />
                </InfoBig>
            </InfoHolderBig>
        </RelativeDiv>
    )
}

export default connect(Hurricane)
const HintHolder = styled.div`
  position:absolute;
  top:-1px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:-1px;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  padding:20px 30px 20px 20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:150;
  border:1px solid green;
`
const RelativeDiv = styled.div`
  position:relative;
`
const Key = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:0%;
  left:27%;
  z-index:30;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
  `
const MessageInInfo = styled.div`
    position:absolute;
    left: 300px;
    top: 30px;
`
const HangingWords = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:0;
  left:28%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const MoreInfoBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:110;
`
const MoreInfoInsideBig = styled.div`
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
const TornDiaryPage = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:2%;
  right:27%;
  z-index:25;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Input1 = styled.input`
  width:30px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`
const Input2 = styled.input`
  width:30px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`
const Input3 = styled.input`
  width:100px;
  border: 1px solid black;
  height:30px;
  font-size:20px;
`
const ImageHolderLandscape = styled.div`
  position:relative;
  height: calc(100vh - 60px);
  z-index:10;
  @media (min-width: 500px) {
    display: none;
  }
 
`
const ImageHolder = styled.div`
  position:relative;
  height: calc(100vh - 60px);
  max-height:400px;
  z-index:10;
  @media (max-width: 501px) {
    display: none;
  }
  background: ${ props => props.isSolved ? 'url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/jaycee-gazebo-wide.png") top center / cover no-repeat' : 'url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/jaycee-gazebo-wide.png") top center / cover no-repeat'};


`
const BackPackHolderSmall = styled.div`
  position:absolute;
  right:20px;
  font-size: 10px;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const FloorPiece = styled.div`
  position:absolute;
  left:42%;
  bottom:2%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Sandbag2 = styled.div`
  position:absolute;
  left:42%;
  bottom:0%;
  cursor:pointer;
  z-index:107;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const LeftBushClosed = styled.div`
  position:absolute;
  left:2%;
  bottom:2%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const LeftBushOpen = styled.div`
  position:absolute;
  left:2%;
  bottom:2%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const LeftBushOpenSafe = styled.div`
  position:absolute;
  left:2%;
  bottom:2%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:105;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const RightBushClosed = styled.div`
  position:absolute;
  right:2%;
  bottom:2%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const RightBushOpen = styled.div`
  position:absolute;
  right:2%;
  bottom:2%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const RightBushOpenKeyhole = styled.div`
  position:absolute;
  right:2%;
  bottom:2%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:105;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BushSmall= styled.div`
  max-width: 800px;
  width:178px;
  margin: auto;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const InfoHolderSmall = styled.div`
  position:absolute;
  right:-10px;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const BackPackHolderBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:110;
`
const DiaryHolderBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:110;
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/diarypage-big.png") #fff top left / auto no-repeat;
  
`



const SafeHolderBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:110;
`
const InfoHolderBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  min-height:350px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:103;
`

const BackpackSmall= styled.div`
  max-width: 800px;
  width:60px;
  height:78px;
  margin: auto;
  position:absolute;
  top:0;
  right:30px;
  padding-top:0px;
  text-align:center;
  border: ${ props => props.isBright ? '3px solid yellow' : 'none'};
  border-radius: 15px;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const InfoSmall= styled.div`
  max-width: 800px;
  margin: auto;
  width:50px;
  height:36px;
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
  z-index:110;


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
  position:relative;
  top:0;
  right:0;
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
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
  border: 1px solid green;
  z-index: 110;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const FormGame = styled.form`
    position:absolute;
    top:30px;
    left: 30px;
    height:200px;

    `

const InfoText = styled.div`
  width:100%;
  padding: 10px;

`