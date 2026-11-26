---
title: "RecipePlacer"
description: "Page dock on a chiselling deck that reads a ChiselDefinition recipe page and guides the player by pulsing the next piece to chisel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecipePlacer

A **class** in `Root.Township`, `Alta.Carpentry`.

Page dock on a chiselling deck that reads a `ChiselDefinition` recipe page and guides the player by pulsing the next piece to chisel. Client visuals only; on a headless server it does nothing.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Attributes** `RequireComponent`
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecipePlacer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blowuppiece" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" blowUpPiece"}</code> | Pooled effect spawned on each block piece when the recipe is broken. |
| <Link id="m-changepieceaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" changePieceAudio"}</code> | Sound played when the guide moves to the next piece. |
| <Link id="m-coroutinehandler" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutineHandler"}</code> | The running light coroutine, stopped before a new one starts. |
| <Link id="m-crystalcolorzerowronggradient" /><code>{"private Gradient crystalColorZeroWrongGradient"}</code> | Crystal `_ColorA` colour over the wrong-order flash. |
| <Link id="m-crystalemmisionworkinggradient" /><code>{"private Gradient crystalEmmisionWorkingGradient"}</code> | Crystal emission over one pulse cycle while guiding. |
| <Link id="m-crystalemmisionwronggradient" /><code>{"private Gradient crystalEmmisionWrongGradient"}</code> | Crystal emission over the wrong-order flash. |
| <Link id="m-crystallight" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" crystalLight"}</code> | Light on the crystal, off when idle. |
| <Link id="m-crystalmaterial" /><code>{"private Material crystalMaterial"}</code> | Instanced material shared by all crystal renderers. |
| <Link id="m-crystalrenderers" /><code>{"private Renderer[] crystalRenderers"}</code> | Renderers that share the instanced crystal material. |
| <Link id="m-currentpulsator" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" currentPulsator"}</code> | The pulse effect currently on the next piece, or null. |
| <Link id="m-deck" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> | The chiselling deck whose block this placer checks. |
| <Link id="m-fadeoutemmision" /><code>{"private Color fadeOutEmmision"}</code> | Crystal emission colour when faded out. |
| <Link id="m-lightpointer" /><code>{"private Transform lightPointer"}</code> | Transform that aims at the next piece and holds the pointer visual. |
| <Link id="m-lightpulsatingintensity" /><code>{"private AnimationCurve lightPulsatingIntensity"}</code> | Crystal light intensity over one pulse cycle while guiding. |
| <Link id="m-pagedock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pageDock"}</code> | The dock the recipe page goes into (on the same object). |
| <Link id="m-pointeralphaanimation" /><code>{"private AnimationCurve pointerAlphaAnimation"}</code> | Pointer alpha while it fades in or out. |
| <Link id="m-pointermaterial" /><code>{"private Material pointerMaterial"}</code> | Instanced pointer material. |
| <Link id="m-pointerrenderer" /><code>{"private Renderer pointerRenderer"}</code> | Pointer renderer under `lightPointer`, found at build time. |
| <Link id="m-pointershaderalpha" /><code>{"private readonly int pointerShaderAlpha"}</code> | Shader id for the pointer's `_TintColor`. |
| <Link id="m-pulsatordefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pulsatorDefinition"}</code> | Pooled pulse effect put on the next piece. Set to null on headless servers. |
| <Link id="m-pusatingperiod" /><code>{"private float pusatingPeriod"}</code> | Seconds per pulse cycle of the crystal light while guiding. |
| <Link id="m-shadercolorzero" /><code>{"private readonly int shaderColorZero"}</code> | Shader id for `_ColorA`. |
| <Link id="m-shaderemmision" /><code>{"private readonly int shaderEmmision"}</code> | Shader id for `_EmissionColor`. |
| <Link id="m-startworkingaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" startWorkingAudio"}</code> | Sound played when the guide starts on a block. |
| <Link id="m-stopworkingaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" stopWorkingAudio"}</code> | Sound played when the guide stops because the recipe was broken. |
| <Link id="m-warmupduration" /><code>{"private float warmUpDuration"}</code> | Seconds the warm-up and fade-out blends take. |
| <Link id="m-workinglightcolor" /><code>{"private Color workingLightColor"}</code> | Crystal light colour while guiding. |
| <Link id="m-wronglightcolor" /><code>{"private Color wrongLightColor"}</code> | Crystal light colour for the wrong-order flash. |
| <Link id="m-wrongpulse" /><code>{"private AnimationCurve wrongPulse"}</code> | Crystal light intensity over the wrong-order flash. |
| <Link id="m-wrongpulseduration" /><code>{"private float wrongPulseDuration"}</code> | Seconds the wrong-order flash lasts. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" Definition { get; private set; }"}</code> | The recipe from the docked page, or null when no recipe page is docked. |

