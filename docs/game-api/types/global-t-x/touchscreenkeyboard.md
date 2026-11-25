---
title: "TouchScreenKeyboard"
description: "The in-world virtual keyboard players type on with their fingers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenKeyboard

A **class** in `Root.Township`, no namespace.

The in-world virtual keyboard players type on with their fingers. Client only; one shared instance, moved into place with `Get` for whichever text field (`IUseVirtualKeyboard`) is using it.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`TouchScreenMenuBase`](/game-api/types/global-t-x/touchscreenmenubase)
- **Nested types** [`KeyBoardEdgesInfo`](/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo), [`OutputEvent`](/game-api/types/global-t-x/touchscreenkeyboard-outputevent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TouchScreenKeyboard()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-setupsecretkey" /><code>{"bool setupSecretKey"}</code> | If set, an extra secret toggle key is added to the last row. |

<details>
<summary>27 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androidmultikeyboardsetup" /><code>{"private "}<Link to="/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" androidMultiKeyboardSetup"}</code> |
| <Link id="m-androidsetup" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" androidSetup"}</code> |
| <Link id="m-autocomplete" /><code>{"private "}<Link to="/game-api/types/alta-menus/autocomplete">{"AutoComplete"}</Link>{" autoComplete"}</code> |
| <Link id="m-backspacedelaystart" /><code>{"private float backspaceDelayStart"}</code> |
| <Link id="m-backspacesingleletterduration" /><code>{"private float backspaceSingleLetterDuration"}</code> |
| <Link id="m-continuousbackspacespeed" /><code>{"private float continuousBackspaceSpeed"}</code> |
| <Link id="m-currentkeyboardindex" /><code>{"private int currentKeyboardIndex"}</code> |
| <Link id="m-dimensionsoffset" /><code>{"private Vector2 dimensionsOffset"}</code> |
| <Link id="m-doubleshifttimer" /><code>{"private float doubleShiftTimer"}</code> |
| <Link id="m-empty" /><code>{"private const string empty"}</code> |
| <Link id="m-functionkeys" /><code>{"private "}<Link to="/game-api/types/global-e-h/functionkeydefinition">{"FunctionKeyDefinition"}</Link>{"[] functionKeys"}</code> |
| <Link id="m-hasdoneautocompletesetup" /><code>{"private bool hasDoneAutoCompleteSetup"}</code> |
| <Link id="m-indextokeycode" /><code>{"private readonly Dictionary<int, KeyCode> indexToKeyCode"}</code> |
| <Link id="m-input" /><code>{"private string input"}</code> |
| <Link id="m-instantiatedbuttons" /><code>{"private readonly List<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> instantiatedButtons"}</code> |
| <Link id="m-isshiftlocked" /><code>{"private bool isShiftLocked"}</code> |
| <Link id="m-keyboardedgesinfo" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo">{"TouchScreenKeyboard.KeyBoardEdgesInfo"}</Link>{" keyboardEdgesInfo"}</code> |
| <Link id="m-keyprefab" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" keyPrefab"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-originoffset" /><code>{"private Vector2 originOffset"}</code> |
| <Link id="m-output" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard-outputevent">{"TouchScreenKeyboard.OutputEvent"}</Link>{" output"}</code> |
| <Link id="m-pcmultikeyboardsetup" /><code>{"private "}<Link to="/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" pcMultiKeyboardSetup"}</code> |
| <Link id="m-scale" /><code>{"private float scale"}</code> |
| <Link id="m-setup" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" setup"}</code> |
| <Link id="m-shiftlockmarker" /><code>{"private Renderer shiftLockMarker"}</code> |
| <Link id="m-timetodoubleshift" /><code>{"private float timeToDoubleShift"}</code> |
| <Link id="m-usemultikeyboardsetup" /><code>{"private bool useMultiKeyboardSetup"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backspacedelaystart-2" /><code>{"float BackspaceDelayStart { get; }"}</code> | Seconds a held backspace waits before repeating. |
| <Link id="m-backspacesingleletterduration-2" /><code>{"float BackspaceSingleLetterDuration { get; }"}</code> | Seconds a held backspace deletes letter by letter before speeding up. |
| <Link id="m-continuousbackspacespeed-2" /><code>{"float ContinuousBackspaceSpeed { get; }"}</code> | Repeat speed for a held backspace. |
| <Link id="m-currentuser" /><code><Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" CurrentUser { get; private set; }"}</code> | The text field currently typing on the keyboard, or null. |
| <Link id="m-input-2" /><code>{"string Input { get; set; }"}</code> | The typed text. Setting it trims to the user's character limit and raises `InputChanged`. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Instance { get; private set; }"}</code> | The keyboard in the scene. |
| <Link id="m-instantiatedbuttons-2" /><code>{"override List<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> InstantiatedButtons { get; }"}</code> | Key buttons spawned for the current layout. |
| <Link id="m-isshiftpressed" /><code>{"bool IsShiftPressed { get; private set; }"}</code> | True while shift is on. Turns off after one character unless shift is locked. |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret { get; }"}</code> | Never set, so always false. |
| <Link id="m-mappedfunctionkeys" /><code>{"Dictionary<KeyCode, "}<Link to="/game-api/types/global-e-h/functionkeydefinition">{"FunctionKeyDefinition"}</Link>{"> MappedFunctionKeys { get; }"}</code> | Function keys with their actions, by key code. |
| <Link id="m-offset" /><code>{"protected override Vector2 Offset { get; }"}</code> | Centre offset of the keyboard's touch area. |

