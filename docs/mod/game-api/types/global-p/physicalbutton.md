---
title: "PhysicalButton"
description: "A push button driven by physics: the button part slides along one axis and fires Pressed and Released as it passes set depths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalButton

A **class** in `Root.Township`, the global namespace.

A push button driven by physics: the button part slides along one axis and fires `Pressed` and `Released` as it passes set depths. Runs locally on whichever machine simulates it; not networked by itself.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`Interactable`](/mod/game-api/types/global-i-l/interactable), [`IPreventAtlasing`](/mod/game-api/types/alta-utilities/ipreventatlasing)
- **Attributes** `SelectionBase`
- **Documented in** [Buttons and levers](/mod/game-api/items/buttons-and-levers#physicalbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicalButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>28 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | <span className="api-desc">Shader property ID for `_Color`.</span> |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | <span className="api-desc">Colour when enabled. White by default.</span> |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> | <span className="api-desc">Material when enabled, if not changing colour. Defaults to the renderer's material.</span> |
| <Link id="m-androidbuttonrenderer" /><code>{"private Renderer androidButtonRenderer"}</code> | <span className="api-desc">A second button renderer that is also kept out of atlasing.</span> |
| <Link id="m-buttoncollider" /><code>{"private Collider buttonCollider"}</code> | <span className="api-desc">Backing field for `ButtonCollider`.</span> |
| <Link id="m-buttonrenderer" /><code>{"private Renderer buttonRenderer"}</code> | <span className="api-desc">Backing field for `ButtonRenderer`.</span> |
| <Link id="m-buttonrigidbody" /><code>{"private Rigidbody buttonRigidbody"}</code> | <span className="api-desc">Rigidbody on the button collider: the part that slides.</span> |
| <Link id="m-defaultsoundeffectset" /><code>{"private static "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultSoundEffectSet"}</code> | <span className="api-desc">Cache for `DefaultSoundEffectSet`.</span> |
| <Link id="m-delayenable" /><code>{"private float delayEnable"}</code> | <span className="api-desc">Seconds after `Awake` before the button enables. 0.05 by default.</span> |
| <Link id="m-delaystart" /><code>{"private Task delayStart"}</code> | <span className="api-desc">The running `DelayStart` task.</span> |
| <Link id="m-delaytoken" /><code>{"private CancellationTokenSource delayToken"}</code> | <span className="api-desc">Cancels `DelayStart` if `IsEnabled` is set or the button is destroyed first.</span> |
| <Link id="m-freeaxis" /><code>{"private Vector.Axis freeAxis"}</code> | <span className="api-desc">Local axis the button slides along. Y by default.</span> |
| <Link id="m-inactivecolor" /><code>{"private Color inActiveColor"}</code> | <span className="api-desc">Colour when disabled. Grey by default.</span> |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> | <span className="api-desc">Material when disabled, if not changing colour.</span> |
| <Link id="m-isactiveatallscales" /><code>{"private bool isActiveAtAllScales"}</code> | <span className="api-desc">If false, presses only count while the button's scale is over 0.9 (so not while shrunk).</span> |
| <Link id="m-ischangingcoloronenable" /><code>{"private bool isChangingColorOnEnable"}</code> | <span className="api-desc">If true, enabling swaps colours. If false, it swaps materials.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |
| <Link id="m-isphysicallypressed" /><code>{"private bool isPhysicallyPressed"}</code> | <span className="api-desc">Whether the button is currently pushed past the press threshold.</span> |
| <Link id="m-isplayingsounds" /><code>{"private bool isPlayingSounds"}</code> | <span className="api-desc">Plays the button sound on press and release. True by default.</span> |
| <Link id="m-istestpress" /><code>{"private bool isTestPress"}</code> | <span className="api-desc">Editor button that fires a press.</span> |
| <Link id="m-istestrelease" /><code>{"private bool isTestRelease"}</code> | <span className="api-desc">Editor button that fires a release.</span> |
| <Link id="m-maxdepth" /><code>{"private float maxDepth"}</code> | <span className="api-desc">Fully out position along the axis. 0.67 by default.</span> |
| <Link id="m-mindepth" /><code>{"private float minDepth"}</code> | <span className="api-desc">Fully in position along the axis. 0.31 by default.</span> |
| <Link id="m-pressed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> | <span className="api-desc">Backing event for `Pressed`.</span> |
| <Link id="m-pressthreshold" /><code>{"private float pressThreshold"}</code> | <span className="api-desc">Progress (0 out, 1 fully in) past which the button presses. 0.8 by default.</span> |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | <span className="api-desc">Property block used to set the colour.</span> |
| <Link id="m-released" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> | <span className="api-desc">Backing event for `Released`.</span> |
| <Link id="m-releasethreshold" /><code>{"private float releaseThreshold"}</code> | <span className="api-desc">Progress below which the button releases. 0.5 by default.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttoncollider-2" /><code>{"Collider ButtonCollider { get; }"}</code> | <span className="api-desc">The moving part's collider. Its rigidbody is the part that slides.</span> |
| <Link id="m-buttonrenderer-2" /><code>{"Renderer ButtonRenderer { get; }"}</code> | <span className="api-desc">Renderer recoloured (or given another material) when the button is enabled or disabled.</span> |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether the button can be pressed. Disabling it freezes the moving part, changes its look and stops presses.</span> |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | <span className="api-desc">True between a press and the following release.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultsoundeffectset-2" /><code>{"private static "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultSoundEffectSet { get; }"}</code> | <span className="api-desc">The global button pressed sound, resolved once and cached.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed-2" /><code>{"event Action Pressed"}</code> | <span className="api-desc">Raised when the button is pushed past the press threshold while enabled and not already on.</span> |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> | <span className="api-desc">Raised when the button returns past the release threshold with no one touching it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setstateinternal" /><code>{"void SetStateInternal(bool state)"}</code> | <span className="api-desc">Sets `State` without firing events or sounds.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: keeps the depth range valid and runs the test press or release buttons.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the button rigidbody, disables the button and starts `DelayStart` to enable it shortly after.</span> |
| <Link id="m-changevisuals" /><code>{"private void ChangeVisuals(bool isActive)"}</code> | <span className="api-desc">Sets the renderer to the active or inactive colour (through a property block) or material.</span> |
| <Link id="m-delaystart-2" /><code>{"private async Task DelayStart()"}</code> | <span className="api-desc">Waits `delayEnable` seconds, then enables the button unless cancelled.</span> |
| <Link id="m-fakepress" /><code>{"private void FakePress("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable = null, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> | <span className="api-desc">When a hand starts interacting, pushes the button in to `minDepth` on local Z and makes it kinematic.</span> |
| <Link id="m-fakerelease" /><code>{"private void FakeRelease("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable = null, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> | <span className="api-desc">When the last hand lets go, moves the button partly out and makes it non-kinematic again.</span> |
| <Link id="m-getclampedvector" /><code>{"private Vector3 GetClampedVector(Vector3 original, out float progress)"}</code> | <span className="api-desc">Clamps a position to the depth range on the free axis (other axes 0) and returns progress, 1 at `minDepth`.</span> |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> | <span className="api-desc">Keeps the button renderers out of texture atlasing, so their colour or material can change.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Clamps the button along its axis and fires press or release as it crosses the thresholds. Skips buttons scaled under 0.9.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels a pending `DelayStart`.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks `FakePress` and `FakeRelease`.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the button's travel line.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Puts the button at `minDepth`, hooks `FakePress` and `FakeRelease` to interactions and marks it physically pressed.</span> |
| <Link id="m-onpressed" /><code>{"private void OnPressed()"}</code> | <span className="api-desc">Sets `State`, raises `Pressed` and plays the button sound if `isPlayingSounds`.</span> |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> | <span className="api-desc">Clears `State`, raises `Released` and plays the button sound if `isPlayingSounds`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PhysicalButton`:

<div className="api-used-in">

[`AccessibilityFeaturesBoard.acceptButton`](/mod/game-api/types/global-a-b/accessibilityfeaturesboard#m-acceptbutton), [`AccessibilityFeaturesBoard.closeButton`](/mod/game-api/types/global-a-b/accessibilityfeaturesboard#m-closebutton), [`AccessibilityFeaturesBoard.declineButton`](/mod/game-api/types/global-a-b/accessibilityfeaturesboard#m-declinebutton), [`ButtonEnumMenuSetting.next`](/mod/game-api/types/alta-menus/buttonenummenusetting#m-next), [`ButtonEnumMenuSetting.previous`](/mod/game-api/types/alta-menus/buttonenummenusetting#m-previous), [`TradeConfiguration.coinDown`](/mod/game-api/types/alta-crafting/tradeconfiguration#m-coindown), [`TradeConfiguration.coinUp`](/mod/game-api/types/alta-crafting/tradeconfiguration#m-coinup), [`TradeConfiguration.itemDown`](/mod/game-api/types/alta-crafting/tradeconfiguration#m-itemdown), [`TradeConfiguration.itemUp`](/mod/game-api/types/alta-crafting/tradeconfiguration#m-itemup), [`RepairBoxDevControlPanel.buildButton`](/mod/game-api/types/alta-menus/repairboxdevcontrolpanel#m-buildbutton), [`RepairBoxDevControlPanel.destroyButton`](/mod/game-api/types/alta-menus/repairboxdevcontrolpanel#m-destroybutton), [`ButtonCounter.down`](/mod/game-api/types/global-a-b/buttoncounter#m-down), [`ButtonCounter.up`](/mod/game-api/types/global-a-b/buttoncounter#m-up), [`LabelledButtonWrapper.button`](/mod/game-api/types/global-i-l/labelledbuttonwrapper#m-button), [`LabelledButtonWrapper.Button`](/mod/game-api/types/global-i-l/labelledbuttonwrapper#m-button-2), [`TutorialPromptBoard.joinTutorialButton`](/mod/game-api/types/global-t-x/tutorialpromptboard#m-jointutorialbutton), [`TutorialPromptBoard.skipTutorialButton`](/mod/game-api/types/global-t-x/tutorialpromptboard#m-skiptutorialbutton).

</div>
