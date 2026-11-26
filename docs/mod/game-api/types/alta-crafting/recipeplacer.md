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
| <Link id="m-ctor" /><code>{"RecipePlacer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blowuppiece" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" blowUpPiece"}</code> | <span className="api-desc">Pooled effect spawned on each block piece when the recipe is broken.</span> |
| <Link id="m-changepieceaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" changePieceAudio"}</code> | <span className="api-desc">Sound played when the guide moves to the next piece.</span> |
| <Link id="m-coroutinehandler" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutineHandler"}</code> | <span className="api-desc">The running light coroutine, stopped before a new one starts.</span> |
| <Link id="m-crystalcolorzerowronggradient" /><code>{"private Gradient crystalColorZeroWrongGradient"}</code> | <span className="api-desc">Crystal `_ColorA` colour over the wrong-order flash.</span> |
| <Link id="m-crystalemmisionworkinggradient" /><code>{"private Gradient crystalEmmisionWorkingGradient"}</code> | <span className="api-desc">Crystal emission over one pulse cycle while guiding.</span> |
| <Link id="m-crystalemmisionwronggradient" /><code>{"private Gradient crystalEmmisionWrongGradient"}</code> | <span className="api-desc">Crystal emission over the wrong-order flash.</span> |
| <Link id="m-crystallight" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" crystalLight"}</code> | <span className="api-desc">Light on the crystal, off when idle.</span> |
| <Link id="m-crystalmaterial" /><code>{"private Material crystalMaterial"}</code> | <span className="api-desc">Instanced material shared by all crystal renderers.</span> |
| <Link id="m-crystalrenderers" /><code>{"private Renderer[] crystalRenderers"}</code> | <span className="api-desc">Renderers that share the instanced crystal material.</span> |
| <Link id="m-currentpulsator" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" currentPulsator"}</code> | <span className="api-desc">The pulse effect currently on the next piece, or null.</span> |
| <Link id="m-deck" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> | <span className="api-desc">The chiselling deck whose block this placer checks.</span> |
| <Link id="m-fadeoutemmision" /><code>{"private Color fadeOutEmmision"}</code> | <span className="api-desc">Crystal emission colour when faded out.</span> |
| <Link id="m-lightpointer" /><code>{"private Transform lightPointer"}</code> | <span className="api-desc">Transform that aims at the next piece and holds the pointer visual.</span> |
| <Link id="m-lightpulsatingintensity" /><code>{"private AnimationCurve lightPulsatingIntensity"}</code> | <span className="api-desc">Crystal light intensity over one pulse cycle while guiding.</span> |
| <Link id="m-pagedock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pageDock"}</code> | <span className="api-desc">The dock the recipe page goes into (on the same object).</span> |
| <Link id="m-pointeralphaanimation" /><code>{"private AnimationCurve pointerAlphaAnimation"}</code> | <span className="api-desc">Pointer alpha while it fades in or out.</span> |
| <Link id="m-pointermaterial" /><code>{"private Material pointerMaterial"}</code> | <span className="api-desc">Instanced pointer material.</span> |
| <Link id="m-pointerrenderer" /><code>{"private Renderer pointerRenderer"}</code> | <span className="api-desc">Pointer renderer under `lightPointer`, found at build time.</span> |
| <Link id="m-pointershaderalpha" /><code>{"private readonly int pointerShaderAlpha"}</code> | <span className="api-desc">Shader id for the pointer's `_TintColor`.</span> |
| <Link id="m-pulsatordefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pulsatorDefinition"}</code> | <span className="api-desc">Pooled pulse effect put on the next piece. Set to null on headless servers.</span> |
| <Link id="m-pusatingperiod" /><code>{"private float pusatingPeriod"}</code> | <span className="api-desc">Seconds per pulse cycle of the crystal light while guiding.</span> |
| <Link id="m-shadercolorzero" /><code>{"private readonly int shaderColorZero"}</code> | <span className="api-desc">Shader id for `_ColorA`.</span> |
| <Link id="m-shaderemmision" /><code>{"private readonly int shaderEmmision"}</code> | <span className="api-desc">Shader id for `_EmissionColor`.</span> |
| <Link id="m-startworkingaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" startWorkingAudio"}</code> | <span className="api-desc">Sound played when the guide starts on a block.</span> |
| <Link id="m-stopworkingaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" stopWorkingAudio"}</code> | <span className="api-desc">Sound played when the guide stops because the recipe was broken.</span> |
| <Link id="m-warmupduration" /><code>{"private float warmUpDuration"}</code> | <span className="api-desc">Seconds the warm-up and fade-out blends take.</span> |
| <Link id="m-workinglightcolor" /><code>{"private Color workingLightColor"}</code> | <span className="api-desc">Crystal light colour while guiding.</span> |
| <Link id="m-wronglightcolor" /><code>{"private Color wrongLightColor"}</code> | <span className="api-desc">Crystal light colour for the wrong-order flash.</span> |
| <Link id="m-wrongpulse" /><code>{"private AnimationCurve wrongPulse"}</code> | <span className="api-desc">Crystal light intensity over the wrong-order flash.</span> |
| <Link id="m-wrongpulseduration" /><code>{"private float wrongPulseDuration"}</code> | <span className="api-desc">Seconds the wrong-order flash lasts.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" Definition { get; private set; }"}</code> | <span className="api-desc">The recipe from the docked page, or null when no recipe page is docked.</span> |

