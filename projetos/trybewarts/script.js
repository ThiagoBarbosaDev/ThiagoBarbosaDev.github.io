const buttonSubmit = document.querySelector('#submit-button');
const inputPwd = document.querySelector('#pwd-input');
const inputEmail = document.querySelector('#email-input');

buttonSubmit.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPwd.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitForm = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    submitForm.disabled = false;
  } else {
    submitForm.disabled = true;
  }
});

const characterCounter = document.querySelector('#counter');
const textArea = document.querySelector('textarea');

textArea.addEventListener('input', () => {
  characterCounter.innerText = `${500 - textArea.value.length}`;
});

submitForm.addEventListener('click', (event) => {
  event.preventDefault();
});

// const result = [];
// const res = ['Nome:', 'Email:', 'Casa:', 'Família:', 'Matérias:', 'Avaliação:', 'observações:'];

// const fullName = `${getName} ${getLastName}`;
const getEmail = document.getElementById('input-email');
const form = document.querySelector('#evaluation-form');
const getName = document.getElementById('input-name');
const getLastName = document.getElementById('input-lastname');

const createName = () => {
  const newName = document.createElement('p');
  newName.innerText = `Nome: ${getName.value} ${getLastName.value}`;
  form.appendChild(newName);
};

const createEmail = () => {
  const newEmail = document.createElement('p');
  newEmail.innerText = `Email: ${getEmail.value}`;
  form.appendChild(newEmail);
};

const createCasaEscolhida = () => {
  const getHouse = document.getElementById('house');
  const house = getHouse.children[getHouse.selectedIndex].text;
  const newCasa = document.createElement('p');
  newCasa.innerText = `Casa: ${house}`;
  form.appendChild(newCasa);
};

const createFamilia = () => {
  const familyValue = document.querySelector('input[name="family"]:checked').value;
  const newFamily = document.createElement('p');
  newFamily.innerText = `Família: ${familyValue}`;
  form.appendChild(newFamily);
};

const createMaterias = () => {
  const discipline = document.querySelectorAll('input[name="discipline"]:checked');
  const newDisciplina = document.createElement('p');
  const arrayDeDisciplinas = [];
  discipline.forEach((element) => {
    arrayDeDisciplinas.push(element.value);
  });
  newDisciplina.innerText = `Matérias: ${arrayDeDisciplinas.join(', ')}`;
  form.appendChild(newDisciplina);
};

const createNotaDeAvaliacao = () => {
  const nota = document.querySelector('input[name="rate"]:checked');
  const newNota = document.createElement('p');
  newNota.innerText = `Avaliação: ${nota.value}`;
  form.appendChild(newNota);
};

const createObservacoes = () => {
  const newObservacoes = document.createElement('p');
  newObservacoes.innerText = `Observações: ${textArea.value}`;
  form.appendChild(newObservacoes);
};

submitForm.addEventListener('click', () => {
  createName();
  createEmail();
  createCasaEscolhida();
  createFamilia();
  createMaterias();
  createNotaDeAvaliacao();
  createObservacoes();
});