<details>
<summary>2 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-keyboardsetup" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" KeyboardSetup { get; }"}</code> |
| <Link id="m-multikeyboardsetup" /><code>{"private "}<Link to="/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" MultiKeyboardSetup { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-backpressedonempty" /><code>{"event Action BackPressedOnEmpty"}</code> | Raised when backspace is pressed with no text. |
| <Link id="m-inputchanged" /><code>{"event Action<string> InputChanged"}</code> | Raised with the new text whenever the input changes. |
| <Link id="m-nextpressed" /><code>{"event Action NextPressed"}</code> | Raised when return is pressed. |
| <Link id="m-shiftchanged" /><code>{"event Action<bool> ShiftChanged"}</code> | Raised when shift turns on or off. |
| <Link id="m-togglesecretdisplay" /><code>{"event Action ToggleSecretDisplay"}</code> | Raised by `ToggleSecret`, for fields that hide their text. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addextrakey" /><code><Link to="/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" AddExtraKey("}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" keyInfo, bool leftSide, int insertRow)"}</code> | Adds a key at the left or right end of a keyboard row. |
| <Link id="m-applynewautocompletionsource" /><code>{"void ApplyNewAutoCompletionSource("}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletionSource)"}</code> | Sets where autocomplete suggestions come from, adding the suggestion keys the first time. |
| <Link id="m-clearfocus" /><code>{"void ClearFocus()"}</code> | Removes all listeners from its events and tells the current user it lost focus. |
| <Link id="m-eventsetupnewkeyboard" /><code>{"void EventSetUpNewKeyboard(int newKeyboardIndex)"}</code> | Switches to another layout of the keyboard set (such as symbols), keeping keys that match. |
| <Link id="m-get-2" /><code>{"static "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Get(Vector3 position, Quaternion rotation, "}<Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" newUser)"}</code> | Moves the keyboard to a position and rotation, shows it, clears the input and gives it to a new user. |
| <Link id="m-hide" /><code>{"void Hide("}<Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" user)"}</code> | Hides the keyboard if the given user is the current one. |
| <Link id="m-keypressed" /><code>{"void KeyPressed(KeyCode key)"}</code> | Handles a key: types a character, backspace, return, shift, a function key or an autocomplete pick. |
| <Link id="m-next" /><code>{"void Next()"}</code> | Asks the current user to move to the next field. |
| <Link id="m-previous" /><code>{"void Previous()"}</code> | Asks the current user to move to the previous field. |
| <Link id="m-setupnewuser" /><code>{"void SetupNewUser("}<Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" newUser)"}</code> | Gives the keyboard to a text field and hooks its input and submit handlers. |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret()"}</code> | Raises `ToggleSecretDisplay`. |
| <Link id="m-typecustom" /><code>{"void TypeCustom(string custom)"}</code> | Adds a string to the input. |
| <Link id="m-wordbackspace" /><code>{"void WordBackspace()"}</code> | Deletes the last word. |
| <Link id="m-ondrawgizmos" /><code>{"protected override void OnDrawGizmos()"}</code> | Draws the key layout in the editor. |
| <Link id="m-posttouchcalculation" /><code>{"protected override void PostTouchCalculation()"}</code> | After touch checks, lets each enabled key settle its press state. |
| <Link id="m-pretouchcalculation" /><code>{"protected override void PreTouchCalculation()"}</code> | Before touch checks, clears each enabled key's finger distance. |
| <Link id="m-updatetouchwithbuttons" /><code>{"protected override void UpdateTouchWithButtons("}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | Updates each key's distance to a nearby fingertip. |

