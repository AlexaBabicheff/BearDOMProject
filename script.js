const root = document.querySelector('#root')

const bodyContainer = document.createElement('div')
bodyContainer.classList.add('bodyContainer')
root.append(bodyContainer)

const bear = document.createElement('div')
bear.classList.add('bear')
bodyContainer.append(bear)

const bearImg = document.createElement('img')
bearImg.src='./Rectangle 10.svg'
bearImg.alt='bear'
bear.append(bearImg)

const formContainer = document.createElement('div')
formContainer.classList.add('formContainer')
bodyContainer.append(formContainer)

const form = document.createElement('form')
form.classList.add('form')
formContainer.append(form)

const formHeader = document.createElement('div')
formHeader.classList.add('formHeader')
form.append(formHeader)

const header = document.createElement('div')
header.classList.add('header')
formHeader.append(header)

const headerText = document.createElement('h1')
headerText.classList.add('headerText')
headerText.innerText='Create account'
header.append(headerText)

const underlineText = document.createElement('p')
underlineText.classList.add('underlineText')
underlineText.innerText='Or register using email & password'
header.append(underlineText)

const fbIcon = document.createElement('i');
fbIcon.classList.add('fa-solid', 'fa-f');
formHeader.append(fbIcon);

const twitterIcon = document.createElement('i');
twitterIcon.classList.add('fab', 'fa-twitter');
formHeader.append(twitterIcon);

const googleIcon = document.createElement('i');
googleIcon.classList.add('fab', 'fa-google');
formHeader.append(googleIcon);

const divider = document.createElement('div');
divider.classList.add('divider');
form.append(divider);

const formBody = document.createElement('div')
formBody.classList.add('formBody')
form.append(formBody)

const nameLabel = document.createElement('label');
nameLabel.innerText = 'Full name';

const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'John Rambo');

const nameContainer = document.createElement('nameContainer');
nameContainer.classList.add('nameContainer')

nameContainer.appendChild(nameLabel);
nameContainer.appendChild(nameInput);
formBody.append(nameContainer);

const emailLabel = document.createElement('label');
emailLabel.innerText = 'Email address';

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'text');
emailInput.setAttribute('placeholder', 'hello@hey.com');

const emailContainer = document.createElement('emailContainer');
emailContainer.classList.add('emailContainer')
emailContainer.appendChild(emailLabel);
emailContainer.appendChild(emailInput);
formBody.append(emailContainer);

const passwordLabel = document.createElement('password');
passwordLabel.innerText = 'Create password';

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'text');
passwordInput.setAttribute('placeholder', '............');

const passwordContainer = document.createElement('passwordContainer');
passwordContainer.classList.add('passwordContainer')
passwordContainer.appendChild(passwordLabel);
passwordContainer.appendChild(passwordInput);
formBody.append(passwordContainer);

const passwordConfirmLabel = document.createElement('passwordConfirm');
passwordConfirmLabel.innerText = 'Confirm password';

const passwordConfirmInput = document.createElement('input');
passwordConfirmInput.setAttribute('type', 'text');
passwordConfirmInput.setAttribute('placeholder', '............');

const passwordConfirmContainer = document.createElement('passwordConfirmContainer');
passwordConfirmContainer.classList.add('passwordConfirmContainer')
passwordConfirmContainer.appendChild(passwordConfirmLabel);
passwordConfirmContainer.appendChild(passwordConfirmInput);
formBody.append(passwordConfirmContainer);

const checkbox = document.createElement('div')
checkbox.classList.add('checkbox')
form.append(checkbox)

const termsCheckbox = document.createElement('input');
termsCheckbox.setAttribute('type', 'checkbox');
checkbox.append(termsCheckbox);

const termsLabel = document.createElement('label');
termsLabel.innerText = 'I agree with the ';

const highlightedText1 = document.createElement('span');
highlightedText1.textContent = 'terms';
highlightedText1.classList.add('highlighted'); 
termsLabel.appendChild(highlightedText1); 

termsLabel.innerText += ' and the ';

const highlightedText2 = document.createElement('span');
highlightedText2.textContent = 'privacy policy';
highlightedText2.classList.add('highlighted');
termsLabel.appendChild(highlightedText2);
checkbox.append(termsLabel);



const registerButton = document.createElement('button');
registerButton.classList.add('registerButton')
registerButton.innerText = 'Register';
form.append(registerButton);