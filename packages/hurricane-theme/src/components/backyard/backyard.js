import React from "react"
import {connect, Head, styled, css} from "frontity"
import Switch from "@frontity/components/switch"
import BackyardIntro from "./backyardIntro";
import BackyardPage from "./backyardPage";


const Hurricane = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <Switch>
                <BackyardIntro when={state.game.gamePageBY === "Backyard - Intro"} />
                <BackyardPage when={state.game.gamePageBY === "Backyard - Game"} />
            </Switch>
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
const ImageHolder = styled.div`
  position:relative;
  height:300px;
  border: 1px solid red;
`
const BackPackHolderSmall = styled.div`
  position:relative;
  height:30px;
  margin-bottom:20px;
`
const BackPackHolderBig = styled.div`
  position:relative;
  max-width: 800px;
  height:300px;
  margin-bottom:20px;
  display: ${ props => props.isVisible ? 'block' : 'none'};
`
const Image1 = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  position:absolute;
  top:0;
  right:0;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const Image2 = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  position:absolute;
  top:0;
  left:0;


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
  top:0;
  left:30px;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BackpackSmall= styled.div`
  max-width: 800px;
  width:30px;
  height:30px;
  margin: auto;
  position:absolute;
  top:0;
  right:30px;
  border: 1px solid blue;


  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`
const BackpackBig= styled.div`
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
const Button = styled.button`
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  
  :hover {
    cursor: pointer;
    background-color: #555;
  }
`