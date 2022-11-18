import React from "react"
import { connect, Global, css, styled, Head  } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Loading from "./loading"
import Error from "./error"
import Hurricane from "./hurricane";
import Backyard from "./backyard/backyard";
import Thief from "./thief/thief";
import Image from "@frontity/components/image";

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <Head>
                <title>Escape Out Games</title>
                <meta
                    name="description"
                    content="Go Outside and Play a Game!"
                />
            </Head>
            <Global
                styles={css`
                  * {
                    margin:0;
                    padding:0;
                    box-sizing: border-box;
                  }
                  body {
                    background: #f7f7f7;
                    padding: 0 10px;
                  }
                  html {
                    font-family: Helvetica, system-ui, Verdana, Arial, sans-serif;
                  }
                  .wp-block-columns {
                    display:flex;
                    align-items: center;
                    justify-content: flex-start;
                  }
                  .wp-block-column {
                    padding:10px;
                  }
                  .wp-block-column-intro {
                    padding:10px;
                    min-width:70px;
                  }
                  .input-column2 {
                    width:150px;
                  }
                  .backpack-button {
                    width:100px;
                  }
 
                  .link {
                    font-size:20px;
                    font-weight:bold;
                    color:#004C09;}
                  .link:hover {
                    text-decoration: underline;
                  }
                  .font-small {
                    font-size:.9em;
                  }
                  .italics {
                    font-style: italic;
                  }
                  .green {
                    color:green;
                  }
                  .red {
                    color:red;
                  }
                  .button {
                      background-color: #4CAF50; 
                      border: 1px solid black;
                      color: white;
                      padding: 15px 32px;
                      text-align: center;
                      text-decoration: none;
                      display: inline-block;
                      font-size: 16px;
                      margin-right:20px;
                      }
                  .button-small {
                      background-color: #4CAF50; 
                      border: 1px solid black;
                      color: white;
                      padding: 5px 12px;
                      text-align: center;
                      text-decoration: none;
                      display: inline-block;
                      font-size: 12px;
                      margin: 10px 20px 10px 0;
                      }
                  .button:hover, .button-small:hover {
                    cursor: pointer;
                    background-color: #555;
                  }

                  .button2 {
                      background-color: #4CAF50; 
                      border: 1px solid black;
                      color: white;
                      padding: 5px;
                      text-align: center;
                      text-decoration: none;
                      font-size: 12px;
                      position: absolute;
                      top:0px;
                      right:20px;
                      }
  
                  .button2:hover {
                    cursor: pointer;
                    background-color: #555;
                  }         
                  .button3 {
                    left:30px;
                    right:auto;         
                  }
                  .close-button {
                    background-color: transparent;
                    color: #325A42;
                    border: 1px solid black;
                    padding: 3px;
                    margin-bottom: 15px;
                    position:absolute;
                    top:10px;
                    right:20px;
                    font-size:20px;
                  }
                  .exit-button {
                    margin-bottom: 15px;
                    margin-right:20px;
                    top:10px;
                    left:10px;
                    border:none;
                    background-color:transparent;
                  }
                  .action-button {
                    background-color: #0B4311;
                    color: #ffffff;
                    border: 1px solid black;
                    padding: 3px;
                    margin-bottom: 15px;
                  }
                  .hide {
                    display:none;
                  }
                  
            `}
            />
            <Header isPostType={data.isPostType} isPage={data.isPage}>
                <HeaderContent>
                    {
                        state.theme.isHeaderClosed  ? (
                            <div>
                            <button className="button2 button3 hide" onClick={actions.theme.toggleHeader}>open header</button>

                            </div>
                        ) : (
                            <div className="wp-block-columns">
                                <div><Link onClick={actions.theme.removeGame} link="/"><Image className="test" src="https://escapeoutgames.tybeewebdesign.com/wp-content/uploads/2022/02/logo-escapeout.png" /></Link></div>
                                <div><GameTitle>{state.game.gameName}</GameTitle></div>
                                <button className="button2 hide" onClick={actions.theme.toggleHeader}>close header</button>

                            </div>)
                    }

                </HeaderContent>
            </Header>
            <Main isClosedHeader={data.isPostType} isPage={data.isPage}>
                <Switch>
                    <Loading when={data.isFetching} />
                    <List when={data.isArchive} />
                    <Post when={data.isPost} />
                    <Hurricane when={state.game.gameName === "game: Hurricane"} />
                    <Backyard when={state.game.gameNameBY === "game: Backyard"} />
                    <Thief when={state.game.gameNameThief === "game: Thief"} />
                    <Page when={data.isPage} />

                    <Error when={data.isError} />
                </Switch>
            </Main>

                {
                    state.theme.isHeaderClosed  ? (
                        <div></div>
                    ) : (
                        <Footer> © 2022 EscapeOut.Games</Footer>)
                }
        </>
    )
}

export default connect(Root)

const Header = styled.header`
  background-color: #f7f7f7;
  border-width: 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'white' : 'lightseagreen' ) : 'white'};
`
const GameTitle = styled.h1`
display:inline-block;
  font-size:16px;
  font-weight:bold;
  color:#004C09;
  margin: 18px 0 0 20px;

`
const HeaderContent = styled.div`
  max-width: 800px;
  margin: 10px auto 10px auto;
`

const Main = styled.main`
  max-width: 800px;
  padding: 10px;
  background: ${ props => props.isClosedHeader ? ( props.isPage ? 'white' : 'lightseagreen' ) : 'white'};
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`
const Footer = styled.main`
  max-width: 800px;
  padding: 20px;
  margin: auto;
  background: #fff;`