async function addJSONData() {
  const data = await (await fetch('../data/data.json')).json()

  const overviewSection = document.getElementById('overview')

  const overviewCards = overviewSection.getElementsByClassName('card')

  for (let i = 0; i < overviewCards.length; i++) {
    overviewCards[i].getElementsByClassName('label')[0].innerHTML = data.overview[i].label
    overviewCards[i].getElementsByClassName('count')[0].innerHTML = data.overview[i].count
  }

  const ticketsSection = document.getElementById('tickets')

  ticketsSection.getElementsByClassName('h6')[0].innerHTML = data.tickets.title
  ticketsSection.getElementsByClassName('group')[0].innerHTML = data.tickets.group
  ticketsSection.getElementsByClassName('details')[0].innerHTML = data.tickets.linkText

  const ticketsSectionStatuses = ticketsSection.getElementsByClassName('card-body section')

  for (let i = 0; i < ticketsSectionStatuses.length; i++) {
    ticketsSectionStatuses[i].getElementsByClassName('status2')[0].innerHTML = data.tickets.items[i].status
    ticketsSectionStatuses[i].getElementsByClassName('number2')[0].innerHTML = data.tickets.items[i].count
  }
}

addJSONData()
