let sUrlState = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

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

async function jDoHtmlStates() {
  let bFirst = true
  const oResponse = await fetch(sUrlState)
  const oData = await oResponse.json()

  const oLabelCity = document.querySelector('#city')
  const oLabelSelect = document.querySelector('#state')
  const oSelect = document.createElement('select')
  oSelect.setAttribute('id', 'states')
        
  oLabelSelect.append(oSelect)
        
  oData.map((state) => {
    const oOption = document.createElement('option')
    oOption.setAttribute('value', state.sigla)
    oOption.innerText = state.nome

    oSelect.appendChild(oOption)
  })
  
  oSelectCity = document.createElement('select')
  oLabelCity.append(oSelectCity)

  if (bFirst) {
    let sUf = document.querySelector('#states').firstElementChild.getAttribute('value')

    let oResponseCity = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sUf}/municipios`)
    let oDataCity = await oResponseCity.json()

    

    oDataCity.map((city) => {
      const oOptionCity = document.createElement('option')
      oOptionCity.innerText = city.nome

      oSelectCity.appendChild(oOptionCity)
    })

  }
  
  let oSelected = document.querySelector('#states')
  oSelected.addEventListener('change', (event) => {
    console.log(event.target.value)

    
    let testee = jGeraRequisicao('city', event.target.value)
    console.log(testee.then(response => console.log(response)))
    
  });
}

async function jGeraRequisicao(type, uf) {
  if (type == 'state') {
    const oResponseSelect = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')

    return oResponseSelect.json()
  } else {
    let sUf = uf
    const oResponseSelect = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sUf}/municipios`)
    
    return oResponseSelect.json()
  }

}

jDoHtmlStates()
