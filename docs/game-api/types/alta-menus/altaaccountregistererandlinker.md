---
title: "AltaAccountRegistererAndLinker"
description: "Client: the in-VR account registration screen."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaAccountRegistererAndLinker

A **internal class** in `Root.Township`, `Alta.OculusLogin`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client: the in-VR account registration screen. Checks username, email and password fields live against the API, registers the account, then logs in (with platform credentials if supported).

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`LoginAndRegisterHelper`](/game-api/types/global-i-l/loginandregisterhelper)
- **Nested types** [`AccountRegisteringSteps`](/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps), [`LastCheckedField`](/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaAccountRegistererAndLinker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-authenticationutility" /><code>{"private "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility"}</code> | Used to log in with username and password after registering when platform login is not supported. |
| <Link id="m-confirmpasswordinput" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" confirmPasswordInput"}</code> | The confirm password field. |
| <Link id="m-emailinput" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" emailInput"}</code> | The email field. |
| <Link id="m-fieldchecks" /><code>{"private GameObject[] fieldChecks"}</code> | Tick objects, one per field. |
| <Link id="m-fieldcrosses" /><code>{"private GameObject[] fieldCrosses"}</code> | Cross objects, one per field. |
| <Link id="m-fielderrors" /><code>{"private GameObject[] fieldErrors"}</code> | Error objects, one per field. |
| <Link id="m-frames" /><code>{"private MeshFilter[] frames"}</code> | Frame mesh filters, one per field, swapped to show valid or invalid. |
| <Link id="m-intendedgenericerror" /><code>{"private string intendedGenericError"}</code> | The error text to show once validation finishes. |
| <Link id="m-invalidframe" /><code>{"private Mesh invalidFrame"}</code> | Frame mesh copy tinted with `invalidFrameColor`. |
| <Link id="m-invalidframecolor" /><code>{"private Color invalidFrameColor"}</code> | Vertex colour for an invalid field's frame. |
| <Link id="m-isconvertingtolinearcolor" /><code>{"private bool isConvertingToLinearColor"}</code> | Whether the frame colours are converted to linear space first. |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> | The VR keyboard whose input changes trigger validation. |
| <Link id="m-lastcheckedemail" /><code>{"private "}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" lastCheckedEmail"}</code> | Cache of the last email checked and its result, so the API is not asked again. |
| <Link id="m-lastcheckedusername" /><code>{"private "}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" lastCheckedUsername"}</code> | Cache of the last username checked and its result. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-onfailedtoregisteraccountfade" /><code>{"private "}<Link to="/game-api/types/global-a-b/animatorsetup">{"AnimatorSetup"}</Link>{" onFailedToRegisterAccountFade"}</code> | Animator fade played when registration fails. |
| <Link id="m-onvalidconfirm" /><code>{"private UnityEvent onValidConfirm"}</code> | Event run when `CheckConfirm` passes. |
| <Link id="m-onvalidsubmit" /><code>{"private UnityEvent onValidSubmit"}</code> | Event run after the account is registered and logged in. |
| <Link id="m-originalframemesh" /><code>{"private Mesh originalFrameMesh"}</code> | Untinted frame mesh, used for empty fields and as the base for the tinted copies. |
| <Link id="m-screenname" /><code>{"private static readonly string ScreenName"}</code> | Screen name reported to signup analytics ("Account Registration"). |
| <Link id="m-timer" /><code>{"private float timer"}</code> | Seconds left before the typing pause triggers validation. |
| <Link id="m-updatevalidationtimer" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateValidationTimer"}</code> | Handle for the registered timer update method. |
| <Link id="m-userservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | User service used to register the account and for platform login. |
| <Link id="m-validframe" /><code>{"private Mesh validFrame"}</code> | Frame mesh copy tinted with `validFrameColor`. |
| <Link id="m-validframecolor" /><code>{"private Color validFrameColor"}</code> | Vertex colour for a valid field's frame. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkconfirm" /><code>{"async void CheckConfirm()"}</code> | Validates every field and runs `onValidConfirm` if all pass. |
| <Link id="m-ondisable" /><code>{"override void OnDisable()"}</code> | Unhooks keyboard input and stops the validation timer. |
| <Link id="m-validateall" /><code>{"async void ValidateAll()"}</code> | Validates every field and shows the resulting generic error. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility)"}</code> | VContainer injection of the user service (and in one overload the authentication utility). |
| <Link id="m-inject-2" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" injectedUserService)"}</code> | VContainer injection of the user service (and in one overload the authentication utility). |
| <Link id="m-internalsubmit" /><code>{"protected override async Task InternalSubmit()"}</code> | Validates, registers the account through `IUserService`, then logs in. On success marks the login as an Oculus account and runs `onValidSubmit`. |

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets up the per-field last-checked caches and builds tinted copies of the frame mesh for valid and invalid fields. |
| <Link id="m-confirmpasswordmatch" /><code>{"private bool ConfirmPasswordMatch()"}</code> | Checks the confirm password matches the password and updates that field's marks. |
| <Link id="m-disablefield" /><code>{"private void DisableField("}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps">{"AltaAccountRegistererAndLinker.AccountRegisteringSteps"}</Link>{" field)"}</code> | Hides a field's error, cross and tick and puts back the plain frame mesh. |
| <Link id="m-internalemailvalidation" /><code>{"private async Task<bool> InternalEmailValidation()"}</code> | Checks the email format locally, then with the API, caching the result for an unchanged value. |
| <Link id="m-internalpasswordvalidation" /><code>{"private bool InternalPasswordValidation()"}</code> | Requires a password of at least 7 characters. |
| <Link id="m-internalvalidateall" /><code>{"private async Task<bool> InternalValidateAll()"}</code> | Runs the username, email, password and confirm checks and returns whether all passed. |
| <Link id="m-isusernamevalid" /><code>{"private async Task<bool> IsUsernameValid()"}</code> | Asks the API to validate the username, showing any error, and caches the result for an unchanged value. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Destroys the tinted frame meshes. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks keyboard input changes to the validation timer and reports the registration screen to analytics. |
| <Link id="m-returntoaccountcreation" /><code>{"private void ReturnToAccountCreation()"}</code> | Plays the fade used when registration fails. |
| <Link id="m-seterrormessage" /><code>{"private void SetErrorMessage(string message, "}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" field)"}</code> | Shows a message in the generic error text and stores it on the field's cache. |
| <Link id="m-updatefieldstatus" /><code>{"private void UpdateFieldStatus("}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps">{"AltaAccountRegistererAndLinker.AccountRegisteringSteps"}</Link>{" field, bool status)"}</code> | Shows the tick or the error and cross for a field and swaps its frame to the valid or invalid mesh. |
| <Link id="m-updatetimer" /><code>{"private void UpdateTimer(string input)"}</code> | Restarts a one second timer each time keyboard input changes. |
| <Link id="m-updatevalidationtimer-2" /><code>{"private void UpdateValidationTimer()"}</code> | Counts the timer down and revalidates all fields when it runs out, so checks run after typing pauses. |
| <Link id="m-validateallwithouclearinggenericerror" /><code>{"private async void ValidateAllWithouClearingGenericError()"}</code> | Validates every field without clearing the current error text. Used by the typing timer. |

</details>

## Used in

Members of other types that take, return or hold a `AltaAccountRegistererAndLinker`:

[`AltaAccountRegistererAndLinker.LastCheckedField.LastCheckedField`](/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield#m-ctor), [`AltaAccountRegistererAndLinker.LastCheckedField.manager`](/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield#m-manager).
