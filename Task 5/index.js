const ButtonNotification = document.querySelector('.notelogo');
const HowerNotification = document.querySelector('.notification:nth-child(1) .note')
const notificationsPath = document.getElementById('Path_3675')
const notificationsSpan = document.querySelector('.notification:nth-child(1) span')
const ShowallNotification = document.querySelector('.nbottom-fixed')

ButtonNotification.addEventListener('mouseover', () =>{

    // notificationsSpan.style.display = 'none';
    ShowallNotification.style.display = 'flex';
    notificationsSpan.style.visibility = 'hidden';
    if( notificationsPath.getAttribute('fill') == '#3fd28b')
    {
            notificationsPath.setAttribute('fill', 'white');
    }
    else
    {
            notificationsPath.setAttribute('fill', '#3fd28b');
    }

    if(HowerNotification.style.display == 'none')
    {
        HowerNotification.style.display = 'block';
    }
    else
    {
        HowerNotification.style.display = 'none';
    }

})
ButtonNotification.addEventListener('mouseout', ()=>{
    notificationsSpan.style.visibility = 'visible';
    notificationsPath.setAttribute('fill', '#3fd28b');
    HowerNotification.style.display = 'none'
    notificationsSpan.style.display = 'block';
    ShowallNotification.style.display = 'none';
})


/* For Notification detail Box */
HowerNotification.addEventListener('mouseover', () =>{
    HowerNotification.style.display = 'block';
    ShowallNotification.style.display = 'flex';
    notificationsSpan.style.visibility = 'hidden';
    if( notificationsPath.getAttribute('fill') == '#3fd28b')
    {
            notificationsPath.setAttribute('fill', 'white');
    }
    else
    {
            notificationsPath.setAttribute('fill', '#3fd28b');
    }

})
HowerNotification.addEventListener('mouseout', () =>{
    HowerNotification.style.display = 'none';
    ShowallNotification.style.display = 'none';
    notificationsSpan.style.visibility = 'visible';

    if( notificationsPath.getAttribute('fill') == '#3fd28b')
    {
            notificationsPath.setAttribute('fill', 'white');
    }
    else
    {
            notificationsPath.setAttribute('fill', '#3fd28b');
    }
})

/* For Notification Button */
ShowallNotification.addEventListener('mouseover', () =>{
    HowerNotification.style.display = 'block';
    ShowallNotification.style.display = 'flex';
    notificationsSpan.style.visibility = 'hidden';
    if( notificationsPath.getAttribute('fill') == '#3fd28b')
    {
            notificationsPath.setAttribute('fill', 'white');
    }
    else
    {
            notificationsPath.setAttribute('fill', '#3fd28b');
    }

})
ShowallNotification.addEventListener('mouseout', () =>{
    HowerNotification.style.display = 'none';
    ShowallNotification.style.display = 'none';
    notificationsSpan.style.visibility = 'visible';

    if( notificationsPath.getAttribute('fill') == '#3fd28b')
    {
            notificationsPath.setAttribute('fill', 'white');
    }
    else
    {
            notificationsPath.setAttribute('fill', '#3fd28b');
    }
})


// **************************************************************************************************

const ButtonAlert = document.querySelector('.alertlogo');
const HowerAlert = document.querySelector('.notification:nth-child(2) .alert')
const PathAlert = document.getElementById('Forma_1')
const SpanAlert = document.querySelector('.notification:nth-child(2) span')
const ShowAlert = document.querySelector('.bottom-fixed')
ButtonAlert.addEventListener('mouseover', () =>{

    ShowAlert.style.display = 'flex';
    SpanAlert.style.visibility = 'hidden';
    if( PathAlert.getAttribute('fill') == '#3fd28b')
    {
        PathAlert.setAttribute('fill', 'white');
    }
    else
    {
        PathAlert.setAttribute('fill', '#3fd28b');
    }

    if(HowerAlert.style.display == 'none')
    {
        HowerAlert.style.display = 'block';
    }
    else
    {
        HowerAlert.style.display = 'none';
    }
})

