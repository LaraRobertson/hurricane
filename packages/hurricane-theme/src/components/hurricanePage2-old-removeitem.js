import React from "react"
import {connect, Head, styled, css} from "frontity"
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";
import Loading from "./loading";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Error from "./error";

const Hurricane = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
<ImageHolder>
            <BackPackHolderSmall>
                <BackpackSmall onClick={actions.theme.toggleBackpack} isBright={state.theme.backPackHasItems}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/backpack.png" />
                </BackpackSmall>
            </BackPackHolderSmall>
    <DiaryHolderBig isVisible={state.theme.isDiaryInsideVisible}>
        <DiaryBig>
            <button className="close-button" onClick={actions.theme.toggleDiary}>X</button>
            <DiaryContent>Dear Diary, <br /><br />We need to hide sandbags but where? I need to finish my coffee before I go. I'm going to have 2 coffees.<br/><br/>note: Clockwise starting North</DiaryContent>
        </DiaryBig>
    </DiaryHolderBig>

            <BackPackHolderBig isVisible={state.theme.isBackPackVisible}>
                <BackpackBig>
                    <button className="close-button" onClick={actions.theme.toggleBackpack}>X</button>
                    <h3>Backpack Contents</h3><br />

                    {state.game.backpack.map((item) => {
                        return (
                            <div className = "wp-block-columns" key={item.key}>
                                <div className = "backpack-button">
                                <button className="action-button" onClick={() => actions.theme.removeBackpackItem(item.key)}   >remove {item.key}</button>
                            </div>
                                <div className = "wp-block-column">
                                <img onClick={() => actions.theme.showItemContents(item.key)} className={item.key} src={item.src} />
                                </div>
                            </div>
                        )
                    })}
                </BackpackBig>
            </BackPackHolderBig>

            <SafeHolderBig isVisible={state.theme.isSafeVisible} >
                <SafeBig>
                    <button className="close-button" onClick={actions.theme.toggleSafe}>X</button>
            <FormGame>
                <div>Try to Open Safe!</div>
                <br />
                <Input1 type="number" id="game1Num1Page2" value={state.game.game1NumPage2guess.game1Num1Page2} onChange={ actions.theme.setGame1Num1Page2 }/>
                <Input2 type="number" id="game1Num2Page2" value={state.game.game1NumPage2guess.game1Num2Page2} onChange={ actions.theme.setGame1Num2Page2 }/>
                <Input1 type="number" id="game1Num3Page2" value={state.game.game1NumPage2guess.game1Num3Page2} onChange={ actions.theme.setGame1Num3Page2 }/>
                <Input2 type="number" id="game1Num4Page2" value={state.game.game1NumPage2guess.game1Num4Page2} onChange={ actions.theme.setGame1Num4Page2 }/>
                <Input1 type="number" id="game1Num5Page2" value={state.game.game1NumPage2guess.game1Num5Page2} onChange={ actions.theme.setGame1Num5Page2 }/>

                <br /><br /><br />


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
                <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/red-table-4-chairs-message.png" />
            </Image1>
    <TableHolderBig isVisible={state.theme.isTableVisible}>
        <TableBig>
            <button className = "close-button" onClick={actions.theme.toggleTable}>X</button>
            <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/table-message-close.png" />
        </TableBig>
    </TableHolderBig>
    <SignHolderBig isVisible={state.theme.isSignVisible}>
        <SignBig>
            <button className = "close-button" onClick={actions.theme.toggleSign}>X</button>
            <h3>Sign on Tree</h3>
            <br />
            <div>Name of store just south of here.  <br /><br /><strong>Take 25% off!</strong></div>
        </SignBig>
    </SignHolderBig>
                <Image2 onClick={actions.theme.toggleSign}>
                    <Image className="test" alt="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/tree-with-sign.png" />
                </Image2>
                <Image4>
                    <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/palmtreenew.png"/>
                </Image4>
    <Image5>
        <Image src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/back-picnic-table.png"/>
    </Image5>

    <NumBus isVisible={state.theme.isNumBusVisible}  onClick={actions.theme.toggleNumBus}>
        <div># businesses at Tybee Oaks<br /> - coffee & pizza</div>
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
        <h3># of Trees here</h3>
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
                        &nbsp; | {state.game.gameName} -> <Link className="link font-small" link="/hurricane" onClick={actions.theme.goToPage1}>Intro</Link> | {state.game.gamePage} (stop 1)
                        </div><br />
                        <strong>How to Play:</strong> Click around - some items will disappear and then appear in your backpack.  If it is in your backpack you may be able to use it by clicking on it.
                        <br /><br />
                        <strong>Goal for this stop:</strong> find the numbers for the safe.
                        <br /><br />
                        <Link onClick={actions.theme.toggleInfo} link="/hurricane">Close Info and Play</Link> | <Link onClick={actions.theme.resetGame} link="/">Reset and go Home</Link>

                    </InfoText>
                </InfoBig>
            </InfoHolderBig>
        </div>
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
  background: url("https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/opendiary.png") #fff top left / auto no-repeat;
  
`
const DiaryContent = styled.div`
padding:30px;
  width:200px;
  
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
  bottom: 41%;
  left:32%;
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
  top:17%;
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
  bottom:35%;
  left:15%;
  z-index:20;

`
const Image5 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  top:20%;
  right:33%;
  z-index:12;

`
const Image6 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:33%;
  left:27%;
  z-index:12;

`
const Image7 = styled.div`
  max-width: 800px;
  padding: 0;
  margin: auto;
  position:absolute;
  bottom:5%;
  left:0%;
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
  bottom:50%;
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
  bottom:50%;
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
  bottom:5%;
  left:0%;
  z-index:23;
  display: ${ props => props.isVisible ? 'block' : 'none'};

`
const Image9= styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  position:absolute;
  bottom:15%;
  right:50%;
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