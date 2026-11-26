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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ScaleLerpPooledObject`](/game-api/types/global-s/scalelerppooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NameBoard()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeemblem" /><code>{"private "}<Link to="/game-api/types/alta-player/nameboardemblem">{"NameBoardEmblem"}</Link>{" activeEmblem"}</code> | The shield emblem currently shown, taken from the pool given to `Setup`. |
| <Link id="m-friendcolor" /><code>{"private Color friendColor"}</code> | Name colour for friends. |
| <Link id="m-friendicon" /><code>{"private GameObject friendIcon"}</code> | Icon object shown next to a friend's name. |
| <Link id="m-friendprefix" /><code>{"private string friendPrefix"}</code> | Text put before a friend's name (two spaces by default, to make room for the icon). |
| <Link id="m-hasshieldtextwidth" /><code>{"private float hasShieldTextWidth"}</code> | Text width meant for boards with a shield. Not read in this code. |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> | Pooled effect definition. Not used in this code. |
| <Link id="m-nonfriendcolor" /><code>{"private Color nonFriendColor"}</code> | Name colour for players who aren't friends. |
| <Link id="m-noshieldtextwidth" /><code>{"private float noShieldTextWidth"}</code> | Text width meant for boards without a shield. Not read in this code. |
| <Link id="m-notitlenameheight" /><code>{"private float noTitleNameHeight"}</code> | Local height of the name text when there is no title. |
| <Link id="m-notitlenamescale" /><code>{"private float noTitleNameScale"}</code> | Maximum name text scale when there is no title. |
| <Link id="m-shieldparent" /><code>{"private Transform shieldParent"}</code> | Transform the shield emblem is parented to. |
| <Link id="m-titlerenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" titleRenderer"}</code> | Text renderer for the title line. |
| <Link id="m-usernamerenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" userNameRenderer"}</code> | Text renderer for the user name. |
| <Link id="m-withtitlenameheight" /><code>{"private float withTitleNameHeight"}</code> | Local height of the name text when a title is shown. |
| <Link id="m-withtitlenamescale" /><code>{"private float withTitleNameScale"}</code> | Maximum name text scale when a title is shown. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentusername" /><code>{"string CurrentUserName { get; private set; }"}</code> | The user name last passed to `Setup`, without the friend prefix. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Lets the active emblem play its close first, then releases the board. |
| <Link id="m-setup" /><code>{"void Setup(string userName, bool isFriend, string title = \"\", "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shieldDefinition = null)"}</code> | Shows a name, friend colour and icon, optional title and optional shield emblem. Moves and scales the name depending on whether there is a title. |
| <Link id="m-updatefriendship" /><code>{"void UpdateFriendship(bool isFriend)"}</code> | Redraws the name with friend or non-friend colour and prefix, and updates the friend icon. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Clears the text and shield, then runs the base pooled object setup. |
| <Link id="m-fadefinished" /><code>{"protected override void FadeFinished()"}</code> | Clears the board once its fade out finishes, then runs the base handling. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Empties the name and title text and releases the shield emblem. |
| <Link id="m-clearshield" /><code>{"private void ClearShield()"}</code> | Releases the active shield emblem back to its pool, if any. |
| <Link id="m-setupfriendicon" /><code>{"private void SetupFriendIcon(bool isFriend)"}</code> | Shows or hides the friend icon and places it at the end of the name text. |

</details>

## Used in

Members of other types that take, return or hold a `NameBoard`:

[`ShowNames.NameBoardHandler.nameBoard`](/game-api/types/alta-player/shownames-nameboardhandler#m-nameboard).
