---
title: "NameBoard"
description: "class NameBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NameBoard

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ScaleLerpPooledObject`](/game-api/types/global-s/scalelerppooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NameBoard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeemblem" /><code>{"private "}<Link to="/game-api/types/alta-player/nameboardemblem">{"NameBoardEmblem"}</Link>{" activeEmblem"}</code> |  |
| <Link id="m-friendcolor" /><code>{"private Color friendColor"}</code> |  |
| <Link id="m-friendicon" /><code>{"private GameObject friendIcon"}</code> |  |
| <Link id="m-friendprefix" /><code>{"private string friendPrefix"}</code> |  |
| <Link id="m-hasshieldtextwidth" /><code>{"private float hasShieldTextWidth"}</code> |  |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> |  |
| <Link id="m-nonfriendcolor" /><code>{"private Color nonFriendColor"}</code> |  |
| <Link id="m-noshieldtextwidth" /><code>{"private float noShieldTextWidth"}</code> |  |
| <Link id="m-notitlenameheight" /><code>{"private float noTitleNameHeight"}</code> |  |
| <Link id="m-notitlenamescale" /><code>{"private float noTitleNameScale"}</code> |  |
| <Link id="m-shieldparent" /><code>{"private Transform shieldParent"}</code> |  |
| <Link id="m-titlerenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" titleRenderer"}</code> |  |
| <Link id="m-usernamerenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" userNameRenderer"}</code> |  |
| <Link id="m-withtitlenameheight" /><code>{"private float withTitleNameHeight"}</code> |  |
| <Link id="m-withtitlenamescale" /><code>{"private float withTitleNameScale"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentusername" /><code>{"string CurrentUserName { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup(string userName, bool isFriend, string title = \"\", "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shieldDefinition = null)"}</code> |  |
| <Link id="m-updatefriendship" /><code>{"void UpdateFriendship(bool isFriend)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |  |
| <Link id="m-clearshield" /><code>{"private void ClearShield()"}</code> |  |
| <Link id="m-fadefinished" /><code>{"protected override void FadeFinished()"}</code> |  |
| <Link id="m-setupfriendicon" /><code>{"private void SetupFriendIcon(bool isFriend)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NameBoard`:

[`ShowNames.NameBoardHandler.nameBoard`](/game-api/types/alta-player/shownames-nameboardhandler#m-nameboard).
