---
title: "PhysicalButton"
description: "A push button driven by physics: the button part slides along one axis and fires Pressed and Released as it passes set depths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalButton

A **class** in `Root.Township`, no namespace.

A push button driven by physics: the button part slides along one axis and fires `Pressed` and `Released` as it passes set depths. Runs locally on whichever machine simulates it; not networked by itself.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable), [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing)
- **Attributes** `SelectionBase`
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers#physicalbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicalButton()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> |  |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> |  |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> |  |
| <Link id="m-androidbuttonrenderer" /><code>{"private Renderer androidButtonRenderer"}</code> |  |
| <Link id="m-buttoncollider" /><code>{"private Collider buttonCollider"}</code> |  |
| <Link id="m-buttonrenderer" /><code>{"private Renderer buttonRenderer"}</code> |  |
| <Link id="m-buttonrigidbody" /><code>{"private Rigidbody buttonRigidbody"}</code> |  |
| <Link id="m-defaultsoundeffectset" /><code>{"private static "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultSoundEffectSet"}</code> |  |
| <Link id="m-delayenable" /><code>{"private float delayEnable"}</code> |  |
| <Link id="m-delaystart" /><code>{"private Task delayStart"}</code> |  |
| <Link id="m-delaytoken" /><code>{"private CancellationTokenSource delayToken"}</code> |  |
| <Link id="m-freeaxis" /><code>{"private Vector.Axis freeAxis"}</code> |  |
| <Link id="m-inactivecolor" /><code>{"private Color inActiveColor"}</code> |  |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> |  |
| <Link id="m-isactiveatallscales" /><code>{"private bool isActiveAtAllScales"}</code> |  |
| <Link id="m-ischangingcoloronenable" /><code>{"private bool isChangingColorOnEnable"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-isphysicallypressed" /><code>{"private bool isPhysicallyPressed"}</code> |  |
| <Link id="m-isplayingsounds" /><code>{"private bool isPlayingSounds"}</code> |  |
| <Link id="m-istestpress" /><code>{"private bool isTestPress"}</code> |  |
| <Link id="m-istestrelease" /><code>{"private bool isTestRelease"}</code> |  |
| <Link id="m-maxdepth" /><code>{"private float maxDepth"}</code> |  |
| <Link id="m-mindepth" /><code>{"private float minDepth"}</code> |  |
| <Link id="m-pressed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> |  |
| <Link id="m-pressthreshold" /><code>{"private float pressThreshold"}</code> |  |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> |  |
| <Link id="m-released" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> |  |
| <Link id="m-releasethreshold" /><code>{"private float releaseThreshold"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttoncollider-2" /><code>{"Collider ButtonCollider { get; }"}</code> | The moving part's collider. Its rigidbody is the part that slides. |
| <Link id="m-buttonrenderer-2" /><code>{"Renderer ButtonRenderer { get; }"}</code> | Renderer recoloured (or given another material) when the button is enabled or disabled. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether the button can be pressed. Disabling it freezes the moving part, changes its look and stops presses. |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | True between a press and the following release. |
| <Link id="m-defaultsoundeffectset-2" /><code>{"private static "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultSoundEffectSet { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed-2" /><code>{"event Action Pressed"}</code> | Raised when the button is pushed past the press threshold while enabled and not already on. |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> | Raised when the button returns past the release threshold with no one touching it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setstateinternal" /><code>{"void SetStateInternal(bool state)"}</code> | Sets `State` without firing events or sounds. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-changevisuals" /><code>{"private void ChangeVisuals(bool isActive)"}</code> |  |
| <Link id="m-delaystart-2" /><code>{"private async Task DelayStart()"}</code> |  |
| <Link id="m-fakepress" /><code>{"private void FakePress("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable = null, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> |  |
| <Link id="m-fakerelease" /><code>{"private void FakeRelease("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable = null, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> |  |
| <Link id="m-getclampedvector" /><code>{"private Vector3 GetClampedVector(Vector3 original, out float progress)"}</code> |  |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onpressed" /><code>{"private void OnPressed()"}</code> |  |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: keeps the depth range valid and runs the test press or release buttons. |

## Used in

Members of other types that take, return or hold a `PhysicalButton`:

[`AccessibilityFeaturesBoard.acceptButton`](/game-api/types/global-a-b/accessibilityfeaturesboard#m-acceptbutton), [`AccessibilityFeaturesBoard.closeButton`](/game-api/types/global-a-b/accessibilityfeaturesboard#m-closebutton), [`AccessibilityFeaturesBoard.declineButton`](/game-api/types/global-a-b/accessibilityfeaturesboard#m-declinebutton), [`ButtonEnumMenuSetting.next`](/game-api/types/alta-menus/buttonenummenusetting#m-next), [`ButtonEnumMenuSetting.previous`](/game-api/types/alta-menus/buttonenummenusetting#m-previous), [`TradeConfiguration.coinDown`](/game-api/types/alta-crafting/tradeconfiguration#m-coindown), [`TradeConfiguration.coinUp`](/game-api/types/alta-crafting/tradeconfiguration#m-coinup), [`TradeConfiguration.itemDown`](/game-api/types/alta-crafting/tradeconfiguration#m-itemdown), [`TradeConfiguration.itemUp`](/game-api/types/alta-crafting/tradeconfiguration#m-itemup), [`RepairBoxDevControlPanel.buildButton`](/game-api/types/alta-menus/repairboxdevcontrolpanel#m-buildbutton), [`RepairBoxDevControlPanel.destroyButton`](/game-api/types/alta-menus/repairboxdevcontrolpanel#m-destroybutton), [`ButtonCounter.down`](/game-api/types/global-a-b/buttoncounter#m-down), [`ButtonCounter.up`](/game-api/types/global-a-b/buttoncounter#m-up), [`LabelledButtonWrapper.button`](/game-api/types/global-i-l/labelledbuttonwrapper#m-button), [`LabelledButtonWrapper.Button`](/game-api/types/global-i-l/labelledbuttonwrapper#m-button-2), [`TutorialPromptBoard.joinTutorialButton`](/game-api/types/global-t-x/tutorialpromptboard#m-jointutorialbutton), [`TutorialPromptBoard.skipTutorialButton`](/game-api/types/global-t-x/tutorialpromptboard#m-skiptutorialbutton).
