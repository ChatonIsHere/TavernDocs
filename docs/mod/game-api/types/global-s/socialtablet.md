---
title: "SocialTablet"
description: "The social tablet item a player summons to see recent players and friend, mute, report or ban them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialTablet

A **class** in `Root.Township`, the global namespace.

The social tablet item a player summons to see recent players and friend, mute, report or ban them. Not saved; only its owner can grab it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ActionItem`](/mod/game-api/types/global-a-b/actionitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SocialTablet()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> | <span className="api-desc">Hover pickup used to hold the tablet in the air.</span> |
| <Link id="m-touchscreen" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase">{"TouchScreenMenuBase"}</Link>{" touchScreen"}</code> | <span className="api-desc">The tablet's touch screen menu.</span> |
| <Link id="m-window" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{" window"}</code> | <span className="api-desc">The UI window shown on the tablet.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishfadein" /><code>{"protected override void FinishFadeIn()"}</code> | <span className="api-desc">After fading in, starts the screen for the owner, or waits for the owner to be known.</span> |
| <Link id="m-startfade" /><code>{"protected override void StartFade(bool isFadingIn)"}</code> | <span className="api-desc">When fading out, turns off the touch screen and stops the window.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Marks the tablet not to be saved, limits grabs to the owner and sets up the recent player page's sync.</span> |
| <Link id="m-checkownership" /><code>{"private void CheckOwnership("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> | <span className="api-desc">Waits for the owner message, then starts the screen if the local player owns it.</span> |
| <Link id="m-filterforowner" /><code>{"private void FilterForOwner("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter that only lets the owning user grab the tablet.</span> |
| <Link id="m-hover" /><code>{"private void Hover("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When let go, sets the hover pickup to float it back to this spot if nothing else grabbed it.</span> |
| <Link id="m-startupforlocalplayer" /><code>{"private void StartupForLocalPlayer()"}</code> | <span className="api-desc">Sets up the touch screen and starts the window.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SocialTablet`:

<div className="api-used-in">

[`RecentPlayerActionPage.socialTablet`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-socialtablet).

</div>
