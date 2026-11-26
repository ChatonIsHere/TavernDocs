---
title: "CharacterInfo"
description: "Shortcuts to a player's controller, head, hands and interactors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterInfo

A **class** in `Root.Township`, the global namespace.

Shortcuts to a player's controller, head, hands and interactors. Each `PlayerController` makes one as `Info`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterInfo("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Creates a `CharacterInfo` from `controller`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Controller { get; }"}</code> | <span className="api-desc">The player controller this describes.</span> |
| <Link id="m-head" /><code>{"Transform Head { get; }"}</code> | <span className="api-desc">The head transform.</span> |
| <Link id="m-islocal" /><code>{"bool IsLocal { get; }"}</code> | <span className="api-desc">True for the local player.</span> |
| <Link id="m-leftcontroller" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" LeftController { get; private set; }"}</code> | <span className="api-desc">The left hand controller. Set by `Initialize`.</span> |
| <Link id="m-leftinteractor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" LeftInteractor { get; private set; }"}</code> | <span className="api-desc">The left hand interactor. Set by `Initialize`.</span> |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | <span className="api-desc">The network player.</span> |
| <Link id="m-rightcontroller" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" RightController { get; private set; }"}</code> | <span className="api-desc">The right hand controller. Set by `Initialize`.</span> |
| <Link id="m-rightinteractor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" RightInteractor { get; private set; }"}</code> | <span className="api-desc">The right hand interactor. Set by `Initialize`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Caches the left and right controllers and interactors.</span> |

## Used in

Members of other types that take, return or hold a `CharacterInfo`:

<div className="api-used-in">

[`Controller.CharacterInfo`](/mod/game-api/types/global-c-d/controller#m-characterinfo), [`ControllerExtension.CharacterInfo`](/mod/game-api/types/global-c-d/controllerextension#m-characterinfo), [`PlayerController.Info`](/mod/game-api/types/global-p/playercontroller#m-info).

</div>
