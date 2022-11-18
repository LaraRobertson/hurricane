import React from "react"
import {connect, Head, styled, css} from "frontity"
import Switch from "@frontity/components/switch"
import ThiefPage1 from "./thiefPage1";
import ThiefPage2 from "./thiefPage2";




const Thief = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <Switch>
              <ThiefPage1 when={state.game.gamePageThief === "Intro - Thief"} />
              <ThiefPage2 when={state.game.gamePageThief === "Tybean Lower Porch (thief)"} />

            </Switch>
        </div>
    )
}

export default connect(Thief)