## Methods

<details className="api-private">
<summary>19 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adddefinition" /><code>{"private void AddDefinition("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Handler for a page docking: applies the page's recipe now, or waits for `OnChangedPage` if the page has no data yet.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: hooks the page dock events and makes instanced crystal and pointer materials. Skipped on headless servers.</span> |
| <Link id="m-changedefinition" /><code>{"private void ChangeDefinition("}<Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Sets the active recipe, checks it against the block on the deck and flashes the wrong effect if it doesn't match. Null clears the pulse.</span> |
| <Link id="m-cleardefinition" /><code>{"private void ClearDefinition("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Handler for the page undocking: clears the active recipe.</span> |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut(bool hasPointer) (iterator)"}</code> | <span className="api-desc">Coroutine that fades the crystal light, emission and pointer to off, then hides the pointer.</span> |
| <Link id="m-invaliddefinition" /><code>{"private void InvalidDefinition(bool isBlowingUp)"}</code> | <span className="api-desc">Stops the guide and plays the wrong pulse; when `isBlowingUp` is true it also spawns blow-up effects on the block's active pieces.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the instanced materials.</span> |
| <Link id="m-pagefilter" /><code>{"private void PageFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Dock filter that only accepts pages carrying a `ChiselDefinition`.</span> |
| <Link id="m-point" /><code>{"private IEnumerator Point() (iterator)"}</code> | <span className="api-desc">Coroutine that aims the pointer at the pulsing piece and animates the crystal light while a guide is active.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that finds the pointer renderer and strips null crystal renderers.</span> |
| <Link id="m-releasepulsator" /><code>{"private bool ReleasePulsator()"}</code> | <span className="api-desc">Returns the pulse effect to its pool. Returns true if there was one.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Client: applies any page already docked and listens for the deck's block changing.</span> |
| <Link id="m-updateblock" /><code>{"private void UpdateBlock("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | <span className="api-desc">Handler for the deck's block changing: re-checks the new block against the recipe.</span> |
| <Link id="m-updatepage" /><code>{"private void UpdatePage("}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" page)"}</code> | <span className="api-desc">Pulls the `ChiselDefinition` out of a page and makes it the active recipe.</span> |
| <Link id="m-updatepiece" /><code>{"private void UpdatePiece("}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | <span className="api-desc">Moves the pulse effect onto the given piece (creating it if needed) and starts it pulsing.</span> |
| <Link id="m-validateblock" /><code>{"private bool ValidateBlock("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | <span className="api-desc">Checks a block's size, stage and chiselled pieces so far against the recipe order; if it fits, points at the next piece.</span> |
| <Link id="m-validatedefinition" /><code>{"private void ValidateDefinition("}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<int> list, int item)"}</code> | <span className="api-desc">Runs on each chiselled piece: moves the guide on if the order is right, blows up the guide if wrong, and sets `HasFollowedRecipe` when all 12 are done.</span> |
| <Link id="m-warmup" /><code>{"private IEnumerator WarmUp(bool toWorking) (iterator)"}</code> | <span className="api-desc">Coroutine that blends the crystal light and emission to the working or wrong colours and fades the pointer in or out.</span> |
| <Link id="m-wrongpulse-2" /><code>{"private IEnumerator WrongPulse() (iterator)"}</code> | <span className="api-desc">Coroutine for the wrong-order flash on the crystal, then fades out.</span> |

</details>
