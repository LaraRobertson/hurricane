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
                        <div className = "wp-block-columns">
                        {state.game.backpack.map((item) => {
                            return (

                                    <div className = "wp-block-column" key={item.key}>
                                    <img onClick={() => actions.theme.showItemContents(item.key)} className={item.key} src={item.src} />
                                    </div>

                            )
                        })}  </div>
                    </BackpackBig>
                </BackPackHolderBig>

                <SafeHolderBig isVisible={state.theme.is2ndSafeVisible} >
                    <SafeBig>
                        <button className="close-button" onClick={actions.theme.toggle2ndSafe}>X</button>
                <FormGame>
                    <div>Try to Open Safe!</div>
                    <br />
                    <Input1 type="number" id="game1Num1Page4" value={state.game.game1NumPage4guess.game1Num1Page4} onChange={ actions.theme.setGame1Num1Page4 }/>
                    <Input2 type="number" id="game1Num2Page4" value={state.game.game1NumPage4guess.game1Num2Page4} onChange={ actions.theme.setGame1Num2Page4 }/>
                    <Input1 type="number" id="game1Num3Page4" value={state.game.game1NumPage4guess.game1Num3Page4} onChange={ actions.theme.setGame1Num3Page4 }/>
                    <Input2 type="number" id="game1Num4Page4" value={state.game.game1NumPage4guess.game1Num4Page4} onChange={ actions.theme.setGame1Num4Page4 }/>
                    <Input1 type="number" id="game1Num5Page4" value={state.game.game1NumPage4guess.game1Num5Page4} onChange={ actions.theme.setGame1Num5Page4 }/>

                    <br /><br /><br />


                    {
                        state.theme.isGame1Page4Wrong && state.theme.haveGuessedGame1Page4  ? (
                            <div>Wrong Number!</div>

                        ) : (<div></div>)
                    }
                    {
                        !state.theme.isGame1Page4Wrong && state.theme.haveGuessedGame1Page4  ? (
                            <div>Right Number!<br />
                            <PryBar onClick={actions.theme.PryBar}  isVisible={state.theme.isPryBarVisible}>
                                <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/prybar.png" />
                            </PryBar>
                            </div>

                        ) : (<div></div>)
                    }
                </FormGame>
                        </SafeBig>
                </SafeHolderBig>
                <CementHolderBig isVisible={state.theme.isCementSafeLockOpen} >
                    <CementBig>
                        <button className="close-button" onClick={actions.theme.toggleOpenCementSafeLock}>X</button>
                        <FormGame>

                            <div className="wp-block-columns">
                                <div className="wp-block-column">
                                   Try to Open Secret Storage!
                                <br />
                                <Input1 type="number" id="game2Num1Page4" value={state.game.game2NumPage4guess.game2Num1Page4} onChange={ actions.theme.setGame2Num1Page4 }/>
                                <Input1 type="number" id="game2Num2Page4" value={state.game.game2NumPage4guess.game2Num2Page4} onChange={ actions.theme.setGame2Num2Page4 }/>
                                <Input1 type="number" id="game2Num3Page4" value={state.game.game2NumPage4guess.game2Num3Page4} onChange={ actions.theme.setGame2Num3Page4 }/>
                                <Input1 type="number" id="game2Num4Page4" value={state.game.game2NumPage4guess.game2Num4Page4} onChange={ actions.theme.setGame2Num4Page4 }/>

                                <br /><br />
                                    {
                                        state.theme.isGame2Page4Wrong && state.theme.haveGuessedGame2Page4  ? (
                                            <div>Wrong Number!</div>
                                        ) : (<div></div>)
                                    }
                                    {
                                        !state.theme.isGame2Page4Wrong && state.theme.haveGuessedGame2Page4  ? (
                                            <div>Right Number!</div>
                                        ) : (<div></div>)
                                    }
                                </div>
                                <div className="wp-block-column">
                                    <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/codeforcement.png" />

                                </div>
                            </div>


                        </FormGame>
                    </CementBig>
                </CementHolderBig>
                <SafeHolderSmall>
                    <SafeSmall onClick={actions.theme.toggle2ndSafe}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/safe.png" /></SafeSmall>
                </SafeHolderSmall>

                <InfoHolderSmall>
                    <InfoSmall onClick={actions.theme.toggleInfo}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" /></InfoSmall>
                </InfoHolderSmall>

                <TableHolderBig isVisible={state.theme.isTableVisible}>
                    <TableBig>
                        <button className = "close-button" onClick={actions.theme.toggleTable}>X</button>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/table-message-close.png" />
                    </TableBig>
                </TableHolderBig>
                <SignHolderBig isVisible={state.theme.is2ndSignVisible}>
                    <SignBig>
                        <button className = "close-button" onClick={actions.theme.toggle2ndSign}>X</button>
                        <h3>Sign on Roof</h3>
                        <br />
                        <div>I am an odd number. Take away a letter and I become even.</div>
                    </SignBig>
                </SignHolderBig>
                <SignHolderBig isVisible={state.theme.isCementSandbagMessageVisible}>
                    <SignBig>
                        <button className = "close-button" onClick={actions.theme.toggleSandbagMessage}>X</button>
                        <h3>Sandbag Message</h3>
                        <br />
                        You will need to find some way to transport these sandbags!
                        <br /><br />
                        Next stop is at Jaycee Park Gazebo<br /><br />
                        <button className="button" onClick={actions.theme.goToPage5}>Click here for picture of stop 3</button>
                    </SignBig>
                </SignHolderBig>
                <HangingSign onClick={actions.theme.toggle2ndSign}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/hanging-sign.png" />
                </HangingSign>
                <TableWithDiscs>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/table-with-discs.png" />
                </TableWithDiscs>
                <TableWithBottles>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/table-with-bottles.png" />
                </TableWithBottles>
                <TableWithBalls>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/table-with-balls.png" />
                </TableWithBalls>
                <TornDiaryPage onClick={actions.theme.toggleTornDiary}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/torndiarypage.png" />
                </TornDiaryPage>
                <Switch>
                    <CementSafe1 when={state.theme.isPrybarOn === true  && state.theme.isCementSafeOpen === false && state.theme.isGame2Page4Wrong === true} onClick={actions.theme.toggleOpenCementSafe}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/cementsafe1.png" />
                    </CementSafe1>
                    <CementSafe1 when={state.theme.isPrybarOn === false}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/cementsafe1.png" />
                    </CementSafe1>
                    <CementSafe1 when = {state.theme.isCementSafeOpen === true && state.theme.isGame2Page4Wrong === true} onClick={actions.theme.toggleOpenCementSafeLock}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/cementsafeopen.png" />
                    </CementSafe1>
                    <CementSafe1 when = {state.theme.isGame2Page4Wrong === false} onClick={actions.theme.toggleSandbagMessage}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/cementsafeopensandbags.png" />
                    </CementSafe1>
                </Switch>

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
                        &nbsp; | {state.game.gameName} -> <Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage1}>Intro</Link> | <Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage2}>Tybean (stop 1)</Link> | {state.game.gamePage} (stop 2)
                        </div><br />
                        <strong>How to Play:</strong> Click around - some items will disappear and then appear in your backpack.  If it is in your backpack you may be able to use it by clicking on it.
                        <br /><button className="button-small" onClick={actions.theme.toggleFact2}>Read History again</button>
                        <button className="button-small" onClick={actions.theme.toggleMapDetails}>Show Map</button><br />
                        <strong>Goal for this stop:</strong> find the numbers for the safe.
                        <br />
                        <button className="button-small" onClick={actions.theme.toggleHint1}>Hint (order of numbers for safe)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint2}>Hint (this sign)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint3}>Hint (slots - how many)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint4}>Hint (safe in cement)</button>
                        <br />
                        <HintHolder isVisible={state.theme.isHint1Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint1}>X</button>
                            <strong>Hint for orders of numbers clue:</strong>
                            <br /><br />You need 5 numbers to open safe.  The note has 5 things underlined.
                            Each thing represents a number with <strong>"this sign"</strong> being the first number<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint2Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint2}>X</button>
                            <strong>Hint for "this sign":</strong> <br /><br />It's a riddle but think about how you spell the odd number.<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint3Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint3}>X</button>
                            <strong>Hint for slots:</strong> There is a grill to the south (in direction of parking lot) it has slots on the sides:
                            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/slot-pic.jpg"/>


                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint4Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint4}>X</button>
                            <strong>Hint for safe in cement:</strong>
                            <br /><br />These things are all around - the swings and slides in playground, the
                            windows on the building that has the bathrooms, the closest disc golf hole to the shelter.<br /><br />

                        </HintHolder>
                        <Link onClick={actions.theme.toggleInfo} link="/hurricane">Close Info and Play</Link> | <Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>

                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
            <InfoHolderBig isVisible={state.theme.isFact2Visible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleFact2}>X</button>
                    <InfoText>
                        <div>
                            <strong>History</strong><br /><br />
                            The most recent hurricanes to hit Tybee Island were Irma in 2017 and Matthew in 2016.
                            Hurricane Matthew started off as a tropical storm but steadily strengthened and became a category 5
                            (maximum sustained winds of at least 156 mph) south of Florida. As it approached GA and SC -
                            the storm began to weaken. Even in its weakened state it produced wind gusts as high at 96 mph on
                            Tybee Island. Flooding was minimal but lots of wind damage to trees and roofs.
                            <br /><br />
                            Irma was a category 5 in the Caribbean but was downgraded to a tropical storm by the time it hit Tybee.
                            Irma created significantly worse flooding for Tybee than Matthew because of the way it hit the Island.
                            Irma approached from the southwest and the wind direction created an extremely high storm surge which caused
                            the high tides to pile.  The piling up caused most of the flooding. Fort Pulaski measured a high tide of 12 feet.

                        </div>
                        <br />
                        <button className="button" onClick={actions.theme.toggleFact2}>I get it!</button>



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
const RelativeDiv = styled.div`
  position:relative;
`
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
const TableWithDiscs = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:27%;
  left:10%;
  z-index:20;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const TableWithBottles = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom: 1%;
  left:13%;
  z-index:22;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const TableWithBalls= styled.div`
  max-width: 800px;
  padding:0;
  margin: auto;
  position:absolute;
  bottom:0%;
  right:20%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const HangingSign = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:38px;
  left:40%;
  z-index:20;
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
  bottom:22%;
  left:43%;
  z-index:25;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const PryBar = styled.div`
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
const CementSafe1 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  left:35%;
  top:80px;
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
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/jaycee-shelter-no-tables.png") top center / cover no-repeat;

`
const BackPackHolderSmall = styled.div`
  position:absolute;
  right:20px;
  font-size: 10px;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
`
const SafeHolderSmall = styled.div`
  position:absolute;
  top:15%;
  right:30%;
  margin-bottom:20px;
  cursor:pointer;
  z-index:102;
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
  z-index:103;
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
  z-index:105;
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/torndiarypage-big.png") #fff top left / auto no-repeat;
  
`

const CementHolderBig = styled.div`
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


const CementBig= styled.div`
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
  z-index:103;
`
const InfoHolderBig = styled.div`
  position:absolute;
  top:30px;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:350px;
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

const SafeSmall= styled.div`
  max-width: 800px;
  width:70px;
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
  border: 1px solid green;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const SignHolderBig = styled.div`
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
const SignBig= styled.div`
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