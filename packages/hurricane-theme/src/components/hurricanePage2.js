import React from "react"
import {connect, Head, styled, css} from "frontity"
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";

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
    <DiaryHolderBig isVisible={state.theme.isDiaryInsideVisible}>
        <DiaryBig>
            <button className="close-button" onClick={actions.theme.toggleDiary}>X</button>
            <DiaryContent>Dear Diary, <br /><br />We need to find my sandbags! <br /><br />I need to finish my coffee before I go. I'm going to have 2 coffees.<br/><br/>
                <span className = "italics">(Red = 1)</span> </DiaryContent>
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
                    })}</div>
                </BackpackBig>
            </BackPackHolderBig>

            <SafeHolderBig isVisible={state.theme.isSafeVisible} >
                <SafeBig>
                    <button className="close-button" onClick={actions.theme.toggleSafe}>X</button>
            <FormGame>
                <br /><br />
                <div>Try to Open Safe!</div>
                <br />
                <Input1 type="number" id="game1Num1Page2" value={state.game.game1NumPage2guess.game1Num1Page2} onChange={ actions.theme.setGame1Num1Page2 }/>
                <Input2 type="number" id="game1Num2Page2" value={state.game.game1NumPage2guess.game1Num2Page2} onChange={ actions.theme.setGame1Num2Page2 }/>
                <Input1 type="number" id="game1Num3Page2" value={state.game.game1NumPage2guess.game1Num3Page2} onChange={ actions.theme.setGame1Num3Page2 }/>
                <Input2 type="number" id="game1Num4Page2" value={state.game.game1NumPage2guess.game1Num4Page2} onChange={ actions.theme.setGame1Num4Page2 }/>
                <Input1 type="number" id="game1Num5Page2" value={state.game.game1NumPage2guess.game1Num5Page2} onChange={ actions.theme.setGame1Num5Page2 }/>

                <br /><br />(<span className = "italics">order of numbers is clockwise starting east</span>)<br />


                {
                    state.theme.isGame1Page2Wrong && state.theme.haveGuessedGame1Page2  ? (
                        <div>Wrong Number!</div>
                    ) : (<div></div>)
                }
                {
                    !state.theme.isGame1Page2Wrong && state.theme.haveGuessedGame1Page2  ? (
                        <div>Right Number!<br /><br />Next stop is at Jaycee Park.<br /><br />
                        <button className="button" onClick={actions.theme.goToPage3}>Click here for picture of stop 2</button></div>
                    ) : (<div></div>)
                }
            </FormGame>
                    </SafeBig>
            </SafeHolderBig>
    <SafeHolderSmall>
        <SafeSmall onClick={actions.theme.toggleSafe}>
            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/safe.png" /></SafeSmall>
    </SafeHolderSmall>

    <InfoHolderSmall>
        <InfoSmall onClick={actions.theme.toggleInfo}>
            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" /></InfoSmall>
    </InfoHolderSmall>
            <Image1 onClick={actions.theme.toggleTable}>
                <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/red-table-4-chairs-message.png" />
            </Image1>
    <TableHolderBig isVisible={state.theme.isTableVisible}>
        <TableBig>
            <button className = "close-button" onClick={actions.theme.toggleTable}>X</button>
            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/table-message-close.png" />
        </TableBig>
    </TableHolderBig>
    <SignHolderBig isVisible={state.theme.isSignVisible}>
        <SignBig>
            <button className = "close-button" onClick={actions.theme.toggleSign}>X</button>
            <h3>Sign on Tree</h3>
            <br />
            <div>Name of store just south of here.  <br /><br /><strong>What is 25% off?</strong></div>
        </SignBig>
    </SignHolderBig>
                <Image2 onClick={actions.theme.toggleSign}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/tree-with-sign.png" />
                </Image2>
                <Image4>
                    <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/05/palmtreenew.png"/>
                </Image4>
    <Image5>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/back-picnic-table.png"/>
    </Image5>

    <NumBus isVisible={state.theme.isNumBusVisible}  onClick={actions.theme.toggleNumBus}>
        <div># businesses at Tybee Oaks<br /> - not coffee & pizza</div>
    </NumBus>
    <Image6>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/treecircle.png"/>
    </Image6>
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
        <div># of real wood trees here on lower porch</div>
    </Legs>
                        <Image3 onClick={actions.theme.toggleDiary}>
                            <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/diary.png" />
                        </Image3>

                {
                    state.theme.isLightVisible ? (
                        <Image9 onClick={actions.theme.backpackLight}>
                            <Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/blacklight.png" />
                        </Image9>
                    ) : (
                        <Image9 >
                        </Image9>
                    )
                }
    <SafeHolderBig isVisible={state.theme.isNotesVisible} >
        <SafeBig>
            <button className="close-button" onClick={actions.theme.toggleNotes}>X</button>
            <FormGame>
                <div>Take some notes</div>
                <br />
                <InputTextArea type="textarea" id="Notes" value={state.game.notes} onChange={ actions.theme.setNotes}/>
            </FormGame>
        </SafeBig>
    </SafeHolderBig>
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
                        &nbsp; | {state.game.gameName} -> <Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage1}>Intro</Link> | {state.game.gamePage} (stop 1)
                        </div><br />
                        <strong>How to Play:</strong> Click around - some items will disappear and then appear in your backpack.  If it is in your backpack you may be able to use it by clicking on it.
                        <br /><button className="button-small" onClick={actions.theme.toggleFact1}>Read Hurricane Watch again</button>
                        <button className="button-small" onClick={actions.theme.toggleMapDetails}>Show Map</button><br />
                        <strong>Goal for this stop:</strong> find the numbers for the safe.<br />
                        <button className="button-small" onClick={actions.theme.toggleHint1}>Hint (order of numbers for safe)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint2}>Hint (25% off)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint3}>Hint (trees)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint4}>Hint (RED)</button>
                        <br />

                        <HintHolder isVisible={state.theme.isHint1Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint1}>X</button>
                            <strong>Hint for orders of numbers clue:</strong>
                            <br /><br />You must know the actual north direction and then use that information to
                            determine which clue in app is the most north.
                            The answer to the clue that is most north is the first number for safe.<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint2Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint2}>X</button>
                            <strong>Hint for 25% off clue:</strong> <br /><br />The shop near Tybean (directly south) is called Lattitude 32 - what is 25% of 32?<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint3Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint3}>X</button>
                            <strong>Hint for trees:</strong>   <br /><br />How many trees are in the enclosed area of the Tybean Lower Porch.
                            The actual number, not shown in app.<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint4Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint4}>X</button>
                            <strong>Hint for Red(R):</strong>  <br /><br /> R represents Red and the puzzle is a math problem where R equals 1.  The other
                            letters are not relevant.<br /><br />

                        </HintHolder>
                        <Link onClick={actions.theme.toggleInfo} link="/hurricane">Close Info and Play</Link> | <Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>

                    </InfoText>
                </InfoBig>
            </InfoHolderBig>

            <InfoHolderBig isVisible={state.theme.isFact1Visible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleFact1}>X</button>
                    <InfoText>
                        <div>
                            <strong>Hurricane Watch</strong><br /><br />
                            You hear on the radio that Tybee is under a Hurricane Watch.
                            They say a hurricane watch means that a Hurricane is possible within 48 hours.<br /><br /> What is a
                            Hurricane?  It is an intense tropical weather system of strong
                            thunderstorms with a well defined surface circulation and maximum sustained winds of 74 mph or higher.
                            (cityoftybee.org)
                            <br /><br />
                            Storms and sea-level rise are a big threat to Tybee Island. Tybee City Manager says
                            “Our approach to dealing with sea-level rise is to defend. We put up dunes, we re-nourish the beach,
                            the size of the beach itself helps absorb the power of a storm surge”. (wsav.com)
                            <br /><br />
                            Another part of the defense can be strategically placing sandbags to protect small specific areas
                            from rising water.  You can use sandbags to protect your house and your friend’s houses.
                            You realize it is time to get your sandbags ready in case the hurricane hits Tybee.
                        </div>
                        <br />
                        <button className="button" onClick={actions.theme.toggleFact1}>I get it!</button>



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
  display: ${ props => props.isVisible ? 'block' : 'none'};
 
