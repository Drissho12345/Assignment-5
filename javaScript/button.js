function clickAble(){
    // console.log('clicked')
    const homeSection = document.getElementById('home-section');
    // console.log(ticketCounter.innerText);
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);

    const ticketCounter = document.getElementById('ticket-counter');
    // console.log(ticketCounter.classList);
    ticketCounter.classList.remove('hidden')
}