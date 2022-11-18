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
                        <div className = "wp-block-columns" >
                        {state.game.backpack.map((item) => {
                            return (

                                    <div className = "wp-block-column" key={item.key}>
                                    <img onClick={() => actions.theme.showItemContents(item.key)} className={item.key} src={item.src} />
                                    </div>

                            )
                        })}</div>
                    </BackpackBig>
                </BackPackHolderBig>

                <SafeHolderBig isVisible={state.theme.is2ndSafeVisible} >
                    <SafeBig>
                        <button className="close-button" onClick={actions.theme.toggle2ndSafe}>X</button>
                <FormGame>
                    <div>EDF QZXQVNW PZFNW PNE & ZFT XDVNW</div>
                    <br />
                    <Input1 type="number" id="game1Num1Page8" value={state.game.game1NumPage8guess.game1Num1Page8} onChange={ actions.theme.setGame1Num1Page8 }/>
                    <Input2 type="number" id="game1Num2Page8" value={state.game.game1NumPage8guess.game1Num2Page8} onChange={ actions.theme.setGame1Num2Page8 }/>
                    <Input1 type="number" id="game1Num3Page8" value={state.game.game1NumPage8guess.game1Num3Page8} onChange={ actions.theme.setGame1Num3Page8 }/>
                    <Input2 type="number" id="game1Num4Page8" value={state.game.game1NumPage8guess.game1Num4Page8} onChange={ actions.theme.setGame1Num4Page8 }/>
                    <Input1 type="number" id="game1Num5Page8" value={state.game.game1NumPage8guess.game1Num5Page8} onChange={ actions.theme.setGame1Num5Page8 }/>

                    <br /><br /><br />


                    {
                        state.theme.isGame1Page8Wrong && state.theme.haveGuessedGame1Page8  ? (
                            <div>Wrong Number!</div>

                        ) : (<div></div>)
                    }
                    {
                        !state.theme.isGame1Page8Wrong && state.theme.haveGuessedGame1Page8  ? (
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

                <InfoHolderSmall>
                    <InfoSmall onClick={actions.theme.toggleInfo}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/info.png" /></InfoSmall>
                </InfoHolderSmall>

                <TableHolderBig isVisible={state.theme.isTableVisible}>
                    <TableBig>
                        <button className = "close-button" onClick={actions.theme.toggleTable}>X</button>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/petwastesignbig.png" />
                    </TableBig>
                </TableHolderBig>
                <SignHolderBig isVisible={state.theme.is2ndSignVisible}>
                    <SignBig>
                        <button className = "close-button" onClick={actions.theme.toggle2ndSign}>X</button>
                        <h3>Sign in Cylinder</h3>
                        <br />
                        <div>How Many Circles?</div>
                    </SignBig>
                </SignHolderBig>
                <SignHolderBig isVisible={state.theme.isCementSandbagMessage3Visible}>
                    <SignBig>
                        <button className = "close-button" onClick={actions.theme.toggleSandbagMessage3}>X</button>
                        <h3>Sandbag Message</h3>
                        <br />
                        You will need to find some way to transport these sandbags!
                        <br /><br />
                        Next stop is at Huc-A-Poos<br /><br />
                        <button className="button" onClick={actions.theme.goToPage9}>Click here for picture of stop 5</button>
                    </SignBig>
                </SignHolderBig>
                <HangingSign onClick={actions.theme.toggle2ndSign}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/tubewithhangingsign.png" />
                </HangingSign>
                <TableWithNote onClick={actions.theme.toggleTornDiary}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/table-with-note.png" />
                </TableWithNote>
                <OctagonalTable>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/octaganoltable.png" />
                </OctagonalTable>
                <PetWasteSign  onClick={actions.theme.toggleTable}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/petwastesign.png" />
                </PetWasteSign>
                <Switch>
                    <OakTreeBottom when={state.theme.isGame1Page8Wrong === true} onClick={actions.theme.toggle2ndSafe}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/oaktreebottom.png" />
                    </OakTreeBottom>
                    <OakTreeBottom when={state.theme.isGame1Page8Wrong === false && !state.theme.isButtonPressed} onClick={actions.theme.toggleButton}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/oaktreebottom-open.png" />
                    </OakTreeBottom>
                    <OakTreeBottom when={state.theme.isGame1Page8Wrong === false && state.theme.isButtonPressed} onClick={actions.theme.toggleButton}>
                        <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/oaktreebottom-pressed.png" />
                    </OakTreeBottom>
                </Switch>

                <CementSafe1 isVisible={!state.theme.isGame1Page8Wrong && state.theme.isButtonPressed}  onClick={actions.theme.toggleSandbagMessage3}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/03/cementsafeopensandbags.png" />
                </CementSafe1>

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
                            &nbsp;<Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage6}>stop 3</Link>&nbsp; |
                            &nbsp;<strong>{state.game.gamePage} (stop 4)</strong>
                        </div><br />
                        <strong>How to Play:</strong> Click around - some items will disappear and then appear in your backpack.  If it is in your backpack you may be able to use it by clicking on it.
                        <br />
                        <button className="button-small" onClick={actions.theme.toggleFact4}>Read Hurricane Warning again</button>
                        <button className="button-small" onClick={actions.theme.toggleMapDetails}>Show Map</button>
                        <br />
                        <strong>Goal for this stop:</strong> find the numbers for the safe.
                        <br />
                        <button className="button-small" onClick={actions.theme.toggleHint1}>Hint (Cipher for Safe)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint2}>Hint (Important Rules)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint3}>Hint (Circles)</button>
                        <button className="button-small" onClick={actions.theme.toggleHint4}>Hint (Cipher for Safe 2)</button>
                        <br />
                        <HintHolder isVisible={state.theme.isHint1Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint1}>X</button>
                            <strong>Hint Cipher for safe:</strong>
                            <br /><br />Click on Sign near gate.  The sign in app is the encrypted version of the real sign. Look at real
                            sign to decode cipher.

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint2Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint2}>X</button>
                            <strong>Hint for Important Rules:</strong> <br /><br />Important rules - abbreviation is imp.  Note sign at
                            entrance to park and the note what number these rules are.<br /><br />

                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint3Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint3}>X</button>
                            <strong>Hint for Circles:</strong>
                            <br /><br />The black tunnel appears to be a series of cylinders - count how many of these cylinders (or
                            circles there are).
                        </HintHolder>
                        <HintHolder isVisible={state.theme.isHint4Visible}>
                            <button className="close-button" onClick={actions.theme.toggleHint4}>X</button>
                            <strong>Hint for Cipher for Safe 2:</strong>
                            <br /><br />T = P and you get it like this: TNP = PET, SJWPN = WASTE, PXJEWFZPW = TRANSMITS.
                            The sign in app matches the real sign so you can decode cipher.
                        </HintHolder>

                        <Link onClick={actions.theme.toggleInfo} link="/hurricane">Close Info and Play</Link> | <Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>

                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
            <InfoHolderBig isVisible={state.theme.isFact4Visible} >
                <InfoBig>
                    <button className="close-button" onClick={actions.theme.toggleFact4}>X</button>
                    <InfoText>
                        <div>
                            <strong>Hurricane Warning</strong><br /><br />
                            The radio says it is now a Hurricane Warning.
                            <br />A hurricane warning means that a hurricane is expected in the area within 36 hours.
                            <br /><br />
                            Some steps to take to prepare for evacuation:
                            <br />1. Listen to radio, tv or NOAA for updates
                            <br />2. Make sure your vehicle has fuel
                            <br />3. Make sure your home is prepared - secure loose objects, cover windows with plywood or other protective materials
                            <br />4. Gather important documents to take with you
                            <br />5. Figure out evacuation route and where you will stay (including your pets)
                            <br /><br />
                            Find out more at https://www.cityoftybee.org/210/Hurricane-Information

                        </div>
                        <br />
                        <button className="button" onClick={actions.theme.toggleFact4}>I get it!</button>



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
const TableWithNote = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:20%;
  left:10%;
  z-index:22;

  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const OctagonalTable = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top: 15%;
  right:13%;
  z-index:22;
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
  top:0;
  right:40%;
  z-index:20;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const PetWasteSign = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:-5%;
  left:23%;
  z-index:25;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const OakTreeBottom = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:0;
  left:20%;
  z-index:20;
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
  display: ${ props => props.isVisible ? 'block' : 'none'};
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
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/dog-park-background.jpg") top center / cover no-repeat;

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
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/04/torndiarydogpark.png") #fff top left / auto no-repeat;
  
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