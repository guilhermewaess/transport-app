const errorResolver = new Map();

errorResolver.set('required', () => 'This field is required');
errorResolver.set('email', () => 'This e-mail is invalid');
errorResolver.set('minlength', error => `This field should have at least ${error.requiredLength} characters`);

export default errorResolver;
