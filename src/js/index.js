let sUrlState = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  , sUrlCity  = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/SC/municipios'

let teste = []

// async function jPegaDados() {
//   await fetch(sUrlState)
//   .then((res) => {
//     Promise.resolve(res.json()).then(function(value) {
//       let sHtmlState = '<select id="states">'
//       value.forEach(element => {
//           sHtmlState += '<option value='+element.sigla+'>'+element.nome+'</option>'
//           teste.push(element.sigla  )
//         })
//         sHtmlState += '</select>'
        
//         $("#state").append(sHtmlState)
//       });
//     })
// }

// window.addEventListener('load', () => {
//   setTimeout(function() {
//     var estado = document.querySelector('#states')
//     var estadoss = estado.querySelectorAll('option')

//     estadoss.forEach(element => {
//       element.addEventListener('change', (target) => {
//         console.log(target)
//       })
//     })
//   }, 500);
  
//   jPegaDados()
// })


// console.log(estadoss)



// $.getJSON(sUrlCity, function(data) {
//   let sHtmlCity = '<select>'
//   $.each(data, function(indice, element) {
//     sHtmlCity += '<option>'+element.nome+'</option>'
//   })
//   sHtmlCity += '</select>'

//   $("#city").append(sHtmlCity)
// })