async function jDoHtmlStates() {
  const sUrlState = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  const oResponse = await fetch(sUrlState)
  const oData     = await oResponse.json()
  
  const oLabelCity   = document.querySelector('#city')
  const oLabelSelect = document.querySelector('#state')
  const oSelect      = document.createElement('select')
  oSelect.setAttribute('id', 'states')
  oSelect.setAttribute('name', 'states')
        
  oLabelSelect.append(oSelect)
        
  oData.map((state) => {
    const oOption = document.createElement('option')
    oOption.setAttribute('value', state.sigla)
    oOption.innerText = state.nome

    oSelect.appendChild(oOption)
  })
  
  oSelectCity = document.createElement('select')
  oSelectCity.setAttribute('id', 'cities')
  oSelectCity.setAttribute('name', 'cities')
  oLabelCity.append(oSelectCity)

  let bFirst = true
  if (bFirst) {
    let sUf = document.querySelector('#states').firstElementChild.getAttribute('value')

    let oResponseCity = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sUf}/municipios`)
    let oDataCity = await oResponseCity.json()

    oDataCity.map((city) => {
      const oOptionCity = document.createElement('option')
      oOptionCity.innerText = city.nome

      oSelectCity.appendChild(oOptionCity)
    })

    bFirst = false;
  }
  
  let oSelected = document.querySelector('#states')
  oSelected.addEventListener('change', (event) => { 
    let irineu = document.querySelector('#cities')
    irineu.innerHTML = ''
    let oResponseCity = jGeraRequisicao('city', event.target.value)
    oResponseCity.then(response => {
      response.forEach(element => {
        const oOptionCity = document.createElement('option')
        oOptionCity.innerText = element.nome

        oSelectCity.appendChild(oOptionCity)
      }); 
    })
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

window.onload = function() {
  jDoHtmlStates()

};
