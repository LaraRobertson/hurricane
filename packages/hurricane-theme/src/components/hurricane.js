import React from "react"
import {connect, Head, styled, css} from "frontity"
import Switch from "@frontity/components/switch"
import HurricanePage1 from "./hurricanePage1";
import HurricanePage2 from "./hurricanePage2";
import HurricanePage3 from "./hurricanePage3";
import HurricanePage4 from "./hurricanePage4";
import HurricanePage5 from "./hurricanePage5";
import HurricanePage6 from "./hurricanePage6"
import HurricanePage7 from "./hurricanePage7";
import HurricanePage8 from "./hurricanePage8";
import HurricanePage9 from "./hurricanePage9";
import HurricanePage10 from "./hurricanePage10";



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
              <HurricanePage1 when={state.game.gamePage === "Intro"} />
              <HurricanePage2 when={state.game.gamePage === "Tybean Lower Porch"} />
              <HurricanePage3 when={state.game.gamePage === "Jaycee Park - Shelter - Intro"} />
              <HurricanePage4 when={state.game.gamePage === "Jaycee Park - Shelter"} />
              <HurricanePage5 when={state.game.gamePage === "Jaycee Park - Gazebo - Intro"} />
              <HurricanePage6 when={state.game.gamePage === "Jaycee Park - Gazebo"} />
              <HurricanePage7 when={state.game.gamePage === "Small Dog Park - Intro"} />
              <HurricanePage8 when={state.game.gamePage === "Small Dog Park"} />
              <HurricanePage9 when={state.game.gamePage === "Hucapoos - Intro"} />
              <HurricanePage10 when={state.game.gamePage === "Hucapoos"} />


            </Switch>
        </div>
    )
}

export default connect(Hurricane)
