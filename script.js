const form = document.querySelector("#registration-form");
const errorSummary = document.querySelector("#error-summary");
const errorList = document.querySelector("#error-list");
const successPanel = document.querySelector("#success-panel");
const resetButton = document.querySelector("#reset-form");
const dateInput = document.querySelector("#workshop-date");
const rangeInput = document.querySelector("#confidence");
const rangeOutput = document.querySelector("#confidence-output");
const goalInput = document.querySelector("#learning-goal");
const goalCount = document.querySelector("#goal-count");
const fileInput = document.querySelector("#project-file");

// Prevent students from choosing a date in the past.
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
  .toISOString()
  .split("T")[0];
dateInput.min = localToday;

const labels = {
  fullName: "Full name",
  email: "Email address",
  phone: "Phone number",
  workshopDate: "Workshop date",
  track: "Learning track",
  experience: "Current experience",
  projectFile: "Practice file",
  learningGoal: "Learning goal",
  codeOfConduct: "Participation agreement",
};

function getField(control) {
  return control.closest("[data-field]");
}

function getControls(field) {
  return [...field.querySelectorAll("input, select, textarea")];
}

function getErrorMessage(control) {
  const label = labels[control.name] ?? "This field";
  const { validity } = control;

  if (validity.valueMissing) return `${label} is required.`;
  if (validity.typeMismatch) return `Enter a valid ${label.toLowerCase()}.`;
  if (validity.tooShort) {
    return `${label} must be at least ${control.minLength} characters.`;
  }
  if (validity.patternMismatch) {
    return "Enter a phone number with at least 10 digits.";
  }
  if (validity.rangeUnderflow) return "Choose today or a future date.";
  if (validity.customError) return control.validationMessage;
  return `Check the ${label.toLowerCase()} and try again.`;
}

function validateField(field) {
  const controls = getControls(field);
  const control = controls[0];
  const errorMessage = field.querySelector(".error-message");
  const isValid = controls.every((item) => item.checkValidity());

  field.classList.toggle("has-error", !isValid);
  controls.forEach((item) => item.setAttribute("aria-invalid", String(!isValid)));

  if (errorMessage) {
    errorMessage.textContent = isValid ? "" : getErrorMessage(control);
  }

  return isValid;
}

function updateFileValidity() {
  const file = fileInput.files[0];
  const maxFileSize = 2 * 1024 * 1024;

  fileInput.setCustomValidity(
    file && file.size > maxFileSize ? "Choose a file smaller than 2 MB." : "",
  );
}

function showErrorSummary(invalidFields) {
  errorList.replaceChildren();

  invalidFields.forEach((field) => {
    const control = getControls(field)[0];
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.href = `#${control.id}`;
    link.textContent = getErrorMessage(control);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      control.focus();
    });

    item.append(link);
    errorList.append(item);
  });

  errorSummary.hidden = false;
}

form.addEventListener("focusout", (event) => {
  const field = getField(event.target);
  if (field) validateField(field);
});

form.addEventListener("input", (event) => {
  const field = getField(event.target);

  if (event.target === rangeInput) {
    rangeOutput.value = `${rangeInput.value} / 5`;
  }

  if (event.target === goalInput) {
    goalCount.textContent = `${goalInput.value.length} / ${goalInput.maxLength}`;
  }

  if (event.target === fileInput) updateFileValidity();
  if (field?.classList.contains("has-error")) validateField(field);
});

form.addEventListener("change", (event) => {
  const field = getField(event.target);
  if (event.target === fileInput) updateFileValidity();
  if (field) validateField(field);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateFileValidity();

  const fields = [...form.querySelectorAll("[data-field]")];
  const invalidFields = fields.filter((field) => !validateField(field));

  if (invalidFields.length > 0) {
    showErrorSummary(invalidFields);
    getControls(invalidFields[0])[0].focus();
    return;
  }

  errorSummary.hidden = true;
  form.hidden = true;
  successPanel.hidden = false;
  successPanel.focus();
});

resetButton.addEventListener("click", () => {
  form.reset();
  form.querySelectorAll("[data-field]").forEach((field) => field.classList.remove("has-error"));
  form.querySelectorAll("[aria-invalid]").forEach((control) => control.removeAttribute("aria-invalid"));
  goalCount.textContent = "0 / 240";
  rangeOutput.value = "3 / 5";
  errorSummary.hidden = true;
  successPanel.hidden = true;
  form.hidden = false;
  document.querySelector("#full-name").focus();
});