ButtonAlert.addEventListener('mouseout', ()=>{

    ShowAlert.style.display = 'none';
    SpanAlert.style.visibility = 'visible';
    PathAlert.setAttribute('fill', '#3fd28b');
    HowerAlert.style.display = 'none'
    SpanAlert.style.display = 'block';
    // nbottomFixed.style.display = 'none';
})

/* For Alert detail Box */
HowerAlert.addEventListener('mouseover', () =>{

    ShowAlert.style.display = 'flex';
    HowerAlert.style.display = 'block';
    SpanAlert.style.visibility = 'hidden';
    if( PathAlert.getAttribute('fill') == '#3fd28b')
    {
        PathAlert.setAttribute('fill', 'white');
    }
    else
    {
        PathAlert.setAttribute('fill', '#3fd28b');
    }

})
HowerAlert.addEventListener('mouseout', () =>{

    ShowAlert.style.display = 'none';
    HowerAlert.style.display = 'none';
    SpanAlert.style.visibility = 'visible';

    if( PathAlert.getAttribute('fill') == '#3fd28b')
    {
        PathAlert.setAttribute('fill', 'white');
    }
    else
    {
        PathAlert.setAttribute('fill', '#3fd28b');
    }
})

/* For Alert Button */
ShowAlert.addEventListener('mouseover', () =>{

    ShowAlert.style.display = 'flex';
    HowerAlert.style.display = 'block';
    SpanAlert.style.visibility = 'hidden';
    if( PathAlert.getAttribute('fill') == '#3fd28b')
    {
        PathAlert.setAttribute('fill', 'white');
    }
    else
    {
        PathAlert.setAttribute('fill', '#3fd28b');
    }

})
ShowAlert.addEventListener('mouseout', () =>{

    ShowAlert.style.display = 'none';
    HowerAlert.style.display = 'none';
    SpanAlert.style.visibility = 'visible';

    if( PathAlert.getAttribute('fill') == '#3fd28b')
    {
        PathAlert.setAttribute('fill', 'white');
    }
    else
    {
        PathAlert.setAttribute('fill', '#3fd28b');
    }
})

/* hamburger code */

const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerPath = document.querySelector('.hamburger svg path:nth-child(2)');
const hamburgerDetails = document.querySelector('.headerdata');
const ulHeadings = document.getElementsByClassName('ul-heading');
// hamburgerDetails.style.display = 'block'
hamburgerMenu.addEventListener('mouseover', ()=>{
    if(hamburgerPath.getAttribute('fill') == '#3fd28b')
    {
        hamburgerPath.setAttribute('fill', 'white');
        hamburgerDetails.style.display = 'block'
    }
});

hamburgerMenu.addEventListener('mouseout', ()=>{
    hamburgerPath.setAttribute('fill', '#3fd28b');
    hamburgerDetails.style.display = 'none'
})


const contents = document.getElementsByClassName('contentlist');

ulHeadings[0].addEventListener('click', ()=>{
    if(contents[0].style.display != 'none'){
        contents[0].style.display = 'none'
    }else{
        contents[0].style.display = 'block'
    }
});

ulHeadings[1].addEventListener('click', ()=>{
    if(contents[1].style.display != 'none'){
        contents[1].style.display = 'none'
    }else{
        contents[1].style.display = 'block'
    }
});

ulHeadings[2].addEventListener('click', ()=>{
    if(contents[2].style.display != 'none'){
        contents[2].style.display = 'none'
    }else{
        contents[2].style.display = 'block'
    }
});

ulHeadings[3].addEventListener('click', ()=>{
    if(contents[3].style.display != 'none'){
        contents[3].style.display = 'none'
    }else{
        contents[3].style.display = 'block'
    }
});

