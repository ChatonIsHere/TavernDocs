---
title: "RecipePlacer"
description: "class RecipePlacer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecipePlacer

A **class** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Attributes** `RequireComponent`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RecipePlacer()"}</code> |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-blowuppiece" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" blowUpPiece"}</code> |
| <Link id="m-changepieceaudio" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" changePieceAudio"}</code> |
| <Link id="m-coroutinehandler" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutineHandler"}</code> |
| <Link id="m-crystalcolorzerowronggradient" /><code>{"private Gradient crystalColorZeroWrongGradient"}</code> |
| <Link id="m-crystalemmisionworkinggradient" /><code>{"private Gradient crystalEmmisionWorkingGradient"}</code> |
| <Link id="m-crystalemmisionwronggradient" /><code>{"private Gradient crystalEmmisionWrongGradient"}</code> |
| <Link id="m-crystallight" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" crystalLight"}</code> |
| <Link id="m-crystalmaterial" /><code>{"private Material crystalMaterial"}</code> |
| <Link id="m-crystalrenderers" /><code>{"private Renderer[] crystalRenderers"}</code> |
| <Link id="m-currentpulsator" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" currentPulsator"}</code> |
| <Link id="m-deck" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> |
| <Link id="m-fadeoutemmision" /><code>{"private Color fadeOutEmmision"}</code> |
| <Link id="m-lightpointer" /><code>{"private Transform lightPointer"}</code> |
| <Link id="m-lightpulsatingintensity" /><code>{"private AnimationCurve lightPulsatingIntensity"}</code> |
| <Link id="m-pagedock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pageDock"}</code> |
| <Link id="m-pointeralphaanimation" /><code>{"private AnimationCurve pointerAlphaAnimation"}</code> |
| <Link id="m-pointermaterial" /><code>{"private Material pointerMaterial"}</code> |
| <Link id="m-pointerrenderer" /><code>{"private Renderer pointerRenderer"}</code> |
| <Link id="m-pointershaderalpha" /><code>{"private readonly int pointerShaderAlpha"}</code> |
| <Link id="m-pulsatordefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pulsatorDefinition"}</code> |
| <Link id="m-pusatingperiod" /><code>{"private float pusatingPeriod"}</code> |
| <Link id="m-shadercolorzero" /><code>{"private readonly int shaderColorZero"}</code> |
| <Link id="m-shaderemmision" /><code>{"private readonly int shaderEmmision"}</code> |
| <Link id="m-startworkingaudio" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" startWorkingAudio"}</code> |
| <Link id="m-stopworkingaudio" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" stopWorkingAudio"}</code> |
| <Link id="m-warmupduration" /><code>{"private float warmUpDuration"}</code> |
| <Link id="m-workinglightcolor" /><code>{"private Color workingLightColor"}</code> |
| <Link id="m-wronglightcolor" /><code>{"private Color wrongLightColor"}</code> |
| <Link id="m-wrongpulse" /><code>{"private AnimationCurve wrongPulse"}</code> |
| <Link id="m-wrongpulseduration" /><code>{"private float wrongPulseDuration"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" Definition { get; private set; }"}</code> |

## Methods

<details>
<summary>19 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-adddefinition" /><code>{"private void AddDefinition("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-changedefinition" /><code>{"private void ChangeDefinition("}<Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" definition)"}</code> |
| <Link id="m-cleardefinition" /><code>{"private void ClearDefinition("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-fadeout" /><code>{"private IEnumerator FadeOut(bool hasPointer) (iterator)"}</code> |
| <Link id="m-invaliddefinition" /><code>{"private void InvalidDefinition(bool isBlowingUp)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-pagefilter" /><code>{"private void PageFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |
| <Link id="m-point" /><code>{"private IEnumerator Point() (iterator)"}</code> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |
| <Link id="m-releasepulsator" /><code>{"private bool ReleasePulsator()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updateblock" /><code>{"private void UpdateBlock("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> |
| <Link id="m-updatepage" /><code>{"private void UpdatePage("}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" page)"}</code> |
| <Link id="m-updatepiece" /><code>{"private void UpdatePiece("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> |
| <Link id="m-validateblock" /><code>{"private bool ValidateBlock("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> |
| <Link id="m-validatedefinition" /><code>{"private void ValidateDefinition("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<int> list, int item)"}</code> |
| <Link id="m-warmup" /><code>{"private IEnumerator WarmUp(bool toWorking) (iterator)"}</code> |
| <Link id="m-wrongpulse-2" /><code>{"private IEnumerator WrongPulse() (iterator)"}</code> |

</details>
