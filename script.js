function append(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function changeLanguage() {
  const lang = document.getElementById('language').value;
  const title = document.getElementById('title');
  const clearBtn = document.getElementById('clear');

  const translations = {
    en: { title: "Kids Calculator", clear: "C" },
    ar: { title: "آلة حاسبة للأطفال", clear: "مسح" },
    de: { title: "Kinder Rechner", clear: "Löschen" },
    fr: { title: "Calculatrice pour enfants", clear: "Effacer" }
  };

  title.textContent = translations[lang].title;
  clearBtn.textContent = translations[lang].clear;
}