<details>
<summary>23 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addautocompletekeys" /><code>{"private void AddAutoCompleteKeys()"}</code> |  |
| <Link id="m-applycompletion" /><code>{"private void ApplyCompletion(string completion)"}</code> |  |
| <Link id="m-autocompletesetup" /><code>{"private void AutoCompleteSetup()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-basekeyboardsetup" /><code>{"private void BaseKeyboardSetup("}<Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" baseSetup, int lastEqualIndex)"}</code> |  |
| <Link id="m-calculatetransitionkeyposition-l-r" /><code>{"private Vector3 CalculateTransitionKeyPosition_L_R(Vector2 edgeKeyPos, float spacing, int stackMultiplier, float spaceOffset)"}</code> |  |
| <Link id="m-get" /><code>{"private static "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | Moves the keyboard to a position and rotation, shows it, clears the input and gives it to a new user. |
| <Link id="m-getminmax" /><code>{"private void GetMinMax(out Vector2 min, out Vector2 max)"}</code> |  |
| <Link id="m-includeletter" /><code>{"private void IncludeLetter(string letter)"}</code> |  |
| <Link id="m-includenumber" /><code>{"private void IncludeNumber(int number)"}</code> |  |
| <Link id="m-localkeyboardsetup" /><code>{"private void LocalKeyboardSetup()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-populateautocompleteswithcurrentinput" /><code>{"private void PopulateAutoCompletesWithCurrentInput(string currentInput)"}</code> |  |
| <Link id="m-pressshift" /><code>{"private void PressShift()"}</code> |  |
| <Link id="m-removeonlynecessarykeys" /><code>{"private int RemoveOnlyNecessaryKeys(int incomingIndex)"}</code> |  |
| <Link id="m-resetdimensions" /><code>{"private void ResetDimensions()"}</code> |  |
| <Link id="m-scaleposition" /><code>{"private Vector3 ScalePosition(Vector2 original)"}</code> |  |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> |  |
| <Link id="m-setupnewkeyboard" /><code>{"private void SetUpNewKeyboard(int keyboardIndex, int lastEqualIndex)"}</code> |  |
| <Link id="m-setupplayer" /><code>{"private void SetupPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-spawnkey" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" SpawnKey("}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" keyInfo)"}</code> |  |
| <Link id="m-wordbackspace-2" /><code>{"private string WordBackspace(string input)"}</code> | Deletes the last word. |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenKeyboard`:

[`InputFieldWithKeyboard.keyboard`](/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboard), [`InputFieldWithKeyboard.Keyboard`](/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboard-2), [`InputFieldWithKeyboard.keyboardPrefab`](/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboardprefab), [`AltaAccountRegistererAndLinker.keyboard`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-keyboard), [`ServerBoardFilter.keyboard`](/game-api/types/game-other-namespaces/serverboardfilter#m-keyboard), [`TouchScreenKeyboardKey.Setup`](/game-api/types/global-t-x/touchscreenkeyboardkey#m-setup), [`TouchScreenKeyboardKey.SetupCoreReferences`](/game-api/types/global-t-x/touchscreenkeyboardkey#m-setupcorereferences), [`TouchScreenKeyboardKey.virtualKeyboard`](/game-api/types/global-t-x/touchscreenkeyboardkey#m-virtualkeyboard), [`VirtualInputField.keyboard`](/game-api/types/global-t-x/virtualinputfield#m-keyboard).
