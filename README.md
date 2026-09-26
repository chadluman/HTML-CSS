# FormLab: COITB HTML-CSS Web Designer Exam Lab

Build a responsive workshop-registration form from the ground up while practicing the HTML Forms and Advanced CSS objectives on the **COITB HTML-CSS Web Designer Certification** exam.

This README is both:

1. an instructor script for demonstrating the project; and
2. a student lab that explains what to type, why it works, how to test it, and what exam questions may ask about it.

> **Scope:** This is an educational front-end project, not a production registration system. It does not send or store form data. A real application also needs server-side validation and security controls.

## 1. COITB exam facts and project alignment

The [official COITB exam outline](https://www.coitb.org/certification-resources/exam-outlines/html-css-web-designer-outline) currently lists:

- 90 questions in 90 minutes;
- a passing score of 75% or higher; and
- multiple-choice questions covering six domains.

The [COITB certification page](https://www.coitb.org/certification-resources/badges/html-css-web-designer) also describes the assessment as including scenario-based items and recommends 0–6 months of hands-on practice.

| COITB domain | Weight | What this project practices |
| --- | ---: | --- |
| HTML Structure | 20% | Document structure, metadata, headings, sections, lists, and semantic landmarks |
| CSS Basics | 25% | Selectors, classes, custom properties, colors, typography, borders, spacing, and states |
| Layout Techniques | 20% | Box model, Flexbox, and CSS Grid |
| Responsive Design | 20% | Viewport metadata, fluid sizing, mobile-first rules, and media queries |
| HTML Forms | 10% | Form controls, labels, grouping, input types, and validation attributes |
| Advanced CSS | 5% | Variables, transitions, keyframes, and reduced-motion support |

This one project touches all six domains, but it concentrates on the two Day Ten objectives: **HTML Forms** and **Advanced CSS**. It should be one part of a larger exam-preparation plan, not your only study resource.

### Topics this project does not fully cover

Schedule separate practice for these outline items:

- creating relative, root-relative, and absolute hyperlinks;
- embedding raster images and writing appropriate `alt` text;
- deeper specificity and cascade calculations;
- additional Flexbox and Grid arrangements;
- broader typography and alignment exercises; and
- a CSS preprocessor such as Sass, which appears in the Advanced CSS outline.

## 2. What you will be able to do

After completing the lab, you should be able to:

1. Create an HTML form using semantic elements.
2. Connect every control to a visible label.
3. Explain the purpose of `id`, `name`, `for`, `value`, and `type`.
4. Select the correct input type for text, email, telephone, date, range, file, radio, and checkbox data.
5. Add native constraints with `required`, `minlength`, `maxlength`, `pattern`, `min`, and `accept`.
6. Group related choices with `<fieldset>` and `<legend>`.
7. Style controls consistently using CSS custom properties.
8. Create hover, focus, checked, error, and success states.
9. Use Flexbox, Grid, and media queries to make the form responsive.
10. Add purposeful transitions and keyframe animations.
11. Respect the user's reduced-motion preference.
12. Test a form with keyboard, mobile-width, invalid-data, and valid-data checks.

## 3. Prerequisites

You need:

- a code editor such as Visual Studio Code;
- a modern browser such as Chrome, Edge, or Firefox;
- basic knowledge of HTML opening and closing tags;
- basic knowledge of CSS selectors and declarations; and
- about 90–120 minutes for the full guided build.

JavaScript knowledge is helpful but not required for the HTML/CSS exam objectives. The JavaScript in this project is a progressive enhancement used to create custom error messages and a success screen.

## 4. Project files

```text
forms-practice/
├── index.html    # Page structure, form controls, and validation attributes
├── styles.css    # Layout, visual design, states, transitions, and animations
├── script.js     # Custom validation feedback and success behavior
└── README.md     # This lesson and exam-preparation guide
```

## 5. Start and run the project

### Option A: Open the file directly

1. Open the `forms-practice` folder in Visual Studio Code.
2. Find `index.html` in the Explorer panel.
3. Right-click it and choose **Open with Default Browser**, or double-click the file in File Explorer.

### Option B: Use a local server

1. Open a terminal in the project folder.
2. Run:

   ```powershell
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` in a browser.
4. Stop the server with `Ctrl+C` when finished.

### First checkpoint

The completed page should show a dark lesson-introduction panel and a light registration card. At widths below 980 pixels, the panels should stack vertically.

## 6. Recommended learning method

Do not only read the finished files. Use this cycle for every section:

1. **Predict:** Describe what the next code sample should do.
2. **Type:** Type it yourself instead of pasting it.
3. **Run:** Refresh the browser.
4. **Inspect:** Use browser DevTools to identify the applied HTML attributes and CSS rules.
5. **Change:** Modify one value and predict the result before refreshing.
6. **Restore:** Return to the finished version before continuing.

That cycle prepares you for syntax-identification, output-prediction, debugging, and best-practice questions.

---

# Part I: Build the HTML

## Step 1: Create the document structure

Open `index.html` and start with the HTML document shell:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FormLab | Workshop registration</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <!-- Visible page content goes here. -->
  </body>
</html>
```

### What each line does

- `<!doctype html>` tells the browser to use modern standards mode.
- `<html lang="en">` identifies the document language for browsers, screen readers, and search engines.
- `<meta charset="UTF-8">` allows the document to display a broad set of characters correctly.
- The viewport meta tag makes the page use the device width instead of simulating a desktop-width canvas on mobile.
- `<title>` provides the browser-tab title and an accessible document name.
- `<link>` loads the external stylesheet.
- `<script defer>` downloads the script without blocking HTML parsing and runs it after the document has been parsed.

### Exam checkpoint

Be able to explain the difference between content in `<head>` and content in `<body>`. Also know that `lang`, `charset`, and viewport metadata solve different problems.

## Step 2: Add semantic page regions

Inside `<body>`, the project uses one main landmark with two sections:

```html
<main class="page-shell">
  <section class="intro-panel" aria-labelledby="page-title">
    <h1 id="page-title">Build forms people enjoy completing.</h1>
  </section>

  <section class="form-panel" aria-labelledby="form-title">
    <h2 id="form-title">Save your seat</h2>
    <!-- The form will go here. -->
  </section>
</main>
```

### Why this structure is useful

- `<main>` identifies the page's primary content.
- `<section>` groups related content.
- `aria-labelledby` gives each section an accessible name using an existing heading.
- There is one page-level `<h1>`, followed by `<h2>` headings for major subsections.
- Classes provide reusable CSS hooks without changing the element's meaning.

### Try it

Temporarily replace a `<section>` with `<div>`. The page may look identical, but the `<div>` does not describe the content's purpose. This is the difference between appearance and semantics.

## Step 3: Create the form element

The finished project uses:

```html
<form id="registration-form" novalidate>
  <!-- Controls go here. -->
</form>
```

Important details:

- `<form>` groups the controls that belong to one submission.
- `id="registration-form"` lets the skip link and JavaScript locate the form.
- `novalidate` turns off the browser's default validation popups because `script.js` displays custom inline messages.
- `novalidate` does **not** remove constraints such as `required`; JavaScript can still read each control's `validity` state.

### Native-validation experiment

Before studying `script.js`, temporarily remove `novalidate`. Submit the empty form. The browser should stop at the first required control and show its own message. Restore `novalidate` afterward.

### Exam rule

If a question asks for HTML-only validation, use the correct validation attributes and do **not** add `novalidate` unless the scenario explicitly calls for custom validation.

## Step 4: Add a text input with a connected label

```html
<div class="field" data-field>
  <label for="full-name">
    Full name <span class="required-marker" aria-hidden="true">*</span>
  </label>

  <input
    id="full-name"
    name="fullName"
    type="text"
    autocomplete="name"
    placeholder="Jordan Lee"
    minlength="2"
    required
    aria-describedby="full-name-error"
  />

  <p class="error-message" id="full-name-error"></p>
</div>
```

### Attribute-by-attribute explanation

- `for="full-name"` connects the label to the input whose `id` is `full-name`.
- Clicking the label now focuses the input.
- `name="fullName"` is the key that would identify this value during form submission.
- `type="text"` accepts a single line of general text.
- `autocomplete="name"` tells the browser which saved value is appropriate.
- `placeholder` provides an example, but it does not replace a visible label.
- `minlength="2"` requires at least two characters.
- `required` prevents an empty value from being valid.
- `aria-describedby` associates the input with its error-message element.

### Common exam traps

- `for` must match the input's `id`, not its `name`.
- A placeholder is not an accessible substitute for a label.
- `id` identifies an element in the document; `name` identifies form data.

## Step 5: Add an email input

```html
<label for="email">Email address <span aria-hidden="true">*</span></label>
<input
  id="email"
  name="email"
  type="email"
  autocomplete="email"
  placeholder="jordan@example.com"
  required
/>
```

Why use `type="email"` instead of `type="text"`?

- The browser checks that the value resembles an email address.
- Mobile devices can display an email-friendly keyboard.
- The control communicates the expected data type to browsers and assistive technology.

### Test it

Try these values with native validation enabled:

| Value | Expected result |
| --- | --- |
| Empty | Invalid because of `required` |
| `student` | Invalid because it is not a complete email address |
| `student@example.com` | Valid |

## Step 6: Add a telephone input with a pattern

```html
<label for="phone">Phone number <span class="optional">Optional</span></label>
<input
  id="phone"
  name="phone"
  type="tel"
  autocomplete="tel"
  inputmode="tel"
  placeholder="(555) 123-4567"
  pattern="(?:[ ()+\-]*[0-9]){10,}[ ()+\-]*"
/>
```

### What to understand

- `type="tel"` suggests a telephone keyboard but does not automatically enforce one universal phone format.
- `pattern` supplies a regular-expression constraint.
- This pattern permits spaces, parentheses, plus signs, and hyphens while requiring at least ten digits.
- The field is optional because it does not have `required`.
- An optional field may be empty, but if it has a value, that value must match the pattern.

### Exam checkpoint

Know the difference between `type`, `inputmode`, and `pattern`:

- `type` defines the control and its built-in behavior.
- `inputmode` hints which on-screen keyboard to display.
- `pattern` defines a format the value must match.

## Step 7: Add a date input

```html
<label for="workshop-date">Workshop date <span aria-hidden="true">*</span></label>
<input id="workshop-date" name="workshopDate" type="date" required />
```

The JavaScript sets the `min` property to today's date. An HTML-only version could use a fixed date:

```html
<input type="date" min="2026-09-25" required />
```

Use a dynamic minimum when the page should always reject past dates. Use a fixed minimum when the rule is tied to a known event or deadline.

## Step 8: Add a select menu

```html
<label for="track">Choose a learning track <span aria-hidden="true">*</span></label>
<select id="track" name="track" required>
  <option value="">Select a track</option>
  <option value="form-foundations">Form foundations</option>
  <option value="validation">Friendly validation</option>
  <option value="css-motion">CSS motion and polish</option>
</select>
```

### Why the first value is empty

The first option is an instruction, not a real answer. Because it has `value=""` and the select is required, the user must choose one of the meaningful options.

### Exam trap

The visible option text and submitted `value` can be different. The value is what would be sent with the form's `name`.

## Step 9: Group radio buttons correctly

```html
<fieldset class="field choice-group" data-field>
  <legend>Current experience <span aria-hidden="true">*</span></legend>

  <label>
    <input
      id="experience-beginner"
      type="radio"
      name="experience"
      value="beginner"
      required
    />
    Beginner
  </label>

  <label>
    <input
      id="experience-builder"
      type="radio"
      name="experience"
      value="builder"
    />
    Builder
  </label>
</fieldset>
```

### Why this works

- `<fieldset>` groups controls that answer one question.
- `<legend>` labels the whole group.
- Both radio buttons share `name="experience"`, so only one can be selected.
- Each radio has a different `value`, so the selected answer can be identified.
- Putting `required` on a radio makes the group require one selection.
- Wrapping an input in `<label>` is another valid way to associate label text with a control.

### Radio versus checkbox

- Use radio buttons when the user may choose exactly one option from a group.
- Use checkboxes when choices are independent or the user may select multiple options.

## Step 10: Add a range input and output

```html
<label for="confidence">CSS confidence</label>
<output id="confidence-output" for="confidence">3 / 5</output>
<input
  id="confidence"
  name="confidence"
  type="range"
  min="1"
  max="5"
  value="3"
/>
```

### What the attributes mean

- `min` defines the lowest permitted value.
- `max` defines the highest permitted value.
- `value` defines the starting value.
- `<output>` provides a visible place for JavaScript to display the current value.

Without JavaScript, the slider still works, but the output text will not change automatically.

## Step 11: Add a file input

```html
<label for="project-file">Share a practice file</label>
<input
  id="project-file"
  name="projectFile"
  type="file"
  accept=".html,.css,.zip"
/>
```

`accept` tells the file picker which file types are expected. It improves the selection experience, but a real server must still verify the uploaded file because client-side restrictions can be bypassed.

The 2 MB maximum in this project is checked by JavaScript because HTML has no general `max-file-size` attribute.

## Step 12: Add a textarea with length limits

```html
<label for="learning-goal">What would you like to build?</label>
<textarea
  id="learning-goal"
  name="learningGoal"
  rows="4"
  minlength="20"
  maxlength="240"
  required
></textarea>
```

Use `<textarea>` for multi-line text. Unlike `<input>`, it has an opening and closing tag. Its initial value would be placed between those tags, not in a `value` attribute.

## Step 13: Add a required checkbox and submit button

```html
<label for="code-of-conduct">
  <input
    id="code-of-conduct"
    name="codeOfConduct"
    type="checkbox"
    required
  />
  I agree to participate respectfully in the workshop.
</label>

<button type="submit">Complete registration</button>
```

### Important distinctions

- A checkbox represents an independent yes/no state.
- `type="submit"` tells the button to submit its form.
- A `<button>` inside a form defaults to submit in HTML, but writing the type explicitly makes the intent clear.
- Use `type="button"` for a button that should run an action without submitting the form.

## HTML completion checkpoint

Before styling anything, verify:

- Tab moves through the controls in a logical order.
- Clicking every visible label focuses or toggles its control.
- Only one experience radio can be selected.
- Multiple unrelated checkboxes could be selected independently.
- The email input rejects an incomplete address.
- The select rejects its empty instruction option.
- The textarea rejects fewer than 20 characters.

---

# Part II: Style the form with CSS

## Step 14: Define reusable design tokens

At the top of `styles.css`, add custom properties:

```css
:root {
  --color-ink: #17211b;
  --color-muted: #5b665f;
  --color-page: #14251f;
  --color-page-deep: #0d1a16;
  --color-surface: #fffdf7;
  --color-surface-soft: #f5f1e6;
  --color-border: #d8d7cc;
  --color-primary: #e86445;
  --color-primary-dark: #bd4027;
  --color-accent: #cce86b;
  --color-error: #b42318;
  --color-error-soft: #fff0ed;
  --color-success: #287a4c;
  --color-focus: #2b73d2;
  --shadow-card: 0 30px 80px rgb(1 15 10 / 28%);
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --transition-fast: 180ms ease;
  --transition-base: 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

Use a variable with `var()`:

```css
body {
  color: var(--color-ink);
  background: var(--color-page);
}
```

### Why variables matter

- One value can be reused across many rules.
- A color or spacing change can be made in one location.
- Semantic names such as `--color-error` describe purpose better than names such as `--red`.
- CSS custom properties are part of the COITB Advanced CSS domain.

## Step 15: Apply a predictable box model

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

With `border-box`, an element's declared width includes its content, padding, and border. Without it, padding and borders are added outside the declared content width.

### Box-model drill

For an element with `width: 200px`, `padding: 20px`, and a `2px` border:

- `content-box` total width is `244px`.
- `border-box` total width remains `200px`.

Be able to calculate both without opening a browser.

## Step 16: Create the page layout with Grid

The base rule is mobile-first:

```css
.page-shell {
  display: grid;
  width: min(1180px, calc(100% - 32px));
  margin-inline: auto;
}
```

At a wider viewport, create two columns:

```css
@media (min-width: 980px) {
  .page-shell {
    grid-template-columns: minmax(0, 0.92fr) minmax(520px, 0.78fr);
    gap: clamp(48px, 6vw, 92px);
  }
}
```

### What to understand

- Grid is useful for two-dimensional page layout.
- The base style works on small screens first.
- The `min-width` media query enhances the layout when more space is available.
- `fr` distributes available space between grid tracks.
- `minmax()` sets minimum and maximum track sizes.
- `gap` creates space between tracks without adding margins to children.

## Step 17: Use Flexbox for one-dimensional alignment

```css
.form-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}
```

This aligns the heading block and step badge in one row.

Remember:

- `justify-content` works on the main axis.
- `align-items` works on the cross axis.
- With the default `flex-direction: row`, the main axis is horizontal.
- Grid is used for the overall two-column layout; Flexbox is used for smaller one-dimensional groups.

## Step 18: Style the controls consistently

```css
input,
select,
textarea {
  width: 100%;
  color: var(--color-ink);
  background: #fffefa;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  outline: 0;
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    background-color var(--transition-fast);
}

input,
select {
  min-height: 48px;
}
```

### Why group selectors

A comma-separated selector list applies the same declarations to several element types. This avoids repeating the same rules and makes the form visually consistent.

### Do not remove focus without replacing it

The rule sets `outline: 0`, so the stylesheet must immediately provide a clear custom focus style in the next step. Removing focus indicators without a replacement creates a keyboard-accessibility failure.

## Step 19: Add hover and keyboard-focus states

```css
input:hover,
select:hover,
textarea:hover {
  border-color: #9ca29d;
}

input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible,
a:focus-visible {
  outline: 3px solid rgb(43 115 210 / 25%);
  outline-offset: 2px;
  border-color: var(--color-focus);
}
```

### Pseudo-class review

- `:hover` applies when a pointing device is over an element.
- `:focus` applies whenever an element has focus.
- `:focus-visible` applies when the browser decides a visible focus indicator is needed, commonly during keyboard navigation.
- A usable interface cannot rely on hover alone because touch and keyboard users may never trigger it.

### Test it

1. Move the pointer over a text input and watch its border.
2. Press `Tab` until the same input receives keyboard focus.
3. Confirm the blue focus ring is clearly visible.
4. Continue pressing `Tab` and confirm no interactive control becomes impossible to locate.

## Step 20: Style selected controls

The project visually styles the selected radio card with `:has()`:

```css
.choice-card:has(input:checked) {
  background: #f4f8e5;
  border-color: #718b26;
}
```

Read the selector from right to left: select a `.choice-card` that contains a checked input.

The custom radio dot uses a pseudo-element:

```css
.radio-mark::after {
  content: "";
  width: 10px;
  height: 10px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.3);
}

.choice-card input:checked + .radio-mark::after {
  opacity: 1;
  transform: scale(1);
}
```

Selector breakdown:

- `input:checked` finds a selected checkbox or radio.
- `+` is the adjacent-sibling combinator.
- `.radio-mark::after` selects a generated pseudo-element inside the next sibling.

## Step 21: Create error states

JavaScript adds the `has-error` class to a `.field` when one of its controls is invalid. CSS responds to that state:

```css
.field.has-error .error-message {
  display: block;
  color: var(--color-error);
}

.field.has-error input,
.field.has-error select,
.field.has-error textarea {
  border-color: var(--color-error);
  background: var(--color-error-soft);
}
```

### Accessibility rule

Do not communicate an error with a red border alone. This project also displays a written message and sets `aria-invalid="true"` through JavaScript.

## Step 22: Add transitions

A transition animates a property from its old value to its new value:

```css
.submit-button {
  transition:
    background-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
}

.submit-button:hover {
  background: #a93420;
  transform: translateY(-1px);
}
```

The four conceptual parts are:

```text
property | duration | timing function | optional delay
```

Example:

```css
transition: transform 180ms ease 0ms;
```

Use transitions for state changes such as hover, focus, selected, expanded, or disabled. Avoid animating every property with `transition: all` because it can create accidental motion.

## Step 23: Add a keyframe animation

A keyframe animation defines an independent sequence:

```css
@keyframes success-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.success-panel {
  animation: success-in 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
```

### Transition versus animation

| Transition | Keyframe animation |
| --- | --- |
| Needs a state change | Can start when the rule is applied |
| Usually moves between two states | Can contain several intermediate stages |
| Ideal for hover and focus | Ideal for entrances, exits, and sequences |

The project animates only `opacity` and `transform`, which avoids changing document layout during the animation.

## Step 24: Respect reduced-motion preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This media feature checks an operating-system accessibility preference. It keeps the interface functional while making motion effectively immediate.

## Step 25: Check mobile responsiveness

The project adds layouts at 680 px and 980 px:

```css
@media (min-width: 680px) {
  .field-grid,
  .choice-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 980px) {
  .page-shell {
    grid-template-columns: minmax(0, 0.92fr) minmax(520px, 0.78fr);
  }
}
```

To test in DevTools:

1. Open the page.
2. Open DevTools with `F12`.
3. Turn on the device toolbar.
4. Set the width to `375` pixels.
5. Confirm the page has one column and no horizontal scrollbar.
6. Set the width to `768` pixels.
7. Confirm paired form fields display in two columns.
8. Set the width to `1200` pixels.
9. Confirm the introduction and form display side by side.

---

# Part III: Understand validation

## Step 26: Learn the native validation attributes

| Attribute | Purpose | Example in this project |
| --- | --- | --- |
| `required` | Rejects an empty value or unselected required control | Name, email, date, track, radio, goal, checkbox |
| `minlength` | Requires a minimum text length | Name and learning goal |
| `maxlength` | Prevents text beyond a maximum length | Learning goal |
| `pattern` | Requires text to match a regular expression | Telephone number |
| `min` / `max` | Sets numeric or date boundaries | Date and confidence range |
| `accept` | Hints which file types are expected | HTML, CSS, and ZIP files |
| `type="email"` | Adds email-format validation | Email address |

## Step 27: Understand `ValidityState`

Every form control exposes a `validity` object. The script checks states such as:

- `valueMissing` — a required value is absent;
- `typeMismatch` — a value does not match its input type;
- `tooShort` — a value is shorter than `minlength`;
- `patternMismatch` — a value does not match `pattern`;
- `rangeUnderflow` — a number or date is below `min`; and
- `customError` — JavaScript created an additional rule with `setCustomValidity()`.

Try this in the browser console:

```js
document.querySelector("#email").validity
```

Enter different email values and run the command again. Notice which Boolean properties change.

## Step 28: Follow the optional JavaScript enhancement

COITB's HTML-CSS outline does not make JavaScript the focus of this credential. Study this section to understand how the completed demo works, but prioritize the HTML and CSS rules above for the exam.

### 28.1 Select the elements

```js
const form = document.querySelector("#registration-form");
const errorSummary = document.querySelector("#error-summary");
const successPanel = document.querySelector("#success-panel");
```

`querySelector()` returns the first element that matches a CSS selector.

### 28.2 Validate a field

`validateField()`:

1. collects the controls inside one `[data-field]` wrapper;
2. calls `checkValidity()` on each control;
3. adds or removes the `has-error` class;
4. sets `aria-invalid` for assistive technology; and
5. writes a nearby recovery message.

The function does not duplicate every HTML constraint. It reads the rules already declared in the markup.

### 28.3 Validate after the user leaves a field

```js
form.addEventListener("focusout", (event) => {
  const field = event.target.closest("[data-field]");
  if (field) validateField(field);
});
```

Waiting until `focusout` avoids showing an error before the user has had a chance to finish typing.

### 28.4 Validate the complete form

On submit, the script:

1. prevents the demonstration page from navigating;
2. validates every field;
3. displays an error summary when fields are invalid;
4. moves keyboard focus to the first invalid control; or
5. hides the form and displays the success panel when all fields pass.

### 28.5 Add a custom file-size rule

HTML's `accept` attribute filters expected file types, but it does not limit file size. The script checks the selected file and calls:

```js
fileInput.setCustomValidity("Choose a file smaller than 2 MB.");
```

Passing an empty string to `setCustomValidity("")` removes the custom error.

## Step 29: Understand client-side versus server-side validation

Client-side validation:

- gives the user fast feedback;
- reduces preventable mistakes;
- can improve usability; but
- can be changed or bypassed by the user.

Server-side validation:

- treats all submitted data as untrusted;
- enforces business and security rules;
- runs before data is accepted or stored; and
- is still required even when client-side validation is excellent.

If an exam question asks which validation is required for security, choose server-side validation. HTML validation improves the experience but is not a security boundary.

---

# Part IV: Test the completed project

## Step 30: Empty-form test

1. Load the page.
2. Leave every field empty.
3. Select **Complete registration**.
4. Confirm an error summary appears.
5. Confirm written errors appear beside required fields.
6. Confirm focus moves to the full-name input.

## Step 31: Invalid-data test

Enter:

- full name: `A`
- email: `student`
- phone: `555`
- learning goal: `A form`

Expected results:

- the name fails `minlength`;
- the email fails the email type check;
- the phone fails `pattern`;
- the goal fails `minlength`.

## Step 32: Valid-data test

Enter:

- full name: `Jordan Lee`
- email: `jordan@example.com`
- phone: `(555) 123-4567`
- a date of today or later;
- any learning track;
- one experience option;
- a learning goal of at least 20 characters; and
- the participation checkbox.

Select **Complete registration**. The success panel should appear. Select **Try the form again** and confirm the form returns to its initial state.

## Step 33: Keyboard test

1. Reload the page.
2. Do not use the mouse.
3. Press `Tab` to move through every control.
4. Use `Space` to select a checkbox or radio button.
5. Use arrow keys to move within the radio group.
6. Use `Enter` to submit.
7. Confirm every focused element is visible.

## Step 34: Responsive test

Test at these widths:

| Width | Expected layout |
| ---: | --- |
| 375 px | One column; no horizontal scrolling |
| 768 px | Stacked main panels; paired fields can use two columns |
| 1200 px | Introduction and form side by side |

## Step 35: Reduced-motion test

1. Open the browser's rendering or CSS media emulation tools.
2. Emulate `prefers-reduced-motion: reduce`.
3. Submit a valid form.
4. Confirm the success content appears without noticeable motion.

## Final project acceptance checklist

- [ ] The page has a valid document structure and a descriptive title.
- [ ] The viewport meta tag is present.
- [ ] Every input has a visible, programmatically associated label.
- [ ] Related radio controls use `fieldset` and `legend`.
- [ ] Radio buttons share a name and have different values.
- [ ] Required controls use the `required` attribute.
- [ ] Email, telephone, date, range, and file controls use appropriate types.
- [ ] Error messages explain how to correct each problem.
- [ ] Error state is not communicated by color alone.
- [ ] Keyboard focus remains visible.
- [ ] CSS variables store reusable design values.
- [ ] Grid and Flexbox are used for appropriate layout jobs.
- [ ] Transitions communicate interaction state.
- [ ] Keyframes animate the success state.
- [ ] Reduced-motion preferences are respected.
- [ ] The form works at 375 px, 768 px, and 1200 px.
- [ ] A valid submission reaches the success state.

---

# Part V: COITB exam preparation

## High-yield facts to memorize and understand

### HTML

- `id` must be unique within a page.
- A label's `for` value matches a form control's `id`.
- Controls need `name` attributes to contribute named form data.
- Radio buttons with the same `name` form one mutually exclusive group.
- Checkboxes represent independent selections.
- `placeholder` is a hint, not a label.
- `fieldset` and `legend` describe a group of related controls.
- Semantic elements communicate structure; `<div>` and `<span>` are generic.
- `alt` describes meaningful images, while decorative images normally use `alt=""`.

### CSS

- The cascade considers origin, importance, specificity, and source order.
- An ID selector is more specific than a class selector; a class selector is more specific than an element selector.
- `margin` is outside the border; `padding` is inside it.
- Flexbox is primarily one-dimensional; Grid is two-dimensional.
- `justify-content` uses the main axis; `align-items` uses the cross axis.
- `rem` relates to the root font size; `em` usually relates to the current element's font size.
- `%` is relative to a context-dependent containing value.
- `vw` and `vh` relate to viewport dimensions.
- A mobile-first stylesheet defines small-screen rules first and adds `min-width` queries.
- A transition responds to a property change; keyframes define an animation sequence.

## Debugging drills

Fix each problem before opening the answer.

### Drill 1: Broken label

```html
<label for="student-email">Email</label>
<input id="email" name="email" type="email" />
```

<details>
<summary>Answer</summary>

Make the label's `for` value and input's `id` identical. For example, use `for="email"`.

</details>

### Drill 2: Radio buttons allow two selections

```html
<input type="radio" name="beginner" value="yes" /> Beginner
<input type="radio" name="builder" value="yes" /> Builder
```

<details>
<summary>Answer</summary>

Give both controls the same `name`, such as `name="experience"`, and distinct values such as `beginner` and `builder`.

</details>

### Drill 3: Width is larger than expected

```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
```

<details>
<summary>Answer</summary>

Under `content-box`, the total rendered width is 344 px. Add `box-sizing: border-box` if the total width must remain 300 px.

</details>

### Drill 4: Media query never activates on wide screens

```css
@media (max-width: 980px) {
  .page-shell {
    grid-template-columns: 1fr 1fr;
  }
}
```

<details>
<summary>Answer</summary>

For a mobile-first enhancement that starts at 980 px, use `@media (min-width: 980px)`.

</details>

### Drill 5: Animation does not run

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.panel {
  transition: fade-in 300ms ease;
}
```

<details>
<summary>Answer</summary>

Keyframes are applied with the `animation` property: `animation: fade-in 300ms ease;`. The `transition` property expects CSS property names, not keyframe names.

</details>

## Practice questions

### Questions

1. Which attribute connects an explicit `<label>` to an `<input>`?
2. Which input type provides built-in email-format validation?
3. What must two radio buttons share to behave as one group?
4. Which element provides a caption for a `<fieldset>`?
5. Which attribute requires a value to match a regular expression?
6. What is the difference between `id` and `name` on a form control?
7. Which box-model layer is outside the border?
8. With `box-sizing: border-box`, does declared width include padding and border?
9. Which layout system is normally better for two-dimensional rows and columns?
10. In a row-direction flex container, which property controls horizontal distribution?
11. Which pseudo-class is appropriate for a keyboard-visible focus indicator?
12. Which selector targets a selected radio or checkbox?
13. Which CSS property smoothly interpolates a hover-state change?
14. Which at-rule defines the stages of a CSS animation?
15. Which media feature respects a user's request for less animation?
16. Why should an error include text instead of only a red border?
17. Does `accept=".zip"` guarantee that a server receives a safe ZIP file?
18. Which validation must a secure production application always perform: client-side or server-side?
19. What does the viewport meta tag help a responsive page do?
20. In a mobile-first stylesheet, do larger layouts commonly use `min-width` or `max-width` queries?

### Answer key

1. The label's `for` value matches the input's `id`.
2. `type="email"`.
3. The same `name` value.
4. `<legend>`.
5. `pattern`.
6. `id` identifies the document element; `name` identifies its form-data key.
7. Margin.
8. Yes.
9. CSS Grid.
10. `justify-content`.
11. `:focus-visible`.
12. `:checked`.
13. `transition`.
14. `@keyframes`.
15. `prefers-reduced-motion`.
16. Color alone may not be perceivable or understandable to every user.
17. No. The server must validate the file.
18. Server-side validation.
19. It makes the layout viewport match the device width.
20. `min-width`.

## Timed practical challenge

Complete this without looking at the finished project.

### Time limit

45 minutes.

### Requirements

Build a contact-preference form containing:

- full name, email, and telephone inputs;
- a required select menu;
- a radio group for preferred contact method;
- two optional topic checkboxes;
- a required message with a 20-character minimum;
- a submit button;
- a visible focus state;
- a two-column layout at 768 px and above;
- one hover transition; and
- one success keyframe animation.

### Passing criteria

Award one point for each requirement. Target at least 8 out of 10, then repair every missed item without copying the solution.

## Four-week study plan

COITB recommends hands-on preparation; its current preparation guidance suggests focused concept review, topic practice, then mock testing. Use this project within the following schedule.

### Week 1: HTML structure and CSS basics

- Day 1: Document structure, metadata, headings, paragraphs, and lists
- Day 2: Semantic landmarks, links, paths, images, and `alt`
- Day 3: Element, class, ID, attribute, and combinator selectors
- Day 4: Cascade, specificity, inheritance, colors, and typography
- Day 5: Box model, display values, units, and DevTools inspection
- Weekend: Rebuild a semantic one-page site without a tutorial

### Week 2: Layout and responsive design

- Day 1: Flexbox main axis, cross axis, wrapping, and alignment
- Day 2: Grid tracks, gaps, `fr`, `repeat()`, and `minmax()`
- Day 3: Relative units and fluid sizing
- Day 4: Mobile-first media queries and breakpoints
- Day 5: Rebuild the FormLab page layout from memory
- Weekend: Test at 375 px, 768 px, and 1200 px

### Week 3: Forms and advanced CSS

- Day 1: Labels, names, values, fieldsets, legends, radios, and checkboxes
- Day 2: Input types and native validation attributes
- Day 3: Form states, `:focus-visible`, `:checked`, and error feedback
- Day 4: Variables, transitions, transforms, and keyframes
- Day 5: Reduced motion and responsive form design
- Weekend: Complete the 45-minute practical challenge

### Week 4: Exam simulation and repair

- Day 1: Take a timed practice assessment
- Day 2: Classify every missed question by exam domain
- Day 3: Rebuild the weakest concept in a small page
- Day 4: Complete the debugging drills and practice questions again
- Day 5: Take a second timed assessment and target at least 80%
- Day before exam: Light review only; verify exam-day equipment and identification requirements with COITB

## Assessment rubric (20 points)

| Area | 1 point | 2 points | 3 points | 4 points |
| --- | --- | --- | --- | --- |
| Semantic HTML | Mostly generic structure | Some semantic elements | Clear landmarks and hierarchy | Semantics are complete and explainable |
| Form construction | Controls are incomplete | Most controls work | Labels and groups are correctly connected | Input types, names, values, and groups are all correct |
| Validation | Little or no validation | Required fields work | Several constraint types work | Constraints and recovery messages are accurate and accessible |
| CSS and responsive layout | Basic desktop styling | Consistent styling | Flex/Grid and breakpoints work | Layout is polished, mobile-first, and explainable |
| Advanced CSS and accessibility | Little state feedback | Hover/focus states exist | Transitions and animation work | Motion is purposeful, reduced-motion works, and feedback is not color-only |

Suggested readiness target: **16/20 or higher**, with no row below 3 points.

## Reflection questions

1. Which validation rules belong in HTML, and which require JavaScript or a server?
2. Why is a label more important than a placeholder?
3. Why are radio buttons grouped by `name` instead of by `id`?
4. When would Flexbox be a better choice than Grid?
5. What information participates in the cascade when two rules conflict?
6. What user action or state does each animation in this project communicate?
7. Which COITB domain is currently your weakest, and what small page could you build to practice it?

## Official and supporting references

- [COITB HTML-CSS Web Designer exam outline](https://www.coitb.org/certification-resources/exam-outlines/html-css-web-designer-outline)
- [COITB HTML-CSS Web Designer certification page](https://www.coitb.org/certification-resources/badges/html-css-web-designer)
- [COITB HTML and CSS test-preparation guidance](https://www.coitb.org/feeds/blog/html-css-certification-exam)
- [MDN: HTML forms guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)
- [MDN: CSS layout cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/How_to/Layout_cookbook)
- [MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using)
- [MDN: Constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)

> Exam outlines can change. Recheck the official COITB outline before scheduling the exam. This repository is an independent study aid and is not an official COITB course or endorsement.
