export default function validateNewPost(values) {
  let errors = {};

  if (!values.text) {
    errors.text = "Text is required";
  }

  return errors;
}
