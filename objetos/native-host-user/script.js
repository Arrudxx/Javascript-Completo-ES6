// Liste 5 objetos nativos

// Array
// String
// Function
// Object
// Construtor

// Liste 5 objetos do browser

// HTMLCollection
// Document
// Element
// NodeList
// HTMLDocument

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

// webkitHidden
// webkitVisibilityState

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("existe");
} else {
  console.log("não existe");
}
