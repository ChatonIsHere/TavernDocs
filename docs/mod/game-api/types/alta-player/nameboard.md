---
title: "NameBoard"
description: "Pooled floating board that shows a player's name, optional title and member status shield above their head."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NameBoard

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Pooled floating board that shows a player's name, optional title and member status shield above their head. Spawned by the Show Names quick access action. Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ScaleLerpPooledObject`](/mod/game-api/types/global-s/scalelerppooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NameBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeemblem" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/nameboardemblem">{"NameBoardEmblem"}</Link>{" activeEmblem"}</code> | <span className="api-desc">The shield emblem currently shown, taken from the pool given to `Setup`.</span> |
| <Link id="m-friendcolor" /><code>{"private Color friendColor"}</code> | <span className="api-desc">Name colour for friends.</span> |
| <Link id="m-friendicon" /><code>{"private GameObject friendIcon"}</code> | <span className="api-desc">Icon object shown next to a friend's name.</span> |
| <Link id="m-friendprefix" /><code>{"private string friendPrefix"}</code> | <span className="api-desc">Text put before a friend's name (two spaces by default, to make room for the icon).</span> |
| <Link id="m-hasshieldtextwidth" /><code>{"private float hasShieldTextWidth"}</code> | <span className="api-desc">Text width meant for boards with a shield. Not read in this code.</span> |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> | <span className="api-desc">Pooled effect definition. Not used in this code.</span> |
| <Link id="m-nonfriendcolor" /><code>{"private Color nonFriendColor"}</code> | <span className="api-desc">Name colour for players who aren't friends.</span> |
| <Link id="m-noshieldtextwidth" /><code>{"private float noShieldTextWidth"}</code> | <span className="api-desc">Text width meant for boards without a shield. Not read in this code.</span> |
| <Link id="m-notitlenameheight" /><code>{"private float noTitleNameHeight"}</code> | <span className="api-desc">Local height of the name text when there is no title.</span> |
| <Link id="m-notitlenamescale" /><code>{"private float noTitleNameScale"}</code> | <span className="api-desc">Maximum name text scale when there is no title.</span> |
| <Link id="m-shieldparent" /><code>{"private Transform shieldParent"}</code> | <span className="api-desc">Transform the shield emblem is parented to.</span> |
| <Link id="m-titlerenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" titleRenderer"}</code> | <span className="api-desc">Text renderer for the title line.</span> |
| <Link id="m-usernamerenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" userNameRenderer"}</code> | <span className="api-desc">Text renderer for the user name.</span> |
| <Link id="m-withtitlenameheight" /><code>{"private float withTitleNameHeight"}</code> | <span className="api-desc">Local height of the name text when a title is shown.</span> |
| <Link id="m-withtitlenamescale" /><code>{"private float withTitleNameScale"}</code> | <span className="api-desc">Maximum name text scale when a title is shown.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentusername" /><code>{"string CurrentUserName { get; private set; }"}</code> | <span className="api-desc">The user name last passed to `Setup`, without the friend prefix.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Lets the active emblem play its close first, then releases the board.</span> |
| <Link id="m-setup" /><code>{"void Setup(string userName, bool isFriend, string title = \"\", "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shieldDefinition = null)"}</code> | <span className="api-desc">Shows a name, friend colour and icon, optional title and optional shield emblem. Moves and scales the name depending on whether there is a title.</span> |
| <Link id="m-updatefriendship" /><code>{"void UpdateFriendship(bool isFriend)"}</code> | <span className="api-desc">Redraws the name with friend or non-friend colour and prefix, and updates the friend icon.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Clears the text and shield, then runs the base pooled object setup.</span> |
| <Link id="m-fadefinished" /><code>{"protected override void FadeFinished()"}</code> | <span className="api-desc">Clears the board once its fade out finishes, then runs the base handling.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Empties the name and title text and releases the shield emblem.</span> |
| <Link id="m-clearshield" /><code>{"private void ClearShield()"}</code> | <span className="api-desc">Releases the active shield emblem back to its pool, if any.</span> |
| <Link id="m-setupfriendicon" /><code>{"private void SetupFriendIcon(bool isFriend)"}</code> | <span className="api-desc">Shows or hides the friend icon and places it at the end of the name text.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NameBoard`:

<div className="api-used-in">

[`ShowNames.NameBoardHandler.nameBoard`](/mod/game-api/types/alta-player/shownames-nameboardhandler#m-nameboard).

</div>