`
const ImageHolder = styled.div`
  position:relative;
  height: calc(100vh - 60px);
  max-height:400px;
  z-index:10;
  @media (max-width: 501px) {
    display: none;
  }
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/lower-porch-background.png") top center / cover no-repeat;

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
  top:0;
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
  top:0;
  max-width: 800px;
  width: calc(100vw - 40px);
  left:0;
  background-color:white;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
  z-index:105;
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/opendiary.png") #fff top left / auto no-repeat;
  
`
const DiaryContent = styled.div`
padding:30px;
  width:200px;
  
`
const SafeHolderBig = styled.div`
  position:absolute;
  top:0;
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
  top:0;
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
  top:0;
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
  top:0;
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


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const FormGame = styled.form`
    position:absolute;
    top:0;
    left: 30px;
    `
const Image1 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:37%;
  right:10%;
  z-index:22;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Image2 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom: 55%;
  left:25%;
  z-index:20;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`

const Image3= styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  position:absolute;
  top:20%;
  right:40%;
  z-index:20;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Image4 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:48%;
  left:10%;
  z-index:13;

`
const Image5 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:24%;
  right:33%;
  z-index:12;

`
const Image6 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:43%;
  left:22%;
  z-index:12;

`
const Image7 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:0%;
  left:15%;
  z-index:22;
 :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Image8 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:30%;
  left:0%;
  z-index:22;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Legs = styled.div`
  max-width: 800px;
  padding: 40px 0 0 30px;
  margin: auto;
  height: 129px;
  width:150px;
  position:absolute;
  font-size:12px;
  color: #FFE9EE;
  bottom:32%;
  left:0%;
  z-index:23;
  display: ${ props => props.isVisible ? 'block' : 'none'};

`
const NumBus = styled.div`
  max-width: 800px;
  padding: 10px 0 0 50px;
  margin: auto;
  height: 139px;
  width:257px;
  position:absolute;
  color: #FFE9EE;
  bottom:0%;
  left:16%;
  z-index:23;
  font-size:12px;
  display: ${ props => props.isVisible ? 'block' : 'none'};

`
const Image9= styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  position:absolute;
  bottom:15%;
  right:40%;
  z-index:20;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const InfoText = styled.div`
  width:100%;
  padding: 10px;

`
const InputTextArea = styled.textarea`
  width:700px;
  border: 1px solid black;
  height:200px;
  font-size:20px;
  margin-bottom:5px;
`