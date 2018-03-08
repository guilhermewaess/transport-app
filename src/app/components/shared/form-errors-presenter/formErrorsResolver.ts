const errorResolver = new Map();

errorResolver.set('required', () => 'This field is required');
errorResolver.set('email', () => 'This e-mail is invalid');
errorResolver.set('minlength', error => `This field should have at least ${error.requiredLength} characters`);
errorResolver.set('groupMatch', error => `The fields: ${error.fields}, should be equal.`);

export default errorResolver;