## Methods

<details>
<summary>19 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adddefinition" /><code>{"private void AddDefinition("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Handler for a page docking: applies the page's recipe now, or waits for `OnChangedPage` if the page has no data yet. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: hooks the page dock events and makes instanced crystal and pointer materials. Skipped on headless servers. |
| <Link id="m-changedefinition" /><code>{"private void ChangeDefinition("}<Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" definition)"}</code> | Sets the active recipe, checks it against the block on the deck and flashes the wrong effect if it doesn't match. Null clears the pulse. |
| <Link id="m-cleardefinition" /><code>{"private void ClearDefinition("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Handler for the page undocking: clears the active recipe. |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut(bool hasPointer) (iterator)"}</code> | Coroutine that fades the crystal light, emission and pointer to off, then hides the pointer. |
| <Link id="m-invaliddefinition" /><code>{"private void InvalidDefinition(bool isBlowingUp)"}</code> | Stops the guide and plays the wrong pulse; when `isBlowingUp` is true it also spawns blow-up effects on the block's active pieces. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the instanced materials. |
| <Link id="m-pagefilter" /><code>{"private void PageFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Dock filter that only accepts pages carrying a `ChiselDefinition`. |
| <Link id="m-point" /><code>{"private IEnumerator Point() (iterator)"}</code> | Coroutine that aims the pointer at the pulsing piece and animates the crystal light while a guide is active. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step that finds the pointer renderer and strips null crystal renderers. |
| <Link id="m-releasepulsator" /><code>{"private bool ReleasePulsator()"}</code> | Returns the pulse effect to its pool. Returns true if there was one. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Client: applies any page already docked and listens for the deck's block changing. |
| <Link id="m-updateblock" /><code>{"private void UpdateBlock("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | Handler for the deck's block changing: re-checks the new block against the recipe. |
| <Link id="m-updatepage" /><code>{"private void UpdatePage("}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" page)"}</code> | Pulls the `ChiselDefinition` out of a page and makes it the active recipe. |
| <Link id="m-updatepiece" /><code>{"private void UpdatePiece("}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | Moves the pulse effect onto the given piece (creating it if needed) and starts it pulsing. |
| <Link id="m-validateblock" /><code>{"private bool ValidateBlock("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | Checks a block's size, stage and chiselled pieces so far against the recipe order; if it fits, points at the next piece. |
| <Link id="m-validatedefinition" /><code>{"private void ValidateDefinition("}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<int> list, int item)"}</code> | Runs on each chiselled piece: moves the guide on if the order is right, blows up the guide if wrong, and sets `HasFollowedRecipe` when all 12 are done. |
| <Link id="m-warmup" /><code>{"private IEnumerator WarmUp(bool toWorking) (iterator)"}</code> | Coroutine that blends the crystal light and emission to the working or wrong colours and fades the pointer in or out. |
| <Link id="m-wrongpulse-2" /><code>{"private IEnumerator WrongPulse() (iterator)"}</code> | Coroutine for the wrong-order flash on the crystal, then fades out. |

</details>
